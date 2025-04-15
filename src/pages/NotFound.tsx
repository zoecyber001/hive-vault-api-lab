
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center hex-pattern">
        <div className="text-center p-8 max-w-md">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-hive/20 mb-6">
            <AlertTriangle className="h-8 w-8 text-hive" />
          </div>
          <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
          <p className="text-xl text-gray-400 mb-8">
            The resource you're looking for doesn't exist or has been moved.
          </p>
          <Button className="bg-hive hover:bg-hive-accent text-hive-dark font-bold">
            <Link to="/" className="flex items-center">
              <Home className="mr-2 h-4 w-4" /> Go Back Home
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
