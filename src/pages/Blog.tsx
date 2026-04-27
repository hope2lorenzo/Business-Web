import { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import SectionLabel from "@/components/SectionLabel";
import { posts } from "@/data/blogPosts";

const categories = ["All Posts", "Automation", "Design", "SEO", "Strategy", "Business Growth"];

const Blog = () => {
  const [active, setActive] = useState("All Posts");
  const [search, setSearch] = useState("");

  const filtered = posts.filter((p) => {
    const matchCat = active === "All Posts" || p.category === active;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <SEO
        title="Blog — Web Development Insights"
        description="Expert articles on web development, SEO, automation, and digital growth strategies for Cape Town businesses."
        canonical="/blog"
      />
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-end mb-12">
            <div>
              <SectionLabel>Our Journal</SectionLabel>
              <h1 className="text-4xl md:text-6xl mt-4">
                Digital <em className="text-primary not-italic">Insights</em>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-md">
                Expert advice on web development, business automation, and scaling your brand in the digital age.
              </p>
            </div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search insights..."
                className="pl-10 rounded-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full border transition-colors ${
                  active === cat
                    ? "bg-foreground text-background border-foreground"
                    : "border-border hover:border-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.slug} className="group cursor-pointer block">
                <article>
                  <div className="overflow-hidden rounded-2xl mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">{post.category}</span>
                  <h3 className="text-lg mt-1 mb-1 group-hover:text-primary transition-colors font-serif">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">No posts found matching your criteria.</p>
          )}
        </div>
      </section>

      {/* Newsletter */}
      {/*<section className="py-20 bg-card">
        <div className="container max-w-lg text-center">
          <h2 className="text-3xl mb-4">Get Digital Growth Tips</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our monthly journal and get expert insights on scaling your business through technology.
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Your email address" className="rounded-full" />
            <Button type="submit" className="rounded-full">Subscribe</Button>
          </form>
        </div>
      </section>*/}
    </>
  );
};

export default Blog;
