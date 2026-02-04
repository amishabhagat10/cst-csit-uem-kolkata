import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Mail, href: 'mailto:cst@iem.edu.in', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events/2025' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="glass-footer relative z-10 mt-auto text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#EEDCA7]/20 border border-[#EEDCA7]/30 flex items-center justify-center">
                <span className="text-[#EEDCA7] font-serif font-bold text-xl">IEM</span>
              </div>
              <div>
                <h3 className="text-white font-serif font-semibold text-lg">CST & CSIT</h3>
                <p className="text-white/60 text-xs">Department of Excellence</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Empowering future technologists through innovative education and research at Institute of Engineering and Management.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-white/70 text-sm hover:text-[#EEDCA7] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Connect With Us</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-[#EEDCA7] hover:border-[#EEDCA7]/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-white/60 text-xs mt-4">
              Institute of Engineering and Management<br />
              New Town, Kolkata
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Department of CST & CSIT, IEM. All rights reserved.
            </p>
            <p className="text-white/60 text-xs">
              University of Engineering and Management, Kolkata
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
