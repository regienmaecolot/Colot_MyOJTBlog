import { ArrowLeft, Calendar, Clock, Copy, User } from "lucide-react";
import { useState } from "react";

interface BlogPostProps {
  onBack: () => void;
  post: {
    id: number;
    image: string;
    category: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    author: {
      name: string;
      avatar: string;
      bio: string;
    };
    content: {
      sections: Array<{
        id: string;
        heading: string;
        paragraphs: string[];
        codeBlock?: {
          language: string;
          code: string;
        };
      }>;
    };
  };
}

export function BlogPost({ onBack, post }: BlogPostProps) {
  const [activeSection, setActiveSection] = useState(post.content.sections[0]?.id ?? "");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    window.scrollTo({
      top: element.getBoundingClientRect().top + window.pageYOffset - 100,
      behavior: "smooth",
    });
    setActiveSection(sectionId);
  };

  return (
    <main className="article-page">
      <button onClick={onBack} className="back-link">
        <ArrowLeft size={19} />
        Back to Journal
      </button>

      <header className="article-hero">
        <img src={post.image} alt={post.title} />
        <div className="article-hero-copy">
          <span className="pill">{post.category}</span>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div className="article-meta">
            <span>
              <Calendar size={17} />
              {post.date}
            </span>
            <span>
              <Clock size={17} />
              {post.readTime}
            </span>
          </div>
        </div>
      </header>

      <div className="article-layout">
        <article className="article-content">
          <div className="author-strip">
            <img src={post.author.avatar} alt={post.author.name} />
            <div>
              <span>
                <User size={16} />
                Written by {post.author.name}
              </span>
              <p>{post.author.bio}</p>
            </div>
          </div>

          {post.content.sections.map((section) => (
            <section key={section.id} id={section.id} className="article-section">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  dangerouslySetInnerHTML={{
                    __html: paragraph.replace(/`([^`]+)`/g, "<code>$1</code>"),
                  }}
                />
              ))}

              {section.codeBlock && (
                <div className="code-panel">
                  <div>
                    <span>{section.codeBlock.language}</span>
                    <button
                      onClick={() => navigator.clipboard.writeText(section.codeBlock!.code)}
                      aria-label="Copy code"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                  <pre>
                    <code>{section.codeBlock.code}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}

          <aside className="takeaway-box">
            <h3>Key takeaways</h3>
            <p>
              Keep documenting progress, practice with intention, and turn every
              task into evidence of growth.
            </p>
          </aside>
        </article>

        <aside className="article-sidebar">
          <h3>Contents</h3>
          {post.content.sections.map((section) => (
            <button
              key={section.id}
              className={activeSection === section.id ? "active" : ""}
              onClick={() => scrollToSection(section.id)}
            >
              {section.heading}
            </button>
          ))}
        </aside>
      </div>
    </main>
  );
}
