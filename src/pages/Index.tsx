import { Link } from "react-router-dom";
import { ArrowRight, Globe, ShoppingCart, Cog, Search, Monitor, Wrench, CheckCircle, Target, Users, TrendingUp, DollarSign, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionLabel from "@/components/SectionLabel";
import SEO from "@/components/SEO";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=1200",
    alt: "Modern Cape Town Workspace",
    label: "Cape Town, SA",
    caption: "Empowering local startups with scalable automation.",
  },
  {
    src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=1200",
    alt: "Local plumber at work",
    label: "Plumbers",
    caption: "Booking systems that fill your calendar automatically.",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200",
    alt: "Local restaurant and food business",
    label: "Food Businesses",
    caption: "Online menus, ordering, and reservations made simple.",
  },
  {
    src: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80&w=1200",
    alt: "Hardware store interior",
    label: "Hardware Stores",
    caption: "E-commerce and inventory tools for local retailers.",
  },
  {
    src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1200",
    alt: "Car repair mechanic working on a vehicle",
    label: "Car Repair Shops",
    caption: "Quote, schedule, and follow up — fully automated.",
  },
  {
    src: "https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&q=80&w=1200",
    alt: "Hair salon and beauty business",
    label: "Salons & Beauty",
    caption: "Online bookings, deposits, and client reminders.",
  },
];

const services = [
  { icon: Globe, title: "Business Website Development", desc: "High-performance, conversion-optimized websites tailored to your business goals.", link: "/services" },
  { icon: Cog, title: "Booking & Automation Systems", desc: "Streamline your operations with custom booking systems and automated workflows.", link: "/services" },
  { icon: ShoppingCart, title: "E-commerce Solutions", desc: "Powerful online stores with secure payments and inventory management.", link: "/services" },
  { icon: Search, title: "SEO & Online Growth", desc: "Boost your local visibility in Cape Town and attract more qualified leads.", link: "/services" },
  { icon: Monitor, title: "Custom Web Applications", desc: "Scalable internal tools, client dashboards, and complex web platforms.", link: "/services" },
  { icon: Wrench, title: "Maintenance & Support", desc: "Continuous security, backups, and updates to keep your site running perfectly.", link: "/services" },
];

const steps = [
  { num: "01", title: "Strategy", desc: "We define your goals and map out the path to success." },
  { num: "02", title: "Design", desc: "Creating a modern, conversion-focused user experience." },
  { num: "03", title: "Development", desc: "Building your solution with clean, scalable code." },
  { num: "04", title: "Launch", desc: "Testing, optimizing, and deploying to the live world." },
  { num: "05", title: "Growth", desc: "Ongoing support and optimization to drive results." },
];

const whyUs = [
  { icon: Target, title: "Business-Focused Solutions", desc: "We build for ROI, not just for looks." },
  { icon: Users, title: "Local Cape Town Support", desc: "Direct communication and local market expertise." },
  { icon: TrendingUp, title: "Scalable Systems", desc: "Solutions that grow as your business grows." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "No hidden costs. Clear, upfront deliverables." },
  { icon: Handshake, title: "Long-term Partnership", desc: "We are in it for your long-term growth." },
];

const Index = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, 4500);
    return () => clearInterval(interval);
  }, [api]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SoftDev Solutions",
    url: "https://softdevsolution.co.za",
    description: "Cape Town web development agency specializing in business websites, automation systems, and e-commerce solutions.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://softdevsolution.co.za/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <SEO
        title="Cape Town Web Development & Business Systems"
        description="SoftDev Solutions helps Cape Town businesses attract more customers, automate operations, and scale with professional websites and digital systems."
        canonical="/"
        jsonLd={jsonLd}
      />
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              Digital Growth Partner
            </span>
            <h1 className="text-4xl md:text-6xl leading-tight mb-6">
              Professional Websites &{" "}
              <em className="text-primary not-italic">Business Systems</em>{" "}
              That Drive Growth
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              We help Cape Town businesses attract more customers, automate operations, and scale confidently. Not just a website—a tool for growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full gap-2">
                <Link to="/book">Book a Free Strategy Call <ArrowRight className="w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{ loop: true, align: "start" }}
              className="w-full"
            >
              <CarouselContent>
                {heroSlides.map((slide) => (
                  <CarouselItem key={slide.src}>
                    <div className="relative">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                        <p className="text-xs text-muted-foreground">{slide.label}</p>
                        <p className="font-semibold text-sm">{slide.caption}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-3 top-1/2" />
              <CarouselNext className="right-3 top-1/2" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-20 bg-card">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">More Than Just a Web Agency</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At SoftDev Solutions, we don't just build websites; we build scalable digital systems. We focus on conversion, automation, and long-term results to ensure your business thrives in the digital age.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Based in Cape Town, we understand the local market and the needs of growing startups. Our agents work as your digital growth partners, not just service providers.
            </p>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/about">Our Philosophy</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" alt="Strategy Session" className="rounded-xl w-full h-48 object-cover" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600" alt="Development" className="rounded-xl w-full h-48 object-cover" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" alt="Analytics" className="rounded-xl w-full h-48 object-cover" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600" alt="Automation dashboard on laptop" className="rounded-xl w-full h-48 object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <SectionLabel>What We Offer</SectionLabel>
              <h2 className="text-3xl md:text-4xl mt-2">Solutions Tailored for Growth</h2>
            </div>
            <Button asChild variant="outline" className="rounded-full hidden md:flex">
              <Link to="/services">All Services</Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.link}
                className="group border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all bg-card"
              >
                <s.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl mb-2 font-serif">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-card">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Our Method</SectionLabel>
            <h2 className="text-3xl md:text-4xl mt-2 mb-10">A Proven Path to Success</h2>
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-6">
                  <span className="text-3xl font-serif text-primary">{step.num}</span>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000"
            alt="Cape Town Business Meeting"
            className="rounded-2xl w-full h-[500px] object-cover shadow-xl"
            loading="lazy"
          />
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20">
        <div className="container">
          <SectionLabel>Why SoftDev Solutions?</SectionLabel>
          <h2 className="text-3xl md:text-4xl mt-2 mb-12">Cape Town's Scalable Partner</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/about">About the Agency</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl mb-6">Start Your Digital Growth Today</h2>
          <p className="text-background/60 mb-8">
            Ready to automate your operations and attract more customers? Let's build the system your business deserves.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full gap-2">
              <Link to="/book">Book Your Strategy Call <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
