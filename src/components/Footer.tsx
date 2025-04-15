
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-hive-dark border-t border-hive/30 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <ShieldAlert className="h-8 w-8 text-hive" />
              <div>
                <h1 className="text-xl font-bold text-hive">HIVE CONSULT <span className="bg-hive text-hive-dark px-2 text-xs py-1 rounded">API VAULT</span></h1>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              A deliberately vulnerable fintech API lab for security professionals, 
              penetration testers, and developers to practice API security testing in a safe environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-hive transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-hive transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-hive transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Lab Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/api-docs" className="text-gray-400 hover:text-hive transition-colors">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link to="/challenges" className="text-gray-400 hover:text-hive transition-colors">
                  Security Challenges
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-gray-400 hover:text-hive transition-colors">
                  Testing Tools
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-hive transition-colors">
                  Learning Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-hive transition-colors">
                  About the Project
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-400 hover:text-hive transition-colors">
                  Legal Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-hive transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-hive/20 pt-6 mt-8">
          <p className="text-gray-500 text-center text-sm">
            &copy; {new Date().getFullYear()} HIVE CONSULT API VAULT. A deliberately vulnerable application for educational purposes only.
          </p>
          <p className="text-gray-500 text-center text-xs mt-2">
            Warning: This application contains security vulnerabilities. Use for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
