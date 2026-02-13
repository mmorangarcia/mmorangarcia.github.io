import { useTransform, motion } from "motion/react";
import { useRef } from "react";
import type { CardProps } from "@/types";
import "./Experience.css";

export const Card: React.FC<CardProps> = ({
  i,
  title,
  period,
  description,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="min-h-[70vh] sm:min-h-[60vh] flex justify-center sticky top-[4%] sm:top-[10%]"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          ["--card-offset" as string]: `${i * 18}px`,
          zIndex: 100 - i,
        }}
        className="card-container w-full lg:p-10 sm:p-4 p-3 rounded-3xl"
      >
        <section className="w-full max-w-180 mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              {title}
            </h2>
            <span className="text-xs sm:text-sm">{period}</span>
          </div>
          <div className="relative top-0 sm:top-[10%] pt-4 sm:pt-8">
            <p className="text-xs sm:text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </section>
      </motion.div>
    </div>
  );
};
