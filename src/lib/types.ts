export type CaseStudyImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type SectionImages = {
  items: CaseStudyImage[];
  display?: "carousel";
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  featured?: boolean;
  client?: string;
  role?: string;
  tools?: string[];
  color?: string;
  heroImage?: string;
  hero?: {
    images: Array<{ src: string; alt: string; rotation?: number }>;
    background?: string;
    layout?: "spread";
  };
  caseStudy?: {
    labels?: {
      challenge?: string;
      process?: string;
      decisions?: string;
      results?: string;
      reflection?: string;
    };
    challenge?: string;
    challengeImages?: SectionImages;
    process?: string;
    processImages?: SectionImages;
    decisions?: string;
    decisionsImages?: SectionImages;
    results?: string;
    resultsImages?: SectionImages;
    reflection?: string;
  };
};
