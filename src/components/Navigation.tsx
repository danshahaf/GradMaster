import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  return (
    <NavigationMenu className="max-w-full w-full justify-start bg-background border-b mb-6">
      <NavigationMenuList className="px-4 py-2">
        <NavigationMenuItem>
          <Link to="/" className={cn(
            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
          )}>
            Home
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/practice" className={cn(
            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
          )}>
            Practice
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[200px] p-2">
              <Link to="#" className="block p-2 hover:bg-accent rounded-md">Study Materials</Link>
              <Link to="#" className="block p-2 hover:bg-accent rounded-md">Progress Tracking</Link>
              <Link to="#" className="block p-2 hover:bg-accent rounded-md">Tips & Strategies</Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;