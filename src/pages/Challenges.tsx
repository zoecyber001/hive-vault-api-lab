
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChallengeCard from '@/components/challenges/ChallengeCard';
import ProgressBar from '@/components/challenges/ProgressBar';
import WarningBanner from '@/components/challenges/WarningBanner';
import { challenges } from '@/data/challengesData';

const Challenges: React.FC = () => {
  const completedChallenges = challenges.filter(c => c.completed).length;
  const totalChallenges = challenges.filter(c => !c.locked).length;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 hex-pattern">
        <div className="container mx-auto px-4">
          <WarningBanner />
          
          <header className="mb-12">
            <h1 className="text-3xl font-bold mb-2">Security Challenges</h1>
            <p className="text-gray-400 mb-6">Test your API security skills with these targeted challenges.</p>
            <ProgressBar 
              completedChallenges={completedChallenges} 
              totalChallenges={totalChallenges} 
            />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Challenges;
