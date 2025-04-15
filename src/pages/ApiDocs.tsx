
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, AlertTriangle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ApiDocs: React.FC = () => {
  const { toast } = useToast();
  const [selectedEndpoint, setSelectedEndpoint] = useState('login');
  
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied to clipboard",
      description: "The sample code has been copied to your clipboard",
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
            <p className="text-sm">Warning: This API contains deliberately vulnerable endpoints for educational purposes only.</p>
          </div>
          
          <header className="mb-12">
            <h1 className="text-3xl font-bold mb-2">API Documentation</h1>
            <p className="text-gray-400">Explore and test the vulnerable endpoints of the HIVE CONSULT API.</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="col-span-1">
              <Card className="bg-hive-dark border-hive/50 sticky top-24">
                <CardHeader>
                  <CardTitle>Endpoints</CardTitle>
                  <CardDescription>Select an endpoint to view details</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li 
                      className={`p-2 rounded cursor-pointer ${selectedEndpoint === 'login' ? 'bg-hive text-hive-dark' : 'hover:bg-hive/20'}`}
                      onClick={() => setSelectedEndpoint('login')}
                    >
                      POST /api/login
                    </li>
                    <li 
                      className={`p-2 rounded cursor-pointer ${selectedEndpoint === 'register' ? 'bg-hive text-hive-dark' : 'hover:bg-hive/20'}`}
                      onClick={() => setSelectedEndpoint('register')}
                    >
                      POST /api/register
                    </li>
                    <li 
                      className={`p-2 rounded cursor-pointer ${selectedEndpoint === 'users' ? 'bg-hive text-hive-dark' : 'hover:bg-hive/20'}`}
                      onClick={() => setSelectedEndpoint('users')}
                    >
                      GET /api/users
                    </li>
                    <li 
                      className={`p-2 rounded cursor-pointer ${selectedEndpoint === 'user' ? 'bg-hive text-hive-dark' : 'hover:bg-hive/20'}`}
                      onClick={() => setSelectedEndpoint('user')}
                    >
                      GET /api/user/{'{id}'}
                    </li>
                    <li 
                      className={`p-2 rounded cursor-pointer ${selectedEndpoint === 'transactions' ? 'bg-hive text-hive-dark' : 'hover:bg-hive/20'}`}
                      onClick={() => setSelectedEndpoint('transactions')}
                    >
                      POST /api/transactions
                    </li>
                    <li 
                      className={`p-2 rounded cursor-pointer ${selectedEndpoint === 'balance' ? 'bg-hive text-hive-dark' : 'hover:bg-hive/20'}`}
                      onClick={() => setSelectedEndpoint('balance')}
                    >
                      GET /api/balance
                    </li>
                    <li 
                      className={`p-2 rounded cursor-pointer ${selectedEndpoint === 'export' ? 'bg-hive text-hive-dark' : 'hover:bg-hive/20'}`}
                      onClick={() => setSelectedEndpoint('export')}
                    >
                      GET /api/export
                    </li>
                    <li 
                      className={`p-2 rounded cursor-pointer ${selectedEndpoint === 'upload' ? 'bg-hive text-hive-dark' : 'hover:bg-hive/20'}`}
                      onClick={() => setSelectedEndpoint('upload')}
                    >
                      POST /api/upload
                    </li>
                    <li 
                      className={`p-2 rounded cursor-pointer ${selectedEndpoint === 'logout' ? 'bg-hive text-hive-dark' : 'hover:bg-hive/20'}`}
                      onClick={() => setSelectedEndpoint('logout')}
                    >
                      POST /api/logout
                    </li>
                    <li 
                      className={`p-2 rounded cursor-pointer ${selectedEndpoint === 'reset-password' ? 'bg-hive text-hive-dark' : 'hover:bg-hive/20'}`}
                      onClick={() => setSelectedEndpoint('reset-password')}
                    >
                      POST /api/reset-password
                    </li>
                    <li 
                      className={`p-2 rounded cursor-pointer ${selectedEndpoint === 'validate' ? 'bg-hive text-hive-dark' : 'hover:bg-hive/20'}`}
                      onClick={() => setSelectedEndpoint('validate')}
                    >
                      POST /api/token/validate
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-1 lg:col-span-3">
              <Card className="bg-hive-dark border-hive/50">
                <CardHeader>
                  <Tabs defaultValue="details" className="w-full">
                    <TabsList className="grid grid-cols-3">
                      <TabsTrigger value="details">Details</TabsTrigger>
                      <TabsTrigger value="samples">Sample Requests</TabsTrigger>
                      <TabsTrigger value="vulnerabilities">Vulnerabilities</TabsTrigger>
                    </TabsList>
                    
                    {selectedEndpoint === 'login' && (
                      <>
                        <TabsContent value="details">
                          <CardTitle className="mb-2">POST /api/login</CardTitle>
                          <CardDescription>Authenticate users with email and password</CardDescription>
                          <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-2">Request Parameters</h3>
                            <table className="w-full border-collapse">
                              <thead>
                                <tr className="border-b border-hive/30">
                                  <th className="text-left py-2">Parameter</th>
                                  <th className="text-left py-2">Type</th>
                                  <th className="text-left py-2">Required</th>
                                  <th className="text-left py-2">Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b border-hive/30">
                                  <td className="py-2">email</td>
                                  <td className="py-2">string</td>
                                  <td className="py-2">Yes</td>
                                  <td className="py-2">User's email address</td>
                                </tr>
                                <tr className="border-b border-hive/30">
                                  <td className="py-2">password</td>
                                  <td className="py-2">string</td>
                                  <td className="py-2">Yes</td>
                                  <td className="py-2">User's password</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-2">Response</h3>
                            <pre className="bg-black/50 p-4 rounded-md overflow-x-auto">
                              <code className="text-green-500">
{`{
  "status": "success",
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "Admin User",
    "email": "admin@hivevault.io",
    "role": "admin",
    "balance": "$50,000.00"
  }
}`}
                              </code>
                            </pre>
                          </div>
                        </TabsContent>

                        <TabsContent value="samples">
                          <CardTitle className="mb-2">Sample Requests</CardTitle>
                          <div className="mt-4">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-medium">cURL</h4>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-8 w-8 p-0"
                                onClick={() => handleCopy(`curl -X POST https://api.hiveconsult.io/api/login \\
  -H "Content-Type: application/json" \\
  -d '{"email": "admin@hivevault.io", "password": "admin123"}'`)}
                              >
                                <Copy className="h-4 w-4" />
                              </Button>
                            </div>
                            <pre className="bg-black/50 p-4 rounded-md overflow-x-auto mb-6">
                              <code className="text-green-500">
{`curl -X POST https://api.hiveconsult.io/api/login \\
  -H "Content-Type: application/json" \\
  -d '{"email": "admin@hivevault.io", "password": "admin123"}'`}
                              </code>
                            </pre>

                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-medium">JavaScript (fetch)</h4>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-8 w-8 p-0"
                                onClick={() => handleCopy(`fetch('https://api.hiveconsult.io/api/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'admin@hivevault.io',
    password: 'admin123'
  })
})
.then(response => response.json())
.then(data => console.log(data))`)}
                              >
                                <Copy className="h-4 w-4" />
                              </Button>
                            </div>
                            <pre className="bg-black/50 p-4 rounded-md overflow-x-auto mb-6">
                              <code className="text-green-500">
{`fetch('https://api.hiveconsult.io/api/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'admin@hivevault.io',
    password: 'admin123'
  })
})
.then(response => response.json())
.then(data => console.log(data))`}
                              </code>
                            </pre>

                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-medium">Python (requests)</h4>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-8 w-8 p-0"
                                onClick={() => handleCopy(`import requests

response = requests.post(
    'https://api.hiveconsult.io/api/login',
    json={
        'email': 'admin@hivevault.io',
        'password': 'admin123'
    }
)

print(response.json())`)}
                              >
                                <Copy className="h-4 w-4" />
                              </Button>
                            </div>
                            <pre className="bg-black/50 p-4 rounded-md overflow-x-auto">
                              <code className="text-green-500">
{`import requests

response = requests.post(
    'https://api.hiveconsult.io/api/login',
    json={
        'email': 'admin@hivevault.io',
        'password': 'admin123'
    }
)

print(response.json())`}
                              </code>
                            </pre>
                          </div>
                        </TabsContent>

                        <TabsContent value="vulnerabilities">
                          <CardTitle className="mb-2">Known Vulnerabilities</CardTitle>
                          <CardDescription className="mb-6">
                            This endpoint contains several deliberately implemented security issues.
                          </CardDescription>
                          
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-lg font-semibold text-hive-danger flex items-center mb-2">
                                <AlertTriangle className="h-4 w-4 mr-2" />
                                No Rate Limiting
                              </h3>
                              <p className="text-gray-400 mb-2">
                                The login endpoint doesn't implement rate limiting, making it vulnerable to brute force attacks.
                              </p>
                              <div className="bg-hive-danger/20 border border-hive-danger/30 rounded p-4">
                                <p className="text-sm">
                                  <strong>Challenge:</strong> Write a script to brute force the admin account using a list of common passwords.
                                </p>
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="text-lg font-semibold text-hive-danger flex items-center mb-2">
                                <AlertTriangle className="h-4 w-4 mr-2" />
                                Verbose Error Messages
                              </h3>
                              <p className="text-gray-400 mb-2">
                                The API returns different error messages for invalid email versus invalid password,
                                allowing attackers to enumerate valid usernames.
                              </p>
                              <div className="bg-hive-danger/20 border border-hive-danger/30 rounded p-4">
                                <p className="text-sm">
                                  <strong>Challenge:</strong> Use the error messages to determine which email addresses exist in the system.
                                </p>
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="text-lg font-semibold text-hive-danger flex items-center mb-2">
                                <AlertTriangle className="h-4 w-4 mr-2" />
                                Weak Password Policy
                              </h3>
                              <p className="text-gray-400 mb-2">
                                The API accepts simple and common passwords, making accounts vulnerable.
                              </p>
                            </div>
                          </div>
                        </TabsContent>
                      </>
                    )}

                    {/* Add similar blocks for other endpoints as needed */}
                    {selectedEndpoint !== 'login' && (
                      <TabsContent value="details">
                        <CardTitle className="mb-2">Endpoint documentation coming soon</CardTitle>
                        <CardDescription>
                          The documentation for this endpoint is still under development.
                          Try exploring the endpoint using the sample requests section.
                        </CardDescription>
                      </TabsContent>
                    )}
                    
                    {selectedEndpoint !== 'login' && (
                      <TabsContent value="samples">
                        <CardTitle className="mb-2">Sample Requests</CardTitle>
                        <CardDescription className="mb-6">
                          Here are some sample requests you can use to test the endpoint.
                        </CardDescription>
                        
                        <p className="text-gray-400 mb-4">
                          Use these samples as a starting point for your testing.
                          Remember that this is a deliberately vulnerable API, so there may be
                          security flaws to discover.
                        </p>
                        
                        <div className="bg-hive/10 border border-hive/30 p-4 rounded-md">
                          <p className="text-sm">
                            To complete the full documentation for this API endpoint,
                            continue exploring the HIVE CONSULT API VAULT challenges.
                          </p>
                        </div>
                      </TabsContent>
                    )}
                    
                    {selectedEndpoint !== 'login' && (
                      <TabsContent value="vulnerabilities">
                        <CardTitle className="mb-2">Vulnerability Hints</CardTitle>
                        <CardDescription className="mb-6">
                          This endpoint contains deliberate vulnerabilities. Can you find them?
                        </CardDescription>
                        
                        <div className="bg-hive-danger/20 border border-hive-danger/30 rounded p-4">
                          <p className="text-sm">
                            <strong>Challenge:</strong> Identify and exploit at least one vulnerability in this endpoint.
                            Document your findings for discussion.
                          </p>
                        </div>
                      </TabsContent>
                    )}
                  </Tabs>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApiDocs;
