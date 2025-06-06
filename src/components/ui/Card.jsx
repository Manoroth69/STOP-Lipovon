import React from "react";
import { cn } from "@/lib/utils"; // Utility to merge class names

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
);
CardHeader.displayName = "CardHeader";

const CardTitle = ({ className, ...props }) => (
  <h3
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
);
CardTitle.displayName = "CardTitle";

const CardDescription = ({ className, ...props }) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
);
CardDescription.displayName = "CardDescription";

const CardContent = ({ className, ...props }) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
);
CardContent.displayName = "CardContent";

const CardFooter = ({ className, ...props }) => (
  <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};

