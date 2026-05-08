import { Link } from "react-router-dom";
import { ArrowRight, Shield, Lock, Database, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionLabel from "@/components/SectionLabel";
import SEO from "@/components/SEO";

const privacySections = [
  {
    icon: Shield,
    title: "Information We Collect",
    desc: "We may collect your name, email address, phone number, business information, and project details when you submit forms or contact us directly.",
  },
  {
    icon: Database,
    title: "How We Use Your Information",
    desc: "Your information is used to respond to enquiries, provide services, improve website functionality, and communicate project updates.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    desc: "We implement reasonable security measures to protect your information from unauthorized access, misuse, or disclosure.",
  },
  {
    icon: FileCheck,
    title: "Your Rights",
    desc: "Under POPIA, you may request access, correction, deletion, or objection to processing of your personal information.",
  },
];

const PrivacyPolicy = () => (
  <>
    <SEO
      title="Privacy Policy"
      description="Read the SoftDev Solutions privacy policy and learn how we collect, use, and protect your personal information in accordance with POPIA."
      canonical="/privacy-policy"
    />

    {/* Hero */}
    <section className="py-20">
      <div className="container text-center max-w-3xl">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="text-4xl md:text-6xl mt-4 mb-6">
          Privacy <span className="text-primary">Policy</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          SoftDev Solutions is committed to protecting your personal information
          in accordance with South Africa’s Protection of Personal Information
          Act (POPIA).
        </p>
      </div>
    </section>

    {/* Overview Cards */}
    <section className="pb-20">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
        {privacySections.map((section) => (
          <div
            key={section.title}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <section.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">{section.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {section.desc}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* Full Policy */}
    <section className="py-20 bg-card">
      <div className="container max-w-4xl">
        <div className="bg-background border border-border rounded-2xl p-10 space-y-8">
          <div>
            <h2 className="text-2xl mb-3">1. Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              SoftDev Solutions is a web development and digital solutions
              business based in Cape Town, South Africa.
            </p>
            <p className="text-muted-foreground mt-4">
              Contact us at:
              <br />
              Email: hello@softdevsolution.co.za
              <br />
              Phone: +27 81 794 7988
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-3">2. Information We Collect</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Name and surname</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business details</li>
              <li>Project or enquiry information</li>
              <li>Technical website usage data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl mb-3">3. Why We Collect Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect personal information to provide services, respond to
              enquiries, improve user experience, communicate project updates,
              and maintain business records.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-3">4. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use trusted third-party tools including EmailJS, Vercel,
              Hostinger, and analytics providers to operate our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-3">5. Your Rights Under POPIA</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to request access to your personal information,
              correction of inaccurate data, deletion of data, or objection to
              processing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-3">6. Policy Updates</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy may be updated periodically. Changes will be
              reflected on this page with a revised date.
            </p>
            <p className="text-muted-foreground mt-4">
              Last updated: 8 May 2026
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-foreground text-background">
      <div className="container text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl mb-8">
          Have questions about your data?
        </h2>
        <Button asChild size="lg" className="rounded-full gap-2">
          <Link to="/book">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  </>
);

export default PrivacyPolicy;