import { ReactLenis } from "lenis/react";
import { useScroll } from "motion/react";
import { useRef, type JSX } from "react";
import { projects } from "@/data/db";
import { Card } from "./Card";
import "./Experience.css";

export default function Experience(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <h1 className="experience-title">Experiencia</h1>
      <div ref={container} className="relative mt-20 pb-[30vh]">
        <section className="text-white w-full relative">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.04;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </div>
    </ReactLenis>
  );
}
