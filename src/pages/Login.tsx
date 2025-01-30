import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { createClient } from "@/lib/supabase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EmailAuthForm } from "@/components/auth/EmailAuthForm";
import { SocialAuth } from "@/components/auth/SocialAuth";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const supabase = createClient();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/dashboard");
      }
    };
    
    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        navigate("/dashboard");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleEmailLogin = async (email: string, password: string) => {
    if (!email || !password) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter both email and password",
      });
      return;
    }

    setLoading(true);
    
    try {
      console.log("Attempting email login for:", email);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Login error:", error);
        if (error.message === "Email not confirmed") {
          toast({
            variant: "destructive",
            title: "Email not verified",
            description: "Please check your email and verify your account before logging in.",
          });
        } else if (error.message === "Invalid login credentials") {
          toast({
            variant: "destructive",
            title: "Login failed",
            description: "Invalid email or password. If you haven't registered yet, please sign up first.",
          });
        } else {
          throw error;
        }
        return;
      }

      console.log("Login successful:", data);
      toast({
        title: "Welcome back!",
        description: "Successfully logged in.",
      });
      
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Login error details:", error);
      toast({
        variant: "destructive",
        title: "Login failed",
        description: error.message || "An unexpected error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      console.log("Starting Google OAuth flow");
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
          skipBrowserRedirect: false,
        }
      });

      if (error) {
        console.error("Google OAuth error:", error);
        throw error;
      }

      console.log("OAuth response:", data);
    } catch (error: any) {
      console.error("Error in handleGoogleLogin:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  const handleSignUp = async (email: string, password: string) => {
    if (!email || !password) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter both email and password",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Password must be at least 6 characters long",
      });
      return;
    }

    setLoading(true);
    
    try {
      console.log("Attempting signup for:", email);
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (error) throw error;

      toast({
        title: "Check your email",
        description: "We've sent you a verification link.",
      });
    } catch (error: any) {
      console.error("Signup error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Welcome to GRE Prep Pro
          </CardTitle>
          <CardDescription className="text-center">
            Sign in to start your practice session
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <EmailAuthForm 
            onSubmit={handleEmailLogin}
            onSignUp={handleSignUp}
            loading={loading}
          />
          <SocialAuth onGoogleLogin={handleGoogleLogin} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;