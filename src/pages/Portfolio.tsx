import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionLabel from "@/components/SectionLabel";
import SEO from "@/components/SEO";

const projects = [
  {
    category: "Real Estate Platform",
    title: "Cape Property Hub",
    desc: "Bespoke property listing and lead management system with automated client communication.",
    tags: ["Next.js", "Blink DB", "Automation"],
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
    ],
  },
  {
    category: "Corporate Website",
    title: "SolarTech Africa",
    desc: "High-conversion lead capture site for a leading South African solar installation company.",
    tags: ["Vite", "SEO", "Conversion-Optimized"],
    images: [
      "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1000",
    ],
  },
  {
    category: "E-commerce Store",
    title: "The Coffee Collective",
    desc: "Seamless Shopify experience with recurring subscription model and inventory tracking.",
    tags: ["E-commerce", "PayFast", "Inventory"],
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=1000",
    ],
  },
  {
    category: "Booking System",
    title: "MedLink Cape Town",
    desc: "Custom clinic management and appointment booking platform for local medical practitioners.",
    tags: ["Booking", "Automation", "Privacy-Focused"],
    images: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1504813184591-01592fd039e5?auto=format&fit=crop&q=80&w=1000",
    ],
  },
];

const Portfolio = () => (
  <>
    <SEO
      title="Our Portfolio"
      description="See our latest work — websites, web apps, and digital systems built for Cape Town businesses to drive growth and efficiency."
      canonical="/portfolio"
    />
    <section className="py-20">
      <div className="container text-center max-w-3xl">
        <SectionLabel>Our Work</SectionLabel>
        <h1 className="text-4xl md:text-6xl mt-4 mb-6">
          Showcasing <span className="text-primary">Results</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          We focus on building tools that solve business problems. Here's a look at some of the systems we've delivered to Cape Town businesses.
        </p>
      </div>
    </section>

    <section className="pb-20">
      <div className="container grid md:grid-cols-2 gap-10">
        {projects.map((p) => (
          <div key={p.title} className="group">
            <div className="relative overflow-hidden rounded-2xl mb-6">
              <img
                src={p.images[0]}
                alt={`${p.title} - View 1`}
                className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
            <span className="text-xs font-bold tracking-[0.15em] uppercase text-primary">{p.category}</span>
            <h3 className="text-2xl mt-1 mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span key={tag} className="text-xs uppercase tracking-wider border border-border rounded-full px-3 py-1">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="py-20 bg-foreground text-background">
      <div className="container text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl mb-4">
          Ready to be our next <span className="text-primary">Success Story?</span>
        </h2>
        <p className="text-background/60 mb-8">
          Let's build a solution that helps your business attract more customers and scale effortlessly.
        </p>
        <Button asChild size="lg" className="rounded-full gap-2">
          <Link to="/book">Book Your Free Strategy Call <ArrowRight className="w-4 h-4" /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default Portfolio;
