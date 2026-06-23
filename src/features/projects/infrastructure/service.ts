import { projects } from "./data";
import { Project } from "./types";

export interface ProjectSummaryDTO {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  projectUrl?: string;
  specs: {
    technology: string;
    role: string;
    year: string;
    platform: string;
  };
}

/**
 * Service asinkron untuk mengambil seluruh data proyek berdasarkan parameter bahasa (en/id).
 */
export async function getProjects(lng: "en" | "id"): Promise<ProjectSummaryDTO[]> {
  // Simulasi fetch asinkron untuk meniru pengambilan data dari MDX/sumber statis
  return new Promise((resolve) => {
    const localizedProjects = projects.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      shortDescription: p.shortDescription[lng] || p.shortDescription["en"],
      longDescription: p.longDescription[lng] || p.longDescription["en"],
      projectUrl: p.projectUrl,
      specs: p.specs,
    }));
    resolve(localizedProjects);
  });
}

/**
 * Service asinkron untuk mengambil detail proyek tertentu berdasarkan slug dan bahasa.
 */
export async function getProjectBySlug(slug: string, lng: "en" | "id"): Promise<ProjectSummaryDTO | null> {
  return new Promise((resolve) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) {
      resolve(null);
      return;
    }
    resolve({
      id: project.id,
      slug: project.slug,
      title: project.title,
      shortDescription: project.shortDescription[lng] || project.shortDescription["en"],
      longDescription: project.longDescription[lng] || project.longDescription["en"],
      projectUrl: project.projectUrl,
      specs: project.specs,
    });
  });
}
