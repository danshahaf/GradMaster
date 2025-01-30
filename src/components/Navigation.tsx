import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  return (
    <NavigationMenu className="max-w-full w-full justify-start bg-accent mb-6 border-b border-accent">
      <NavigationMenuList className="px-4 py-2">
        <NavigationMenuItem>
          <Link to="/" className={cn(
            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50"
          )}>
            Home
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/practice" className={cn(
            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/90 hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/50 data-[state=open]:bg-primary/50"
          )}>
            Practice
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:bg-primary hover:text-primary-foreground">Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[200px] p-2">
              <Link to="#" className="block p-2 hover:bg-primary hover:text-primary-foreground rounded-md">Study Materials</Link>
              <Link to="#" className="block p-2 hover:bg-primary hover:text-primary-foreground rounded-md">Progress Tracking</Link>
              <Link to="#" className="block p-2 hover:bg-primary hover:text-primary-foreground rounded-md">Tips & Strategies</Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;