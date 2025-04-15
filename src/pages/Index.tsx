
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ApiEndpoints from '@/components/ApiEndpoints';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-hive-dark">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ApiEndpoints />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
