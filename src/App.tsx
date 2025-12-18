import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Resume } from "./components/Resume";
import { Timeline } from "./components/Timeline";
import { Achievements } from "./components/Achievements";
import { PhotoGallery } from "./components/PhotoGallery";
import { CertificateGallery } from "./components/CertificateGallery";
import { Blog } from "./components/Blog";
import { BlogPost } from "./components/BlogPost";
import { Footer } from "./components/Footer";
import { getBlogPostById } from "./data/blogPostData";
import { useState } from "react";

export default function App() {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const handlePostClick = (postId: number) => {
    setSelectedPostId(postId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToBlog = () => {
    setSelectedPostId(null);
    // Scroll to blog section
    setTimeout(() => {
      const blogSection = document.getElementById("blog");
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Show blog post detail if a post is selected
  if (selectedPostId) {
    const post = getBlogPostById(selectedPostId);
    if (post) {
      return <BlogPost post={post} onBack={handleBackToBlog} />;
    }
  }

  // Show main portfolio page
  return (
    <div className="min-h-screen bg-[#0D0D12]">
      <Navigation />
      <Hero />
      <About />
      <Resume />
      <Timeline />
      <Achievements />
      <PhotoGallery />
      <CertificateGallery />
      <Blog onPostClick={handlePostClick} />
      <Footer />
    </div>
  );
}