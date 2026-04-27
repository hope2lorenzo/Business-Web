
-- Drop the previous overly-permissive insert policy
DROP POLICY IF EXISTS "Anyone can submit a booking request" ON public.booking_requests;

-- Validation trigger (use trigger, not CHECK, per best practices)
CREATE OR REPLACE FUNCTION public.validate_booking_request()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NEW.name IS NULL OR length(trim(NEW.name)) < 2 OR length(NEW.name) > 100 THEN
    RAISE EXCEPTION 'Invalid name';
  END IF;
  IF NEW.email IS NULL OR NEW.email !~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' OR length(NEW.email) > 255 THEN
    RAISE EXCEPTION 'Invalid email';
  END IF;
  IF NEW.phone IS NOT NULL AND length(NEW.phone) > 30 THEN
    RAISE EXCEPTION 'Invalid phone';
  END IF;
  IF NEW.service IS NOT NULL AND length(NEW.service) > 100 THEN
    RAISE EXCEPTION 'Invalid service';
  END IF;
  IF NEW.message IS NOT NULL AND length(NEW.message) > 2000 THEN
    RAISE EXCEPTION 'Message too long';
  END IF;
  -- Force safe defaults; never trust client-supplied status
  NEW.status := 'new';
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS validate_booking_request_trigger ON public.booking_requests;
CREATE TRIGGER validate_booking_request_trigger
  BEFORE INSERT ON public.booking_requests
  FOR EACH ROW EXECUTE FUNCTION public.validate_booking_request();

-- Recreate INSERT policy (still anon, but trigger enforces validation)
CREATE POLICY "Public can submit validated booking requests"
ON public.booking_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(name)) BETWEEN 2 AND 100
  AND length(email) BETWEEN 5 AND 255
  AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND (phone IS NULL OR length(phone) <= 30)
  AND (message IS NULL OR length(message) <= 2000)
);
