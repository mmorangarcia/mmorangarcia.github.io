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
}

export type ExpData = {
  title: string;
  href: string;
  download: boolean;
}
