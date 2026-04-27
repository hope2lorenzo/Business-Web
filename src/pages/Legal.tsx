import { useParams, Navigate, Link } from "react-router-dom";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";

type Policy = {
  title: string;
  description: string;
  body: { heading: string; text: string }[];
};

const COMPANY = "SoftDev Solutions";
const EMAIL = "softdev.assistance@gmail.com";
const PHONE = "+27 81 794 7988";
const LOCATION = "Cape Town, South Africa";
const EFFECTIVE = "23 April 2026";

const policies: Record<string, Policy> = {
  privacy: {
    title: "Privacy Policy",
    description: `How ${COMPANY} collects, uses, stores and protects personal information under POPIA and GDPR.`,
    body: [
      { heading: "1. Who we are", text: `${COMPANY} ("we", "us") is a software-as-a-service provider based in ${LOCATION}. For privacy questions contact ${EMAIL}.` },
      { heading: "2. Information we collect", text: "Account details (name, email, phone, company), billing information, content you upload to our services, and technical data such as IP address, device information, log files and cookies." },
      { heading: "3. How we use your information", text: "To provide and improve our SaaS products, authenticate users, process payments, send service and marketing communications (where lawful), provide support, comply with legal obligations and detect abuse." },
      { heading: "4. Lawful basis (POPIA / GDPR)", text: "We process personal information based on your consent, the performance of a contract with you, our legitimate interests in operating the service, and compliance with applicable South African and international laws." },
      { heading: "5. Sharing & sub-processors", text: "We share data with vetted sub-processors (cloud hosting, payment processors, analytics, email delivery, customer support tooling) under written data-processing agreements. We do not sell personal information." },
      { heading: "6. International transfers", text: "Data may be processed outside South Africa. Where this happens we rely on adequacy decisions, Standard Contractual Clauses or equivalent safeguards." },
      { heading: "7. Retention", text: "We retain personal information only as long as needed to provide the service, meet legal obligations, resolve disputes and enforce agreements. Inactive accounts are deleted on request." },
      { heading: "8. Your rights", text: "You may request access, correction, deletion, restriction, portability or objection to processing of your personal information. Email " + EMAIL + " and we will respond within the timelines required by POPIA / GDPR." },
      { heading: "9. Security", text: "We use encryption in transit, role-based access controls, audit logs, and regular security reviews. No system is 100% secure — please use a strong password and enable available security features." },
      { heading: "10. Children", text: "Our services are not directed at children under 18 and we do not knowingly collect their data." },
      { heading: "11. Changes", text: "We may update this policy. Material changes will be communicated via email or in-app notice." },
    ],
  },
  terms: {
    title: "Terms of Service",
    description: `Master subscription terms governing the use of ${COMPANY} SaaS products.`,
    body: [
      { heading: "1. Acceptance", text: `By accessing or using our services you agree to these Terms. If you are using the service on behalf of an organisation you confirm you have authority to bind that organisation.` },
      { heading: "2. Subscriptions & fees", text: "Access is provided on a subscription basis. Fees, billing cycles and included usage are described on the Pricing page or in your order form. Fees are non-refundable except as stated in the Refund Policy." },
      { heading: "3. Customer responsibilities", text: "You are responsible for the accuracy of information provided, securing account credentials, the legality of content you upload, and for compliance with the Acceptable Use Policy." },
      { heading: "4. Intellectual property", text: "We retain all rights in the platform, software, documentation and trademarks. You retain ownership of your data and grant us a limited licence to host and process it solely to provide the service." },
      { heading: "5. Confidentiality", text: "Each party will protect the other's confidential information using at least reasonable care and only use it to perform under these Terms." },
      { heading: "6. Warranties & disclaimers", text: "The service is provided on an \"as available\" basis. To the maximum extent permitted by law we disclaim all implied warranties." },
      { heading: "7. Limitation of liability", text: "To the extent permitted by law our aggregate liability is limited to the fees paid by you in the 12 months preceding the claim. We are not liable for indirect, incidental, consequential or special damages." },
      { heading: "8. Suspension & termination", text: "We may suspend or terminate access for breach of these Terms, the AUP, non-payment, or where required by law. You may cancel at any time from your account." },
      { heading: "9. Governing law", text: "These Terms are governed by the laws of the Republic of South Africa. Disputes are subject to the exclusive jurisdiction of the courts of the Western Cape." },
      { heading: "10. Changes", text: "We may modify these Terms with reasonable notice. Continued use after changes take effect constitutes acceptance." },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    description: `How ${COMPANY} uses cookies and similar technologies.`,
    body: [
      { heading: "1. What cookies are", text: "Cookies are small files stored on your device. We also use local storage and similar technologies." },
      { heading: "2. Categories we use", text: "Strictly necessary (authentication, security, load balancing), preference (language, theme), analytics (aggregated usage), and — only with consent — marketing cookies." },
      { heading: "3. Managing cookies", text: "You can control cookies via your browser settings. Disabling strictly necessary cookies will prevent core features from working." },
      { heading: "4. Third parties", text: "Some cookies are set by third-party services we use for analytics, payments and customer support. Their cookie practices are governed by their own policies." },
    ],
  },
  aup: {
    title: "Acceptable Use Policy",
    description: `Conduct and content rules for ${COMPANY} services.`,
    body: [
      { heading: "1. Prohibited activities", text: "You may not use the service to transmit malware, infringe intellectual property, harass others, send unsolicited bulk messages, scrape data without permission, or violate any applicable law." },
      { heading: "2. Security", text: "Do not attempt to probe, scan, reverse-engineer or compromise the service. Report vulnerabilities responsibly to " + EMAIL + "." },
      { heading: "3. Resource use", text: "Do not engage in activity that places undue load on the platform or interferes with other customers' use." },
      { heading: "4. Enforcement", text: "Violations may result in warning, suspension, termination and, where appropriate, referral to law enforcement." },
    ],
  },
  dpa: {
    title: "Data Processing Addendum",
    description: `Roles, obligations and safeguards when ${COMPANY} processes personal data on behalf of customers.`,
    body: [
      { heading: "1. Roles", text: "When processing customer personal data to provide the service, the customer is the responsible party / controller and we act as the operator / processor." },
      { heading: "2. Scope of processing", text: "We process customer data only on documented instructions from the customer and only as necessary to provide the service or comply with the law." },
      { heading: "3. Security measures", text: "We maintain appropriate technical and organisational measures including encryption, access control, audit logging, secure software development, vendor risk management and incident response." },
      { heading: "4. Sub-processors", text: "An up-to-date list of sub-processors is available on request. We give notice of new sub-processors and remain responsible for their performance." },
      { heading: "5. Data subject requests", text: "We assist customers in responding to data-subject requests, taking into account the nature of processing and the information available to us." },
      { heading: "6. Breach notification", text: "We will notify the customer without undue delay after becoming aware of a personal-data breach affecting customer data." },
      { heading: "7. Return or deletion", text: "On termination we will delete or return customer personal data, save where retention is required by law." },
      { heading: "8. Audits", text: "We make available the information necessary to demonstrate compliance and allow reasonable audits by the customer or an independent auditor on agreed terms." },
    ],
  },
  refund: {
    title: "Refund Policy",
    description: `Refund and cancellation terms for ${COMPANY} subscriptions and services.`,
    body: [
      { heading: "1. Subscriptions", text: "Monthly subscriptions are billed in advance and are non-refundable. You may cancel at any time and retain access until the end of the current billing cycle." },
      { heading: "2. Annual plans", text: "Annual plans cancelled within 14 days of initial purchase are eligible for a pro-rata refund of unused months. After 14 days annual plans are non-refundable." },
      { heading: "3. Project-based work", text: "Custom development projects are governed by the relevant statement of work. Deposits are non-refundable once work has commenced." },
      { heading: "4. Service unavailability", text: "If we fail to meet the Service Level Agreement you may be entitled to service credits as described in the SLA." },
      { heading: "5. How to request a refund", text: "Email " + EMAIL + " with your account details and reason. We will respond within 5 business days." },
    ],
  },
  sla: {
    title: "Service Level Agreement",
    description: `${COMPANY} availability commitments and support response times.`,
    body: [
      { heading: "1. Uptime target", text: "We target 99.5% monthly uptime for production services, excluding scheduled maintenance and force majeure." },
      { heading: "2. Scheduled maintenance", text: "Maintenance windows will be communicated at least 48 hours in advance and where possible scheduled outside business hours (SAST)." },
      { heading: "3. Support response", text: "Critical issues: within 4 business hours. High: 1 business day. Normal: 2 business days. Support is provided via " + EMAIL + " during business hours (Mon–Fri, 09:00–17:00 SAST)." },
      { heading: "4. Service credits", text: "If monthly uptime falls below the target, eligible customers may request service credits of 5%–25% of the affected month's fee, capped at 50% per month." },
      { heading: "5. Exclusions", text: "The SLA does not apply to beta features, free tiers, or issues caused by customer misuse, third-party services or events outside our reasonable control." },
    ],
  },
};

const Legal = () => {
  const { slug } = useParams();
  const policy = slug ? policies[slug] : undefined;
  if (!policy) return <Navigate to="/" replace />;

  return (
    <>
      <SEO title={policy.title} description={policy.description} canonical={`/legal/${slug}`} />
      <section className="py-20">
        <div className="container max-w-3xl">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="text-4xl md:text-5xl mt-4 mb-4">{policy.title}</h1>
          <p className="text-muted-foreground mb-2">Effective: {EFFECTIVE}</p>
          <p className="text-muted-foreground mb-12">{policy.description}</p>

          <div className="space-y-8">
            {policy.body.map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl font-bold mb-2">{s.heading}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 rounded-2xl border border-border bg-card">
            <h3 className="font-bold mb-2">Contact</h3>
            <p className="text-sm text-muted-foreground">
              {COMPANY} · {LOCATION}<br />
              Email: <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a><br />
              Phone: {PHONE}
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              See also our other policies in the{" "}
              <Link to="/legal/privacy" className="text-primary hover:underline">footer</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Legal;