import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface EmailAuthFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
  onSignUp: (email: string, password: string) => Promise<void>;
  loading: boolean;
}

export const EmailAuthForm = ({ onSubmit, onSignUp, loading }: EmailAuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [validationError, setValidationError] = useState("");

  const validateForm = () => {
    if (!email || !password) {
      setValidationError("Please enter both email and password");
      return false;
    }

    if (!email.includes("@")) {
      setValidationError("Please enter a valid email address");
      return false;
    }

    if (isSignUp && password.length < 6) {
      setValidationError("Password must be at least 6 characters long");
      return false;
    }

    setValidationError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Attempting to ${isSignUp ? 'sign up' : 'sign in'} with email:`, email);
    
    if (!validateForm()) {
      return;
    }

    try {
      if (isSignUp) {
        await onSignUp(email, password);
      } else {
        await onSubmit(email, password);
      }
    } catch (error) {
      console.error(`${isSignUp ? 'Signup' : 'Login'} error:`, error);
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setValidationError("");
            }}
            className="mt-1"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete={isSignUp ? "new-password" : "current-password"}
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setValidationError("");
            }}
            className="mt-1"
            placeholder="••••••••"
          />
          {isSignUp && (
            <p className="text-sm text-muted-foreground mt-1">
              Password must be at least 6 characters long
            </p>
          )}
        </div>
      </div>

      {validationError && (
        <div className="text-sm text-destructive">{validationError}</div>
      )}

      <div className="flex flex-col gap-4">
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Please wait..." : isSignUp ? "Create account" : "Sign in"}
        </Button>
        <div className="text-center text-sm">
          <button
            type="button"
            className="text-primary hover:underline"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setValidationError("");
            }}
          >
            {isSignUp
              ? "Already have an account? Sign in"
              : "Don't have an account? Sign up"}
          </button>
        </div>
      </div>
    </form>
  );
};