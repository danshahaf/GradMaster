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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
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
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <Button type="submit" className="flex-1" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </Button>
        <Button
          type="button"
          className="flex-1"
          variant="secondary"
          disabled={loading}
          onClick={() => onSignUp(email, password)}
        >
          Sign up
        </Button>
      </div>
    </form>
  );
};