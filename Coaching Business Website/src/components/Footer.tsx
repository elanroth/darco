import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-blue-400">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4L20 12H28L22 18L24 26L16 21L8 26L10 18L4 12H12L16 4Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-white">Guiding Light Coaching</span>
            </div>
            <p className="text-sm">
              Empowering Jewish teens and young adults to navigate life's challenges with wisdom, purpose, and confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/book" className="hover:text-blue-400 transition-colors">Book a Session</Link></li>
              <li><Link to="/faqs" className="hover:text-blue-400 transition-colors">FAQs</Link></li>
              <li><Link to="/policies" className="hover:text-blue-400 transition-colors">Policies & Terms</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@guidinglightcoaching.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Serving the Jewish community nationwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Guiding Light Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
