import type { ReactNode } from "react";

export type Icon = {
  src: string;
  alt: string;
  href?: string;
  name: string;
  title: string;
};

export type Project = {
  title: string;
  description: ReactNode;
  period: string;
  id: string;
  technologies: Array<string>
}

export type ExpData = {
  title: string;
  href: string;
  download: boolean;
  id: string;
}


export type Stat = {
  value: string;
  label: string;
}

export type SkillGroup = {
  title: string;
  items: Array<string>
}

export type AboutMe = {
  headline: string;
  description: ReactNode;
  stats: Array<Stat>;
  skillGroups: Array<SkillGroup>;
}
