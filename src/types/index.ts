import { MotionValue } from "motion/react";
import type { ReactNode } from "react";

export type Icon = {
  src: string;
  alt: string;
  href?: string;
  name: string;
  title: string;
};

export interface Project {
  title: string;
  description: ReactNode;
  color: string;
  period: string;
}

export interface CardProps extends Project {
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}
