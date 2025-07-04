import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline";
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "default",
  className = "",
}) => {
  const baseStyles =
    "px-4 py-2 rounded text-sm font-medium transition-colors focus:outline-none";
  const variantStyles =
    variant === "outline"
      ? "border border-gray-300 text-gray-800 hover:bg-gray-100"
      : "text-black font-normal  ";

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </button>
  );
};
