
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShieldAlert, Bug, Menu, X, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleAdminLogin = () => {
    toast({
      title: "Admin Credentials",
      description: "Username: admin@hivevault.io | Password: admin123",
      className: "bg-hive-dark border-hive text-white",
    });
    navigate('/login');
  };
  
  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully",
    });
    navigate('/login');
  };

  // Don't show navbar on login page
  if (location.pathname === '/login') {
    return null;
  }

  return (
    <nav className="bg-hive-dark border-b border-hive p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="flex items-center space-x-2">
          <ShieldAlert className="h-8 w-8 text-hive" />
          <div>
            <h1 className="text-xl font-bold text-hive flex items-center">HIVE CONSULT <span className="ml-2 bg-hive text-hive-dark px-2 text-xs py-1 rounded">API VAULT</span></h1>
            <p className="text-xs text-gray-400">A Vulnerable API Testing Lab</p>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/home" className="text-gray-300 hover:text-hive transition-colors">Home</Link>
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
          <Button 
            variant="ghost" 
            className="text-gray-300 hover:text-hive"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
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
            <Link to="/home" className="text-gray-300 hover:text-hive transition-colors">Home</Link>
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
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-hive w-full"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
