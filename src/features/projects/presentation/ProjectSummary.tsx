import React from "react";

export interface ProjectSummaryProps {
  title: string;
  description: string;
  projectUrl?: string;
  specs: {
    technology: string;
    role: string;
    year: string;
    platform: string;
  };
  labels?: {
    technology: string;
    role: string;
    year: string;
    platform: string;
    visitProject: string;
  };
}

export const ProjectSummary: React.FC<ProjectSummaryProps> = ({
  title,
  description,
  projectUrl,
  specs,
  labels = {
    technology: "Technology",
    role: "Role",
    year: "Year",
    platform: "Platform",
    visitProject: "Visit Project",
  },
}) => {
  return (
    <div 
      className="border border-[--color-ink-black] rounded-[6px] bg-[--color-paper-white] p-6 space-y-6"
      style={{
        borderColor: "var(--color-ink-black, #000000)",
      }}
    >
      <div>
        <h2 
          className="text-2xl font-bold mb-4 text-[--color-ink-black]"
          style={{
            fontFamily: "var(--font-display, 'GT Sectra', serif)",
            fontWeight: 400, // Display family uses weight 400 only per constitution
          }}
        >
          {title}
        </h2>
        <p 
          className="text-base text-[--color-charcoal] leading-relaxed"
          style={{
            fontFamily: "var(--font-workhorse, 'Inter', sans-serif)",
            fontWeight: 400,
          }}
        >
          {description}
        </p>
      </div>

      {/* Specifications Table */}
      <div className="border-t border-[--color-border-gray] pt-6">
        <table className="w-full text-left text-sm border-collapse">
          <tbody>
            <tr className="border-b border-[--color-border-gray]">
              <th 
                className="py-3 pr-4 text-[--color-charcoal]"
                style={{
                  fontFamily: "var(--font-workhorse, 'Inter', sans-serif)",
                  fontWeight: 575, // Custom weight 575 requested
                  fontVariationSettings: "'wght' 575",
                }}
              >
                {labels.technology}
              </th>
              <td 
                className="py-3 text-[--color-ink-black]"
                style={{
                  fontFamily: "var(--font-workhorse, 'Inter', sans-serif)",
                  fontWeight: 400,
                }}
              >
                {specs.technology}
              </td>
            </tr>
            <tr className="border-b border-[--color-border-gray]">
              <th 
                className="py-3 pr-4 text-[--color-charcoal]"
                style={{
                  fontFamily: "var(--font-workhorse, 'Inter', sans-serif)",
                  fontWeight: 575, // Custom weight 575
                  fontVariationSettings: "'wght' 575",
                }}
              >
                {labels.role}
              </th>
              <td 
                className="py-3 text-[--color-ink-black]"
                style={{
                  fontFamily: "var(--font-workhorse, 'Inter', sans-serif)",
                  fontWeight: 400,
                }}
              >
                {specs.role}
              </td>
            </tr>
            <tr className="border-b border-[--color-border-gray]">
              <th 
                className="py-3 pr-4 text-[--color-charcoal]"
                style={{
                  fontFamily: "var(--font-workhorse, 'Inter', sans-serif)",
                  fontWeight: 575, // Custom weight 575
                  fontVariationSettings: "'wght' 575",
                }}
              >
                {labels.platform}
              </th>
              <td 
                className="py-3 text-[--color-ink-black]"
                style={{
                  fontFamily: "var(--font-workhorse, 'Inter', sans-serif)",
                  fontWeight: 400,
                }}
              >
                {specs.platform}
              </td>
            </tr>
            <tr>
              <th 
                className="py-3 pr-4 text-[--color-charcoal]"
                style={{
                  fontFamily: "var(--font-workhorse, 'Inter', sans-serif)",
                  fontWeight: 575, // Custom weight 575
                  fontVariationSettings: "'wght' 575",
                }}
              >
                {labels.year}
              </th>
              <td 
                className="py-3 text-[--color-ink-black]"
                style={{
                  fontFamily: "var(--font-workhorse, 'Inter', sans-serif)",
                  fontWeight: 400,
                }}
              >
                {specs.year}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Action Out Link Button */}
      {projectUrl && (
        <div className="pt-2">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block 
              px-5 
              py-2.5 
              rounded-[6px] 
              bg-[--color-glide-teal] 
              text-[--color-ink-black] 
              transition-transform 
              duration-200 
              hover:-translate-y-0.5 
              active:translate-y-0
              shadow-[0_2px_4px_rgba(0,0,0,0.05)]
            "
            style={{
              backgroundColor: "var(--color-glide-teal, #71eaee)",
              fontFamily: "var(--font-workhorse, 'Inter', sans-serif)",
              fontWeight: 575, // Custom weight 575 for button
              fontVariationSettings: "'wght' 575",
              color: "var(--color-ink-black, #000000)",
            }}
          >
            {labels.visitProject} &rarr;
          </a>
        </div>
      )}
    </div>
  );
};
