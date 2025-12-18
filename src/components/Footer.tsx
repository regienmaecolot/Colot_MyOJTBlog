import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Message sent! (This is a demo)");
    setEmail("");
    setMessage("");
  };

  const socialLinks = [
    { icon: Github, url: "#", label: "GitHub" },
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Twitter, url: "#", label: "Twitter" },
  ];

  return (
    <footer id="contact" className="bg-[#0D0D12] border-t border-[#C7CCD9]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl text-[#F3F4F7] mb-6">
              Get In <span className="text-[#B5E3FF]">Touch</span>
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 text-[#C7CCD9] hover:text-[#B5E3FF] transition-colors group"
              >
                <div className="w-10 h-10 bg-[#1A1F35] rounded-lg flex items-center justify-center group-hover:bg-[#B5E3FF]/10 transition-colors">
                  <Mail className="text-[#B5E3FF]" size={20} />
                </div>
                <span>your.email@example.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-[#C7CCD9] hover:text-[#B5E3FF] transition-colors group"
              >
                <div className="w-10 h-10 bg-[#1A1F35] rounded-lg flex items-center justify-center group-hover:bg-[#B5E3FF]/10 transition-colors">
                  <Phone className="text-[#B5E3FF]" size={20} />
                </div>
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-3 text-[#C7CCD9]">
                <div className="w-10 h-10 bg-[#1A1F35] rounded-lg flex items-center justify-center">
                  <MapPin className="text-[#B5E3FF]" size={20} />
                </div>
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-[#F3F4F7] mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      aria-label={social.label}
                      className="w-10 h-10 bg-[#1A1F35] rounded-lg flex items-center justify-center text-[#C7CCD9] hover:bg-[#B5E3FF] hover:text-[#0D0D12] transition-all duration-300"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl text-[#F3F4F7] mb-6">Quick Links</h3>
            <nav className="space-y-3">
              {["Home", "About", "Resume", "Timeline", "Achievements", "Gallery", "Blog"].map(
                (link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="block text-[#C7CCD9] hover:text-[#B5E3FF] transition-colors"
                  >
                    {link}
                  </button>
                )
              )}
            </nav>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl text-[#F3F4F7] mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 bg-[#1A1F35] border border-[#C7CCD9]/20 rounded-lg text-[#F3F4F7] placeholder:text-[#C7CCD9]/50 focus:border-[#B5E3FF] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-[#1A1F35] border border-[#C7CCD9]/20 rounded-lg text-[#F3F4F7] placeholder:text-[#C7CCD9]/50 focus:border-[#B5E3FF] focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#B5E3FF] text-[#0D0D12] rounded-lg hover:bg-[#B5E3FF]/90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#C7CCD9]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#C7CCD9] text-sm">
              © 2024 Your Name. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[#C7CCD9] hover:text-[#B5E3FF] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#C7CCD9] hover:text-[#B5E3FF] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
