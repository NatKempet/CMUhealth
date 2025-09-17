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
  <div className="group relative bg-gradient-to-br from-white via-purple-50/30 to-violet-50/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-purple-200/60 hover:border-purple-400/80 backdrop-blur-sm overflow-hidden">
    {/* Animated background glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/8 via-violet-600/6 to-indigo-600/8 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* Purple accent border on hover */}
    <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br from-purple-500/20 via-violet-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-px" />
    
    {/* Floating purple orbs */}
    <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-violet-400/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 delay-150" />
    
    <div className="relative flex flex-col items-center text-center space-y-6">
      {/* Enhanced icon container */}
      <div className="relative">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-violet-600 to-purple-700 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/30 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 ring-4 ring-purple-100/50 group-hover:ring-purple-300/60">
          <Icon className="w-10 h-10 text-white drop-shadow-sm" />
        </div>
        {/* Pulsing ring effect */}
        <div className="absolute inset-0 rounded-3xl border-2 border-purple-400/30 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 animate-pulse" />
      </div>
      
      {/* Enhanced title */}
      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-violet-700 to-purple-900 group-hover:from-purple-900 group-hover:via-violet-800 group-hover:to-purple-950 transition-all duration-300 leading-tight">
        {title}
      </h3>
      
      {/* Enhanced description */}
      <p className="text-purple-700/80 text-sm leading-relaxed group-hover:text-purple-800/90 transition-colors duration-300 line-clamp-3">
        {description}
      </p>
      
      {/* Enhanced CTA */}
      <div className="pt-2">
        <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 font-semibold rounded-full group-hover:from-purple-200 group-hover:to-violet-200 group-hover:text-purple-800 group-hover:shadow-lg transition-all duration-300 border border-purple-200/50 group-hover:border-purple-300/70">
          เรียนรู้เพิ่มเติม
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
    
    {/* Bottom gradient accent */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
    </Link>
  );
};
