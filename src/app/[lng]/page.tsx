"use client";

import React, { useEffect, useState } from "react";
import { getProjects, ProjectSummaryDTO } from "../../features/projects/infrastructure/service";
import { FeatureCard } from "../../features/projects/presentation/FeatureCard";
import { ProjectSummary } from "../../features/projects/presentation/ProjectSummary";

interface PageProps {
  params: {
    lng: string;
  };
}

export default function ProjectShowcasePage({ params }: PageProps) {
  const lng = (params.lng === "en" || params.lng === "id" ? params.lng : "id") as "en" | "id";
  
  const [projectsList, setProjectsList] = useState<ProjectSummaryDTO[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectSummaryDTO | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        const data = await getProjects(lng);
        setProjectsList(data);
        if (data.length > 0) {
          setSelectedProject(data[0]);
        }
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, [lng]);

  const labels = {
    en: {
      title: "Project Showcase",
      subtitle: "Selected works and technical summaries.",
      emptyState: "No projects added yet. Please edit src/features/projects/infrastructure/data.ts to add projects.",
      specs: {
        technology: "Technology",
        role: "Role",
        year: "Year",
        platform: "Platform",
        visitProject: "Visit Live Site",
      }
    },
    id: {
      title: "Daftar Proyek",
      subtitle: "Kumpulan karya terpilih dan ringkasan teknisnya.",
      emptyState: "Belum ada proyek yang ditambahkan. Silakan edit src/features/projects/infrastructure/data.ts untuk menambahkan proyek.",
      specs: {
        technology: "Teknologi",
        role: "Peran",
        year: "Tahun",
        platform: "Platform",
        visitProject: "Kunjungi Situs",
      }
    }
  };

  const currentLabels = labels[lng];

  return (
    <main className="min-h-screen bg-[--color-paper-white] text-[--color-ink-black] py-12 px-6 md:px-12 max-w-6xl mx-auto">
      <header className="mb-12 border-b border-[--color-border-gray] pb-8">
        <h1 
          className="text-4xl font-bold tracking-tight mb-2"
          style={{
            fontFamily: "var(--font-display, 'GT Sectra', serif)",
            fontWeight: 400,
          }}
        >
          {currentLabels.title}
        </h1>
        <p 
          className="text-lg text-[--color-charcoal]"
          style={{
            fontFamily: "var(--font-workhorse, 'Inter', sans-serif)",
            fontWeight: 400,
          }}
        >
          {currentLabels.subtitle}
        </p>
      </header>

      {isLoading ? (
        <div className="py-12 text-center text-[--color-charcoal]">Loading...</div>
      ) : projectsList.length === 0 ? (
        <div className="py-12 text-center text-[--color-charcoal] border border-dashed border-[--color-border-gray] rounded-[6px] p-8">
          <p>{currentLabels.emptyState}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Projects List */}
          <div className="md:col-span-1 space-y-4">
            {projectsList.map((project) => (
              <FeatureCard
                key={project.id}
                title={project.title}
                description={project.shortDescription}
                isActive={selectedProject?.slug === project.slug}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* Project Details Panel */}
          <div className="md:col-span-2">
            {selectedProject && (
              <ProjectSummary
                title={selectedProject.title}
                description={selectedProject.longDescription}
                projectUrl={selectedProject.projectUrl}
                specs={selectedProject.specs}
                labels={currentLabels.specs}
              />
            )}
          </div>
        </div>
      )}
    </main>
  );
}
