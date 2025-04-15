
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Lock, Check, ArrowRight, AlertTriangle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

interface Challenge {
  id: number;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  completed: boolean;
  locked: boolean;
}

const Challenges: React.FC = () => {
  const { toast } = useToast();
  
  const challenges: Challenge[] = [
    {
      id: 1,
      title: 'Authentication Bypass',
      description: 'Find a way to bypass the login mechanism and access the admin account.',
      difficulty: 'easy',
      category: 'Authentication',
      completed: false,
      locked: false
    },
    {
      id: 2,
      title: 'JWT Token Tampering',
      description: 'Manipulate the JWT token to escalate privileges and access restricted resources.',
      difficulty: 'medium',
      category: 'Authentication',
      completed: false,
      locked: false
    },
    {
      id: 3,
      title: 'Insecure Direct Object Reference',
      description: 'Exploit the IDOR vulnerability to access another user\'s profile data.',
      difficulty: 'easy',
      category: 'Authorization',
      completed: false,
      locked: false
    },
    {
      id: 4,
      title: 'Transaction Manipulation',
      description: 'Find a way to manipulate the transaction flow to transfer money without proper authorization.',
      difficulty: 'medium',
      category: 'Business Logic',
      completed: false,
      locked: false
    },
    {
      id: 5,
      title: 'Unrestricted File Upload',
      description: 'Bypass the file upload restrictions to execute code on the server.',
      difficulty: 'medium',
      category: 'Input Validation',
      completed: false,
      locked: false
    },
    {
      id: 6,
      title: 'Mass Assignment',
      description: 'Exploit the mass assignment vulnerability to modify protected fields.',
      difficulty: 'hard',
      category: 'Input Validation',
      completed: false,
      locked: true
    },
    {
      id: 7,
      title: 'API Privilege Escalation',
      description: 'Escalate your privileges from a regular user to an administrator.',
      difficulty: 'hard',
      category: 'Authorization',
      completed: false,
      locked: true
    },
    {
      id: 8,
      title: 'Broken Data Export',
      description: 'Extract sensitive information from the export functionality.',
      difficulty: 'medium',
      category: 'Data Exposure',
      completed: false,
      locked: false
    }
  ];
  
  const completedChallenges = challenges.filter(c => c.completed).length;
  const totalChallenges = challenges.filter(c => !c.locked).length;
  const progressPercentage = (completedChallenges / totalChallenges) * 100;

  const handleStartChallenge = (id: number) => {
    toast({
      title: "Challenge mode activated",
      description: "This is a frontend demo. In a real lab, these challenges would connect to a backend API.",
      className: "bg-hive-dark border-hive text-white",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 hex-pattern">
        <div className="container mx-auto px-4">
          <div className="bg-hive/20 py-2 px-4 rounded flex items-center mb-6">
            <AlertTriangle className="h-4 w-4 text-hive mr-2" />
            <p className="text-sm">Warning: These challenges are designed to teach API security concepts.</p>
          </div>
          
          <header className="mb-12">
            <h1 className="text-3xl font-bold mb-2">Security Challenges</h1>
            <p className="text-gray-400 mb-6">Test your API security skills with these targeted challenges.</p>
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
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge) => (
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
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Challenges;
