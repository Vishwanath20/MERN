// client/src/intellihire/components/Card.tsx
import React from "react";

type CardProps = { children: React.ReactNode; className?: string };

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`shadow-lg rounded-4xl p-6 transition-colors ${className}`}
    >
      {children}
    </div>
  );
}
