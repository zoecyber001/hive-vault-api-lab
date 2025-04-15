
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Copy, AlertTriangle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Endpoint {
  method: string;
  path: string;
  description: string;
  vulnerabilities: string[];
  sampleCode: string;
}

const endpoints: Endpoint[] = [
  {
    method: 'POST',
    path: '/api/login',
    description: 'Authenticate with email and password',
    vulnerabilities: ['Brute-forceable', 'No rate limiting'],
    sampleCode: `curl -X POST https://api.hiveconsult.io/api/login \\
  -H "Content-Type: application/json" \\
  -d '{"email": "admin@hivevault.io", "password": "admin123"}'`
  },
  {
    method: 'POST',
    path: '/api/register',
    description: 'Create new users',
    vulnerabilities: ['No input validation', 'No rate limiting'],
    sampleCode: `curl -X POST https://api.hiveconsult.io/api/register \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Test User", "email": "test@example.com", "password": "password123"}'`
  },
  {
    method: 'GET',
    path: '/api/users',
    description: 'Returns full user list',
    vulnerabilities: ['No authentication check', 'Data leak'],
    sampleCode: `curl https://api.hiveconsult.io/api/users`
  },
  {
    method: 'GET',
    path: '/api/user/{id}',
    description: 'View any user profile',
    vulnerabilities: ['IDOR', 'Missing access control'],
    sampleCode: `curl https://api.hiveconsult.io/api/user/1`
  },
  {
    method: 'POST',
    path: '/api/transactions',
    description: 'Create a new transaction',
    vulnerabilities: ['Race condition', 'No proper validation'],
    sampleCode: `curl -X POST https://api.hiveconsult.io/api/transactions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer TOKEN" \\
  -d '{"from_id": 2, "to_id": 1, "amount": 1000}'`
  },
  {
    method: 'GET',
    path: '/api/balance',
    description: 'View balance',
    vulnerabilities: ['No auth required', 'IDOR'],
    sampleCode: `curl https://api.hiveconsult.io/api/balance?user_id=1`
  },
];

const ApiEndpoints: React.FC = () => {
  const { toast } = useToast();

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied to clipboard",
      description: "The sample code has been copied to your clipboard",
      className: "bg-hive-dark border-hive text-white",
    });
  };

  return (
    <section className="py-12 bg-hive-dark/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Vulnerable API Endpoints</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            These endpoints contain various security vulnerabilities. Try to find and exploit them!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {endpoints.map((endpoint, index) => (
            <Card key={index} className="bg-hive-dark border-hive/50 card-hover">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className={
                      endpoint.method === 'GET' 
                        ? "bg-blue-600 hover:bg-blue-700" 
                        : endpoint.method === 'POST'
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-amber-600 hover:bg-amber-700"
                    }>
                      {endpoint.method}
                    </Badge>
                    <CardTitle className="mt-2 font-mono text-hive">{endpoint.path}</CardTitle>
                  </div>
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-hive-danger" />
                  </div>
                </div>
                <CardDescription>{endpoint.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Vulnerabilities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {endpoint.vulnerabilities.map((vuln, i) => (
                      <Badge key={i} variant="outline" className="border-hive-danger text-hive-danger">
                        {vuln}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Separator className="my-4 bg-hive/20" />
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-medium">Sample Request:</h4>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="h-8 w-8 p-0" 
                      onClick={() => handleCopy(endpoint.sampleCode)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <pre className="bg-black/50 p-3 rounded-md overflow-x-auto text-xs">
                    <code className="text-green-500">{endpoint.sampleCode}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApiEndpoints;
