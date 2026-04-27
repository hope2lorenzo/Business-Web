import { Link } from "react-router-dom";
import { ArrowRight, Globe, ShoppingCart, Cog, Search, Wrench, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionLabel from "@/components/SectionLabel";
import SEO from "@/components/SEO";

const services = [
  {
    id: "web-development",
    icon: Globe,
    title: "Business Website Development",
    desc: "High-performance, conversion-optimized websites tailored to your business goals. We specialize in building fast, secure, and mobile-friendly sites that represent your brand professionally.",
    features: ["Mobile-first design", "Fast loading speeds", "SEO-optimized structure", "Domain & Hosting setup"],
    price: "R2,000+",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    desc: "Powerful online stores with secure payments and inventory management. Sell your products online efficiently with integrated South African payment gateways like PayFast and Peach Payments.",
    features: ["Secure payments", "Inventory tracking", "Order management", "Customer dashboards"],
    price: "R8,000+",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "automation",
    icon: Cog,
    title: "Business Automation & Web Apps",
    desc: "Streamline your operations with custom booking systems, automated workflows, and internal client dashboards. Reduce manual work and increase efficiency with our advanced solutions.",
    features: ["Booking systems", "Admin panels", "Automated reports", "Custom workflows"],
    price: "R10,000+",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO & Growth",
    desc: "Boost your online visibility in Cape Town and attract more qualified leads. Our data-driven approach ensures your business stays ahead of the competition on search results.",
    features: ["Local SEO setup", "Keyword research", "Google Business optimization", "Competitor analysis"],
    price: "R1,000/pm+",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Continuous security, backups, and updates to keep your site running perfectly. We handle the technical side so you can focus on running your business.",
    features: ["Daily backups", "Security monitoring", "Content updates", "Priority support"],
    price: "R500/pm+",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
  },
];

const Services = () => (
  <>
    <SEO
      title="Web Development Services"
      description="Explore our full range of web development services — business websites, booking systems, e-commerce, SEO, custom apps, and maintenance for Cape Town businesses."
      canonical="/services"
    />
    {/* Hero */}
    <section className="py-20">
      <div className="container text-center max-w-3xl">
        <SectionLabel>Our Expertise</SectionLabel>
        <h1 className="text-4xl md:text-6xl mt-4 mb-6">
          Digital <span className="text-primary">Solutions</span> That Work
        </h1>
        <p className="text-muted-foreground text-lg">
          We offer a comprehensive suite of digital services designed to help Cape Town businesses attract, convert, and retain customers. From stunning websites to complex automation.
        </p>
      </div>
    </section>

    {/* Service Cards */}
    <section className="pb-20">
      <div className="container space-y-20">
        {services.map((s, i) => (
          <div key={s.title} id={s.id} className={`grid md:grid-cols-2 gap-12 items-center scroll-mt-24 ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
            <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
              <s.icon className="w-10 h-10 text-primary mb-4 p-2 bg-primary/10 rounded-xl" />
              <h2 className="text-2xl md:text-3xl mb-4">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {s.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Starting from</p>
                  <p className="text-2xl font-bold font-serif">{s.price}</p>
                </div>
                <Button asChild className="rounded-full gap-2">
                  <Link to="/book">Get a Quote <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
            <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
              <img
                src={s.image}
                alt={s.title}
                className="rounded-2xl w-full h-[400px] object-cover shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Custom CTA */}
    <section className="py-20 bg-foreground text-background">
      <div className="container text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl mb-4">Need a Custom Solution?</h2>
        <p className="text-background/60 mb-8">
          Every business is unique. We can build custom web platforms, bespoke APIs, or complex automation systems designed specifically for your workflows.
        </p>
        <Button asChild size="lg" className="rounded-full gap-2">
          <Link to="/book">Chat with Our Agent <ArrowRight className="w-4 h-4" /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default Services;
