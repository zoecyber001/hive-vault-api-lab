
import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-12 md:py-24 overflow-hidden hex-pattern">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <div className="inline-block bg-hive px-4 py-1 rounded-full mb-4">
              <p className="text-hive-dark text-xs font-bold flex items-center">
                <AlertTriangle className="mr-1 h-3 w-3" /> DELIBERATELY VULNERABLE
              </p>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              <span className="text-hive">Break</span> the Backend.
              <span className="block">Test the <span className="text-hive">Unseen</span>.</span>
            </h1>
            <p className="text-gray-400 mb-8 text-lg">
              HIVE CONSULT API VAULT is a deliberately vulnerable fintech API lab for security professionals, 
              penetration testers, and developers to practice API security testing in a safe environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-hive hover:bg-hive-accent text-hive-dark font-bold">
                <Link to="/api-docs" className="flex items-center">
                  Explore API Endpoints <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-hive text-hive hover:bg-hive/20">
                <Link to="/challenges" className="flex items-center">
                  Start Challenges
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="terminal-container rounded-lg shadow-lg border border-hive">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <pre className="terminal-text overflow-x-auto">
                <code className="text-green-500">
{`# Welcome to HIVE CONSULT API VAULT
$ curl -X POST https://api.hiveconsult.io/api/login \\
  -H "Content-Type: application/json" \\
  -d '{"email": "admin@hivevault.io", "password": "admin123"}'

{
  "status": "success",
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "Admin User",
    "role": "admin",
    "balance": "$50,000.00"
  }
}

$ curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \\
  https://api.hiveconsult.io/api/users

{
  "status": "success",
  "message": "Users retrieved successfully",
  "users": [...]
}
`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
