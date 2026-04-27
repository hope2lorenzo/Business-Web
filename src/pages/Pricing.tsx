import { Link } from "react-router-dom";
import { ArrowRight, Rocket, LayoutGrid, Terminal, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionLabel from "@/components/SectionLabel";
import SEO from "@/components/SEO";

const plans = [
  {
    icon: Rocket,
    name: "Starter",
    price: "R2,000",
    desc: "Perfect for local service providers and small startups looking to establish a professional presence.",
    features: ["5-Page Professional Website", "Mobile-First Design", "Basic SEO Optimization", "Contact Form Integration", "Social Media Links", "1 Month Free Support"],
    popular: false,
  },
  {
    icon: LayoutGrid,
    name: "Professional",
    price: "R8,000",
    desc: "Ideal for growing businesses needing a powerful tool to generate leads and convert visitors.",
    features: ["10-Page Premium Website", "Advanced SEO Strategy", "Lead Magnet Integration", "Blog System Setup", "Google My Business Optimization", "Speed & Performance Optimization", "3 Months Free Support"],
    popular: true,
  },
  {
    icon: Terminal,
    name: "Automation",
    price: "R10,000+",
    desc: "Bespoke systems for businesses that want to automate operations and provide a client portal.",
    features: ["Custom Booking/Inventory System", "Client Dashboard/Portal", "Third-Party API Integrations", "Automated Workflow Setup", "Custom Internal Admin Panel", "Full Security & SSL Setup", "6 Months Priority Support"],
    popular: false,
  },
];

const faqs = [
  { q: "How long does a website take to build?", a: "A standard website takes 2-4 weeks, while complex automation systems can take 6-12 weeks." },
  { q: "Do I own the website after development?", a: "Absolutely. Once the final payment is made, you have full ownership of the code and assets." },
  { q: "Are there monthly fees?", a: "Only if you opt for our maintenance (from R500/pm) and SEO growth plans (from R1,000/pm)." },
  { q: "Can you integrate South African payments?", a: "Yes, we integrate PayFast, Peach Payments, and Yoco for seamless local transactions." },
];

const Pricing = () => (
  <>
    <SEO
      title="Pricing Packages"
      description="Transparent pricing for web development, e-commerce, and business automation. Choose a package that fits your Cape Town business needs."
      canonical="/pricing"
    />
    <section className="py-20">
      <div className="container text-center max-w-3xl">
        <SectionLabel>Pricing Packages</SectionLabel>
        <h1 className="text-4xl md:text-6xl mt-4 mb-6">
          Transparent <span className="text-primary">Investment</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Choose the package that fits your current business stage. No hidden fees, just clear deliverables and long-term results.
        </p>
      </div>
    </section>

    <section className="pb-20">
      <div className="container grid md:grid-cols-3 gap-8 max-w-5xl">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-8 ${
              plan.popular
                ? "bg-primary text-primary-foreground shadow-2xl scale-105"
                : "bg-card border border-border"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <plan.icon className={`w-10 h-10 mb-4 p-2 rounded-xl ${plan.popular ? "bg-primary-foreground/20" : "bg-primary/10 text-primary"}`} />
            <h3 className="text-xl font-bold font-sans mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold font-serif">{plan.price}</span>
              <span className={`text-xs uppercase tracking-wider ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                Starting point
              </span>
            </div>
            <p className={`text-sm mb-6 ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{plan.desc}</p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <CheckCircle className={`w-4 h-4 flex-shrink-0 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              asChild
              className={`w-full rounded-full ${plan.popular ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" : ""}`}
              variant={plan.popular ? "default" : "outline"}
            >
              <Link to="/book">Select {plan.name}</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 bg-card">
      <div className="container max-w-2xl">
        <h2 className="text-3xl md:text-4xl text-center mb-10">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-6 bg-background">
              <AccordionTrigger className="text-left font-bold">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </>
);

export default Pricing;
