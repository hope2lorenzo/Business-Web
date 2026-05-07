import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "27817947988";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-md bg-primary text-primary-foreground font-bold text-sm">S</span>
            <span className="font-bold text-lg tracking-tight">
              SOFTDEV<span className="text-primary">SOLUTION</span>
            </span>
          </Link>
          <p className="text-background/60 max-w-sm text-sm leading-relaxed">
            Cape Town's digital growth partner. We build scalable websites, automation systems, and e-commerce solutions.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><Link to="/services#web-development" className="hover:text-primary transition-colors">Web Development</Link></li>
            <li><Link to="/services#ecommerce" className="hover:text-primary transition-colors">E-commerce</Link></li>
            <li><Link to="/services#automation" className="hover:text-primary transition-colors">Automation</Link></li>
            <li><Link to="/services#seo" className="hover:text-primary transition-colors">SEO & Growth</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
            <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row gap-4 justify-between items-center text-xs text-background/50">
        <p>© {new Date().getFullYear()} SoftDev Solution. All rights reserved.</p>
      </div>
    </div>
    {/* WhatsApp FAB */}
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SoftDev%20Solutions!%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  </footer>
);

export default Footer;
