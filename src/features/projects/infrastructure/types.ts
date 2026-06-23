export interface ProjectSpec {
  technology: string;
  role: string;
  year: string;
  platform: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: {
    id: string;
    en: string;
  };
  longDescription: {
    id: string;
    en: string;
  };
  projectUrl?: string;
  specs: ProjectSpec;
}
