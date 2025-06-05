import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}) => {
  const baseStyles = "rounded-full font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary: "bg-[#009688] text-white hover:brightness-110 shadow-md hover:shadow-lg",
    secondary: "bg-[#FF6B6B] text-white hover:brightness-110 shadow-md hover:shadow-lg",
  };

  const sizeStyles = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const glowEffect = "hover:shadow-[0_0_10px_rgba(0,150,136,0.6)]";

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        glowEffect,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
