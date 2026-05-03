import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Message sent! (This is a demo)");
    setEmail("");
    setMessage("");
  };

  return (
    <footer id="contact" className="site-footer">
      <div className="footer-intro">
        <p className="eyebrow">Contact</p>
        <h2>Let us keep the conversation simple and professional.</h2>
      </div>

      <div className="footer-grid">
        <div className="contact-card">
          <a href="mailto:regien.colot@example.com">
            <Mail size={20} />
            regien.colot@example.com
          </a>
          <span>
            <MapPin size={20} />
            Philippines
          </span>
          <div className="social-row">
            <a href="#" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email"
            required
          />
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Your message"
            rows={4}
            required
          />
          <button className="primary-btn" type="submit">
            Send Message <Send size={18} />
          </button>
        </form>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Regien Mae D. Colot. All rights reserved.</span>
        <span>Fresh OJT blog redesign</span>
      </div>
    </footer>
  );
}
