import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      {/* Navigation Bar */}
      <Navigation />

      {/* Error Content */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Oops! The page you are looking for does not exist.
        </p>

        {/* Return Home Button */}
        <a
          href="/"
          className="px-6 py-3 bg-primary text-white text-lg font-semibold rounded-lg shadow-md hover:bg-primary/80 transition duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
