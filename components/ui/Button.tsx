"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#c41e3a] text-white hover:bg-[#a01830] focus-visible:ring-[#c41e3a] shadow-md hover:shadow-lg",
  secondary:
    "bg-[#1a1a2e] text-white hover:bg-[#16213e] focus-visible:ring-[#1a1a2e]",
  outline:
    "border-2 border-[#c41e3a] text-[#c41e3a] bg-transparent hover:bg-[#c41e3a] hover:text-white focus-visible:ring-[#c41e3a]",
  ghost: "text-[#1a1a2e] hover:bg-gray-100 focus-visible:ring-gray-300",
};

const sizeStyles = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-6 text-base gap-2",
  lg: "h-12 px-8 text-lg gap-2",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
          "hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100 disabled:active:scale-100",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
