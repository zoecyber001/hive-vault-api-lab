
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface ProgressBarProps {
  completedChallenges: number;
  totalChallenges: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completedChallenges, totalChallenges }) => {
  const progressPercentage = (completedChallenges / totalChallenges) * 100;

  return (
    <div className="bg-hive-dark border border-hive/50 p-4 rounded-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
        <div>
          <h2 className="font-semibold">Your Progress</h2>
          <p className="text-sm text-gray-400">Complete challenges to track your progress</p>
        </div>
        <div className="text-right mt-2 md:mt-0">
          <span className="font-bold text-hive text-xl">{completedChallenges}</span>
          <span className="text-gray-400">/{totalChallenges} completed</span>
        </div>
      </div>
      <Progress value={progressPercentage} className="h-2 bg-hive/20" indicatorClassName="bg-hive" />
    </div>
  );
};

export default ProgressBar;
