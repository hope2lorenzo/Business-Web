import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";


const Book = () => {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Development",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.name.trim() || !form.email.trim()) {
    toast.error("Please add your name and email so we can get back to you.");
    return;
  }

  setSubmitting(true);

  // Save to Supabase
  const { error } = await supabase.from("booking_requests").insert({
    name: form.name.trim(),
    email: form.email.trim(),
    phone: form.phone.trim() || null,
    service: form.service,
    message: form.message.trim() || null,
  });

  if (error) {
    setSubmitting(false);
    toast.error("Something went wrong. Please try again.");
    return;
  }

  // Send email notification
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        service: form.service,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY 
    );

    toast.success("Thanks! We'll be in touch within one business day.");
    setForm({
      name: "",
      email: "",
      phone: "",
      service: "Website Development",
      message: "",
    });
  } catch (err) {
    toast.error("Saved successfully, but email notification failed.");
  }

  setSubmitting(false);
};

  return (
    <>
    <SEO
      title="Book a Free Strategy Call"
      description="Schedule a free consultation with SoftDev Solutions. Let's discuss how we can help your Cape Town business grow with a custom digital strategy."
      canonical="/book"
    />
    <section className="py-20">
      <div className="container grid md:grid-cols-2 gap-16 max-w-5xl">
        <div>
          <SectionLabel>Let's Talk</SectionLabel>
          <h1 className="text-4xl md:text-5xl mt-4 mb-6">
            Book Your Free <span className="text-primary">Strategy Call</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Tell us about your business goals and we'll map out a clear path to achieving them with the right digital solution.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">+27 81 794 7988</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">softdev.assistance@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Cape Town, South Africa</p>
              </div>
            </div>
          </div>
        </div>

        <form
          className="bg-card border border-border rounded-2xl p-8 space-y-5"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Name</label>
              <Input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="rounded-lg" required />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Email</label>
              <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your email" className="rounded-lg" required />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Phone</label>
            <Input name="phone" value={form.phone} onChange={handleChange} placeholder="+27..." className="rounded-lg" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">What do you need?</label>
            <select name="service" value={form.service} onChange={handleChange} className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm">
              <option>Website Development</option>
              <option>E-commerce</option>
              <option>Automation / Web App</option>
              <option>SEO & Growth</option>
              <option>Maintenance</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Tell us more</label>
            <Textarea name="message" value={form.message} onChange={handleChange} placeholder="Brief description of your project..." className="rounded-lg" rows={4} />
          </div>
          <Button type="submit" size="lg" disabled={submitting} className="w-full rounded-full gap-2">
            {submitting ? (<><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>) : (<>Send Request <ArrowRight className="w-4 h-4" /></>)}
          </Button>
        </form>
      </div>
    </section>
    </>
  );
};

export default Book;
