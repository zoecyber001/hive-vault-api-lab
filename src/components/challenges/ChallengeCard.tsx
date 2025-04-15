
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Lock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Challenge } from '@/types/challenge';

interface ChallengeCardProps {
  challenge: Challenge;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
  const { toast } = useToast();

  const handleStartChallenge = (id: number) => {
    toast({
      title: "Challenge mode activated",
      description: "This is a frontend demo. In a real lab, these challenges would connect to a backend API.",
      className: "bg-hive-dark border-hive text-white",
    });
  };

  return (
    <Card 
      key={challenge.id} 
      className={`bg-hive-dark border-hive/50 ${challenge.locked ? 'opacity-70' : 'card-hover'}`}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <Badge className={
            challenge.difficulty === 'easy' 
              ? "bg-green-600 hover:bg-green-700" 
              : challenge.difficulty === 'medium'
              ? "bg-yellow-600 hover:bg-yellow-700"
              : "bg-red-600 hover:bg-red-700"
          }>
            {challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}
          </Badge>
          <Badge variant="outline" className="border-hive text-hive">
            {challenge.category}
          </Badge>
        </div>
        <CardTitle className="mt-2">{challenge.title}</CardTitle>
        <CardDescription>{challenge.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {challenge.locked ? (
          <div className="flex items-center justify-center p-6 text-gray-500">
            <Lock className="h-6 w-6 mr-2" />
            <span>Complete previous challenges to unlock</span>
          </div>
        ) : challenge.completed ? (
          <div className="flex items-center justify-center p-6 text-green-500">
            <Check className="h-6 w-6 mr-2" />
            <span>Challenge completed!</span>
          </div>
        ) : null}
      </CardContent>
      <CardFooter>
        <Button 
          className={challenge.completed
            ? "bg-green-600 hover:bg-green-700 w-full"
            : "bg-hive hover:bg-hive-accent text-hive-dark w-full"
          }
          disabled={challenge.locked}
          onClick={() => handleStartChallenge(challenge.id)}
        >
          {challenge.completed 
            ? <span className="flex items-center"><Check className="mr-2 h-4 w-4" /> Completed</span>
            : <span className="flex items-center">Start Challenge <ArrowRight className="ml-2 h-4 w-4" /></span>
          }
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ChallengeCard;
