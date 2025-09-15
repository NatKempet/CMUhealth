import { Card } from "./ui/card";
import { type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export const ServiceCard = ({
  title,
  description,
  icon: Icon,
  href,
}: ServiceCardProps) => {
  return (
    <Link to={href}>
      <Card className="group p-6 h-full bg-gradient-card border-border/50 hover:shadow-hover transition-all duration-300 hover:scale-105 cursor-pointer">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 rounded-full bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-primary-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>
        </div>
      </Card>
    </Link>
  );
};
