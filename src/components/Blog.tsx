import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogProps {
  onPostClick?: (postId: number) => void;
}

export function Blog({ onPostClick }: BlogProps) {
  const blogPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=600&fit=crop",
      category: "Web Development",
      title: "Building Scalable React Applications in 2024",
      excerpt:
        "Learn the best practices and patterns for creating maintainable and scalable React applications with modern tools and techniques.",
      date: "Dec 10, 2024",
      readTime: "8 min read",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      category: "Tutorial",
      title: "Mastering TypeScript: Advanced Types and Patterns",
      excerpt:
        "Dive deep into TypeScript's advanced type system and learn how to leverage it for better code quality and developer experience.",
      date: "Dec 5, 2024",
      readTime: "10 min read",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      category: "Career",
      title: "From Junior to Senior Developer: My Journey",
      excerpt:
        "Reflections on my growth as a software developer and the key lessons learned along the way to becoming a senior developer.",
      date: "Nov 28, 2024",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#F3F4F7]">
            Latest <span className="text-[#B5E3FF]">Blog Posts</span>
          </h2>
          <div className="w-20 h-1 bg-[#B5E3FF] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onPostClick?.(post.id)}
              className="bg-[#1A1F35] rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all duration-300 overflow-hidden group hover:shadow-lg hover:shadow-[#B5E3FF]/10 hover:-translate-y-1 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#B5E3FF] text-[#0D0D12] text-xs rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-3 text-[#C7CCD9] text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[#F3F4F7] text-lg mb-3 group-hover:text-[#B5E3FF] transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#C7CCD9] text-sm mb-4">{post.excerpt}</p>

                {/* Read More Link */}
                <button className="flex items-center gap-2 text-[#B5E3FF] hover:gap-3 transition-all text-sm">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-transparent border-2 border-[#B5E3FF] text-[#B5E3FF] rounded-lg hover:bg-[#B5E3FF]/10 transition-all duration-300">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
}