import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, CheckCircle, Users, Award, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionLabel from "@/components/SectionLabel";
import SEO from "@/components/SEO";

const approaches = [
  { icon: Target, title: "Results-First", desc: "Every line of code is written with your business goals in mind." },
  { icon: Users, title: "Collaborative", desc: "We work as an extension of your team, not just a service provider." },
  { icon: Award, title: "Premium Quality", desc: "We never compromise on design, performance, or security." },
  { icon: TrendingUp, title: "Scalability", desc: "We build systems that can grow from 10 to 10,000 customers." },
];

const About = () => (
  <>
    <SEO
      title="About Us"
      description="Learn about SoftDev Solution — a Cape Town web development agency focused on building scalable digital systems for growing businesses."
      canonical="/about"
    />
    <section className="py-20">
      <div className="container text-center max-w-3xl">
        <SectionLabel>Our Story</SectionLabel>
        <h1 className="text-4xl md:text-6xl mt-4 mb-6">
          We Are <span className="text-primary">SoftDev Solution</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          A Cape Town-based digital solutions agency dedicated to helping local businesses and startups bridge the gap between their current operations and their full digital potential.
        </p>
      </div>
    </section>

    {/* Mission / Vision */}
    <section className="pb-20">
      <div className="container grid md:grid-cols-2 gap-12 max-w-4xl">
        <div className="bg-card border border-border rounded-2xl p-10">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            To empower South African businesses by providing high-performance, scalable digital solutions that drive measurable growth and operational efficiency. We believe technology should be an asset, not a burden.
          </p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-10">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <Eye className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl mb-4">Our Vision</h2>
          <p className="text-muted-foreground leading-relaxed">
            To be the most trusted digital partner for growing businesses in Cape Town, recognized for our commitment to results, transparency, and the continuous evolution of our clients' digital ecosystems.
          </p>
        </div>
      </div>
    </section>

    {/* Approach */}
    <section className="py-20 bg-card">
      <div className="container text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl mb-4">Our Approach</h2>
        <p className="text-muted-foreground mb-12">
          We combine business strategy with technical excellence to create solutions that solve real problems.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((a) => (
            <div key={a.title} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <a.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold mb-2">{a.title}</h4>
              <p className="text-muted-foreground text-sm">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Founder */}
    <section className="py-20">
      <div className="container max-w-3xl text-center">
        <SectionLabel>Meet the Founder</SectionLabel>
        <h2 className="text-3xl md:text-4xl mt-2 mb-6">Innovation Driven by Passion</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Founded by a developer with a deep passion for business efficiency, SoftDev Solutions was born out of a desire to help small to medium-sized businesses compete on a global scale.
        </p>
        <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground mb-6 text-left max-w-xl mx-auto">
          "We focus on automation and growth because we believe business owners should spend their time leading, not fighting with outdated systems."
        </blockquote>
        <div className="flex items-center gap-4 justify-center">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">SA</div>
          <div className="text-left">
            <p className="font-bold text-sm">SoftDev Agent</p>
            <p className="text-muted-foreground text-xs">Digital Growth Expert</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-foreground text-background">
      <div className="container text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl mb-8">Ready to grow your business?</h2>
        <Button asChild size="lg" className="rounded-full gap-2">
          <Link to="/book">Book Your Free Consultation <ArrowRight className="w-4 h-4" /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default About;
