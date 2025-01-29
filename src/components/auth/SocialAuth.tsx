import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";

interface SocialAuthProps {
  onGoogleLogin: () => Promise<void>;
}

export const SocialAuth = ({ onGoogleLogin }: SocialAuthProps) => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <Button
        variant="outline"
        type="button"
        className="w-full"
        onClick={onGoogleLogin}
      >
        <Mail className="mr-2 h-4 w-4" />
        Sign in with Google
      </Button>
    </>
  );
};