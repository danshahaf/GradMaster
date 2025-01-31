import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  return (
    <NavigationMenu className="max-w-full w-full justify-start bg-background/95 backdrop-blur-sm border-b fixed top-0 left-0 right-0 z-50">
      <NavigationMenuList className="px-4 py-2 w-full flex items-center">
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

        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;