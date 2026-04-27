import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Share2, Facebook, Twitter, Linkedin, Copy, Check } from "lucide-react";
import { useState } from "react";
import { posts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import SectionLabel from "@/components/SectionLabel";
import SEO from "@/components/SEO";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const post = posts.find((p) => p.slug === slug);
  const relatedPosts = posts.filter((p) => p.slug !== slug && p.category === post?.category).slice(0, 2);
  const otherPosts = relatedPosts.length < 2
    ? [...relatedPosts, ...posts.filter((p) => p.slug !== slug && p.category !== post?.category).slice(0, 2 - relatedPosts.length)]
    : relatedPosts;

  if (!post) {
    return (
      <section className="py-32 text-center">
        <div className="container">
          <h1 className="text-4xl mb-4">Post not found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/blog")} className="rounded-full">Back to Blog</Button>
        </div>
      </section>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(post.title);

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        ogImage={post.image}
        ogType="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          datePublished: post.date,
          author: { "@type": "Person", name: post.author.name },
        }}
      />
      {/* Hero */}
      <section className="pt-20 pb-8">
        <div className="container max-w-3xl">
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all posts
          </button>

          <SectionLabel>{post.category}</SectionLabel>
          <h1 className="text-3xl md:text-5xl mt-4 font-serif leading-tight">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-foreground font-medium text-sm">{post.author.name}</p>
                <p className="text-xs">{post.author.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container max-w-4xl">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            {post.content.map((block, i) => {
              if (block.startsWith("## ")) {
                return <h2 key={i} className="text-2xl font-serif mt-10 mb-4">{block.replace("## ", "")}</h2>;
              }
              return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{block}</p>;
            })}
          </div>

          {/* Share */}
          <div className="border-t border-border mt-12 pt-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Share2 className="w-4 h-4" /> Share this article
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <button
                  onClick={handleCopyLink}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-card">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif mb-8">Related Articles</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {otherPosts.map((related) => (
              <Link to={`/blog/${related.slug}`} key={related.slug} className="group">
                <div className="overflow-hidden rounded-2xl mb-4">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">{related.category}</span>
                <h3 className="text-lg mt-1 group-hover:text-primary transition-colors font-serif">{related.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{related.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
