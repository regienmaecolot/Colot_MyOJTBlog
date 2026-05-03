import { ArrowRight, Calendar, Clock } from "lucide-react";

interface BlogProps {
  onPostClick?: (postId: number) => void;
}

const blogPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=900&h=650&fit=crop",
    category: "Web Development",
    title: "Building Scalable React Applications in 2024",
    excerpt: "A practical note about component structure, maintainable code, and learning by building.",
    date: "Dec 10, 2024",
    readTime: "8 min read",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&h=650&fit=crop",
    category: "Tutorial",
    title: "Mastering TypeScript: Advanced Types and Patterns",
    excerpt: "A focused entry on stronger typing habits and how they improve confidence while coding.",
    date: "Dec 5, 2024",
    readTime: "10 min read",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=650&fit=crop",
    category: "Career",
    title: "From Junior to Senior Developer: My Journey",
    excerpt: "Reflections on growth, communication, and the mindset needed to keep improving.",
    date: "Nov 28, 2024",
    readTime: "6 min read",
  },
];

export function Blog({ onPostClick }: BlogProps) {
  return (
    <section id="blog" className="section-shell blog-section">
      <div className="section-heading">
        <p className="eyebrow">Journal</p>
        <h2>Blog posts with a fresh magazine-style layout.</h2>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <article
            key={post.id}
            className={index === 0 ? "blog-card featured" : "blog-card"}
            onClick={() => onPostClick?.(post.id)}
          >
            <img src={post.image} alt={post.title} />
            <div className="blog-card-body">
              <span className="pill">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <span>
                  <Calendar size={15} />
                  {post.date}
                </span>
                <span>
                  <Clock size={15} />
                  {post.readTime}
                </span>
              </div>
              <button>
                Read More <ArrowRight size={17} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
