
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Bug, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { toast } = useToast();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleAdminLogin = () => {
    toast({
      title: "Admin Credentials",
      description: "Username: admin@hivevault.io | Password: admin123",
      className: "bg-hive-dark border-hive text-white",
    });
  };

  return (
    <nav className="bg-hive-dark border-b border-hive p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <ShieldAlert className="h-8 w-8 text-hive" />
          <div>
            <h1 className="text-xl font-bold text-hive flex items-center">HIVE CONSULT <span className="ml-2 bg-hive text-hive-dark px-2 text-xs py-1 rounded">API VAULT</span></h1>
            <p className="text-xs text-gray-400">A Vulnerable API Testing Lab</p>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-gray-300 hover:text-hive transition-colors">Home</Link>
          <Link to="/api-docs" className="text-gray-300 hover:text-hive transition-colors">API Docs</Link>
          <Link to="/challenges" className="text-gray-300 hover:text-hive transition-colors">Challenges</Link>
          <Button 
            variant="outline" 
            className="border-hive text-hive hover:bg-hive hover:text-hive-dark"
            onClick={handleAdminLogin}
          >
            <Bug className="mr-2 h-4 w-4" />
            Admin Access
          </Button>
        </div>
        
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6 text-hive" /> : <Menu className="h-6 w-6 text-hive" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-hive-dark border-t border-hive">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-300 hover:text-hive transition-colors">Home</Link>
            <Link to="/api-docs" className="text-gray-300 hover:text-hive transition-colors">API Docs</Link>
            <Link to="/challenges" className="text-gray-300 hover:text-hive transition-colors">Challenges</Link>
            <Button 
              variant="outline" 
              className="border-hive text-hive hover:bg-hive hover:text-hive-dark w-full"
              onClick={handleAdminLogin}
            >
              <Bug className="mr-2 h-4 w-4" />
              Admin Access
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
