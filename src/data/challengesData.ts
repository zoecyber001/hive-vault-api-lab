
import { Challenge } from '@/types/challenge';

export const challenges: Challenge[] = [
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
