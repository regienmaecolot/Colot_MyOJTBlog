import { Calendar, Clock, User, ArrowLeft, Share2, Twitter, Linkedin, Link as LinkIcon, Facebook } from "lucide-react";
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
  const [activeSection, setActiveSection] = useState("");
  const [showShareMenu, setShowShareMenu] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = post.title;

    let shareUrl = "";
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
        setShowShareMenu(false);
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
      setShowShareMenu(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D12] pt-16">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#C7CCD9] hover:text-[#B5E3FF] transition-colors group"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
          Back to Blog
        </button>
      </div>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative overflow-hidden rounded-2xl border border-[#C7CCD9]/20">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 sm:h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] to-transparent"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Article Header */}
            <div className="mb-12">
              {/* Category Badge */}
              <div className="mb-4">
                <span className="px-4 py-2 bg-[#B5E3FF]/10 text-[#B5E3FF] text-sm rounded-full border border-[#B5E3FF]/30">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#F3F4F7] mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-[#C7CCD9] mb-8">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-[#B5E3FF]" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-[#B5E3FF]" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Author Section */}
              <div className="flex items-center gap-4 p-6 bg-[#1A1F35] rounded-lg border border-[#C7CCD9]/20">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full border-2 border-[#B5E3FF]/30"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <User size={16} className="text-[#B5E3FF]" />
                    <h3 className="text-[#F3F4F7]">{post.author.name}</h3>
                  </div>
                  <p className="text-[#C7CCD9] text-sm">{post.author.bio}</p>
                </div>
              </div>
            </div>

            {/* Article Content - Will be added in next step */}
            <div className="prose-custom">
              {/* Content sections will go here */}
              {post.content.sections.map((section) => (
                <div key={section.id} id={section.id} className="mb-16 scroll-mt-24">
                  {/* Section Heading */}
                  <h2 className="text-2xl sm:text-3xl text-[#F3F4F7] mb-6 pb-3 border-b border-[#C7CCD9]/20">
                    {section.heading}
                  </h2>

                  {/* Paragraphs */}
                  {section.paragraphs.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-[#C7CCD9] text-lg leading-relaxed mb-6"
                      dangerouslySetInnerHTML={{
                        __html: paragraph.replace(
                          /`([^`]+)`/g,
                          '<code class="px-2 py-1 bg-[#1A1F35] text-[#B5E3FF] rounded text-base border border-[#C7CCD9]/20">$1</code>'
                        ),
                      }}
                    />
                  ))}

                  {/* Code Block */}
                  {section.codeBlock && (
                    <div className="my-8">
                      <div className="bg-[#1A1F35] rounded-lg border border-[#C7CCD9]/20 overflow-hidden">
                        {/* Code Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-[#0D0D12]/50 border-b border-[#C7CCD9]/20">
                          <span className="text-[#B5E3FF] text-sm">
                            {section.codeBlock.language}
                          </span>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(section.codeBlock!.code);
                              alert("Code copied to clipboard!");
                            }}
                            className="text-[#C7CCD9] hover:text-[#B5E3FF] text-sm transition-colors"
                          >
                            Copy
                          </button>
                        </div>
                        {/* Code Content */}
                        <pre className="p-4 overflow-x-auto">
                          <code className="text-[#F3F4F7] text-sm leading-relaxed">
                            {section.codeBlock.code}
                          </code>
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Key Takeaways */}
              <div className="my-12 p-6 bg-[#B5E3FF]/5 border-l-4 border-[#B5E3FF] rounded-r-lg">
                <h3 className="text-xl text-[#F3F4F7] mb-4">💡 Key Takeaways</h3>
                <ul className="space-y-2 text-[#C7CCD9]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#B5E3FF] mt-1">•</span>
                    <span>Modern web development requires a solid understanding of core concepts and best practices.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#B5E3FF] mt-1">•</span>
                    <span>TypeScript helps catch errors early and improves code quality significantly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#B5E3FF] mt-1">•</span>
                    <span>Always test your code and follow community best practices for maintainability.</span>
                  </li>
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-12">
                <span className="text-[#C7CCD9] mr-2">Tags:</span>
                {["React", "TypeScript", "Web Development", "Best Practices"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#1A1F35] text-[#B5E3FF] text-sm rounded-full border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Previous/Next Navigation */}
              <div className="border-t border-b border-[#C7CCD9]/20 py-8 my-12">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Previous Post */}
                  <button
                    onClick={onBack}
                    className="group text-left p-6 bg-[#1A1F35] rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all hover:shadow-lg hover:shadow-[#B5E3FF]/10"
                  >
                    <div className="flex items-center gap-2 text-[#B5E3FF] text-sm mb-2">
                      <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                      <span>Previous Post</span>
                    </div>
                    <h4 className="text-[#F3F4F7] group-hover:text-[#B5E3FF] transition-colors">
                      Understanding React Hooks
                    </h4>
                  </button>

                  {/* Next Post */}
                  <button
                    onClick={onBack}
                    className="group text-right p-6 bg-[#1A1F35] rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all hover:shadow-lg hover:shadow-[#B5E3FF]/10"
                  >
                    <div className="flex items-center justify-end gap-2 text-[#B5E3FF] text-sm mb-2">
                      <span>Next Post</span>
                      <ArrowLeft size={16} className="rotate-180 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h4 className="text-[#F3F4F7] group-hover:text-[#B5E3FF] transition-colors">
                      Advanced CSS Techniques
                    </h4>
                  </button>
                </div>
              </div>

              {/* Author Bio Extended */}
              <div className="bg-[#1A1F35] p-8 rounded-lg border border-[#C7CCD9]/20">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-20 h-20 rounded-full border-2 border-[#B5E3FF]/30"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl text-[#F3F4F7] mb-2">About {post.author.name}</h3>
                    <p className="text-[#C7CCD9] text-sm leading-relaxed">
                      {post.author.bio} Passionate about creating educational content and helping
                      developers grow their skills.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 pt-4 border-t border-[#C7CCD9]/20">
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#0D0D12]/50 rounded-lg flex items-center justify-center text-[#C7CCD9] hover:bg-[#B5E3FF] hover:text-[#0D0D12] transition-all"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#0D0D12]/50 rounded-lg flex items-center justify-center text-[#C7CCD9] hover:bg-[#B5E3FF] hover:text-[#0D0D12] transition-all"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Share Buttons */}
              <div className="bg-[#1A1F35] p-6 rounded-lg border border-[#C7CCD9]/20">
                <h3 className="text-[#F3F4F7] mb-4 flex items-center gap-2">
                  <Share2 size={18} className="text-[#B5E3FF]" />
                  Share Article
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleShare("twitter")}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-[#0D0D12]/50 hover:bg-[#B5E3FF]/10 rounded-lg text-[#C7CCD9] hover:text-[#B5E3FF] transition-all group"
                  >
                    <Twitter size={18} />
                    <span>Share on Twitter</span>
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-[#0D0D12]/50 hover:bg-[#B5E3FF]/10 rounded-lg text-[#C7CCD9] hover:text-[#B5E3FF] transition-all group"
                  >
                    <Linkedin size={18} />
                    <span>Share on LinkedIn</span>
                  </button>
                  <button
                    onClick={() => handleShare("facebook")}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-[#0D0D12]/50 hover:bg-[#B5E3FF]/10 rounded-lg text-[#C7CCD9] hover:text-[#B5E3FF] transition-all group"
                  >
                    <Facebook size={18} />
                    <span>Share on Facebook</span>
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-[#0D0D12]/50 hover:bg-[#B5E3FF]/10 rounded-lg text-[#C7CCD9] hover:text-[#B5E3FF] transition-all group"
                  >
                    <LinkIcon size={18} />
                    <span>Copy Link</span>
                  </button>
                </div>
              </div>

              {/* Table of Contents - Will be populated dynamically */}
              <div className="bg-[#1A1F35] p-6 rounded-lg border border-[#C7CCD9]/20 hidden lg:block">
                <h3 className="text-[#F3F4F7] mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {post.content.sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-3 py-2 rounded text-sm transition-all ${
                        activeSection === section.id
                          ? "bg-[#B5E3FF]/10 text-[#B5E3FF] border-l-2 border-[#B5E3FF]"
                          : "text-[#C7CCD9] hover:text-[#B5E3FF] hover:bg-[#0D0D12]/50"
                      }`}
                    >
                      {section.heading}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}