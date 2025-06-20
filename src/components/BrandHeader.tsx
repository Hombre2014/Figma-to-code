"use client";
import * as React from "react";

interface BrandHeaderProps {
  className?: string;
}

export const BrandHeader: React.FC<BrandHeaderProps> = ({ className = "" }) => {
  return (
    <header className={`mb-10 max-md:mb-8 max-sm:mb-6 ${className}`}>
      <div className="flex gap-3 items-center max-sm:flex-col max-sm:gap-2 max-sm:text-center">
        <div
          className="flex relative gap-1 items-center"
          role="img"
          aria-label="Local Happinez logo"
        >
          <div className="relative w-5 h-5 rounded-full bg-green-400" />
          <div className="relative w-5 h-5 rounded-full bg-blue-400" />
          <div className="relative w-5 h-5 rounded-full bg-orange-400" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold leading-tight text-gray-900 max-md:text-2xl max-sm:text-xl">
            Local Happinez
          </h1>
          <p className="text-sm leading-tight text-gray-500 max-sm:text-sm">
            Let's go sustainable now!
          </p>
        </div>
      </div>
    </header>
  );
};
