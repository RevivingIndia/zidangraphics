"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
        className={cn(
          "rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow",
          hover && "hover:shadow-lg",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export const CardImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <div className={cn("relative aspect-[4/3] overflow-hidden rounded-t-xl bg-gray-100", className)}>
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>
);

export const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-4 sm:p-5", className)} {...props} />
);

export default Card;
