import { Github, Linkedin, Download, Send } from 'lucide-react';
import { useState } from 'react';

interface ContactProps {
  onShowResume: () => void;
}

export function Contact({ onShowResume }: ContactProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleResumeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onShowResume();
    setTimeout(() => {
      document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Soft Pink Background Container */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-200 via-rose-200 to-pink-100 dark:from-pink-300/20 dark:via-rose-300/20 dark:to-pink-200/20 p-12 md:p-16 shadow-2xl">
          
          <div className="relative z-10 space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                Let's Connect!
              </h2>
              <p className="text-xl bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                Please feel free to contact me via email or send me a message on LinkedIn
              </p>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/cidetholiva"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/20 text-gray-700 dark:text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/cideth-oliva/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/20 text-gray-700 dark:text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <button
                onClick={handleResumeClick}
                className="flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/20 text-gray-700 dark:text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                <Download className="w-5 h-5" />
                Resume
              </button>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/60 dark:border-white/20 rounded-3xl p-8 md:p-10 shadow-xl">
              {isSubmitted ? (
                <div className="text-center space-y-4 py-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-700 dark:text-white">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-rose-500 hover:text-rose-600 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form 
                  action="https://formspree.io/f/maqjqrrp" 
                  method="POST"
                  onSubmit={(e) => {
                    const form = e.currentTarget;
                    fetch(form.action, {
                      method: form.method,
                      body: new FormData(form),
                      headers: {
                        'Accept': 'application/json'
                      }
                    }).then(response => {
                      if (response.ok) {
                        setIsSubmitted(true);
                        form.reset();
                      }
                    });
                    e.preventDefault();
                  }}
                  className="space-y-6"
                >
                  <input type="hidden" name="_subject" value="New message from portfolio" />
                  <div>
                    <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-5 py-4 rounded-2xl bg-white/80 dark:bg-white/10 border border-white/40 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-rose-400 text-gray-900 dark:text-white placeholder-gray-400"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-5 py-4 rounded-2xl bg-white/80 dark:bg-white/10 border border-white/40 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-rose-400 text-gray-900 dark:text-white placeholder-gray-400"
                      placeholder="hello@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      className="w-full px-5 py-4 rounded-2xl bg-white/80 dark:bg-white/10 border border-white/40 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-rose-400 text-gray-900 dark:text-white placeholder-gray-400 resize-none"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-white/90 text-gray-700 dark:text-gray-800 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                  >
                    <Send className="w-5 h-5 text-rose-500" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}