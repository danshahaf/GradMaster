import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Settings } from "lucide-react";

const Navigation = () => {
  return (
    <NavigationMenu className="max-w-full w-full bg-background/95 backdrop-blur-sm border-b fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center w-full px-4 py-2">
        {/* Left Side - Navigation Links */}
        <NavigationMenuList className="flex items-center gap-4">
          <NavigationMenuItem>
            <Link to="/practice" className={cn(
              "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50"
            )}>
              Practice
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/dashboard" className={cn(
              "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50"
            )}>
              Analytics
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/study-materials" className={cn(
              "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50"
            )}>
              Study Materials
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* Right Side - Settings Button & Theme Toggle */}
        <div className="flex items-center gap-4">
          <Link to="/settings" className="bg-secondary text-white px-3 py-2 rounded-md flex items-center justify-center hover:bg-secondary-dark transition">
            <Settings size={20} />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </NavigationMenu>
  );
};

export default Navigation;
