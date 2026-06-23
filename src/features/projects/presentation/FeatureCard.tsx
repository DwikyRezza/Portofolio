import React from "react";

export interface FeatureCardProps {
  title: string;
  description: string;
  isActive?: boolean;
  onClick: () => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  isActive = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        cursor-pointer
        border border-[--color-ink-black] 
        rounded-[6px] 
        bg-[--color-paper-white] 
        p-5 
        transition-all 
        duration-200
        hover:shadow-[4px_4px_0px_0px_var(--color-ink-black)]
        active:translate-y-0.5
        ${isActive ? "shadow-[4px_4px_0px_0px_var(--color-ink-black)] translate-y-0.5 border-2" : ""}
      `}
      style={{
        borderColor: "var(--color-ink-black, #000000)",
      }}
    >
      <h3 
        className="text-lg font-bold mb-2 text-[--color-ink-black]"
        style={{
          fontFamily: "var(--font-workhorse, 'Inter', sans-serif)",
          fontWeight: 700,
        }}
      >
        {title}
      </h3>
      <p 
        className="text-sm text-[--color-charcoal] leading-relaxed"
        style={{
          fontFamily: "var(--font-workhorse, 'Inter', sans-serif)",
          fontWeight: 400,
        }}
      >
        {description}
      </p>
    </div>
  );
};
