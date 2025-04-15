
import React from 'react';
import { Shield, Key, FileWarning, Server, Lock, Code } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-hive-dark p-6 rounded-lg border border-hive/30 hover:border-hive/60 transition-colors">
      <div className="hexagon bg-hive/10 w-16 h-16 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Learning Outcomes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Master API security through hands-on practice with real-world vulnerabilities in a controlled environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            icon={<Key className="h-8 w-8 text-hive" />}
            title="Exploiting JWT Vulnerabilities"
            description="Learn to identify and exploit insecure JWT implementations including algorithm confusion, key disclosure, and missing validations."
          />
          <Feature
            icon={<Shield className="h-8 w-8 text-hive" />}
            title="Access Control Flaws"
            description="Practice identifying and exploiting broken access controls, IDORs, and missing authentication checks."
          />
          <Feature
            icon={<FileWarning className="h-8 w-8 text-hive" />}
            title="Injection & Input Validation"
            description="Discover how improper input validation can lead to SQL injection, NoSQL injection, and other serious vulnerabilities."
          />
          <Feature
            icon={<Server className="h-8 w-8 text-hive" />}
            title="Rate Limiting Bypasses"
            description="Learn techniques to bypass rate limiting and brute force protection mechanisms in APIs."
          />
          <Feature
            icon={<Lock className="h-8 w-8 text-hive" />}
            title="Secure API Design"
            description="Understand the principles of secure API design by analyzing and fixing the vulnerabilities in the lab."
          />
          <Feature
            icon={<Code className="h-8 w-8 text-hive" />}
            title="Automation With Scripts"
            description="Practice writing scripts to automate API testing and vulnerability discovery using tools like Postman and Python."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
