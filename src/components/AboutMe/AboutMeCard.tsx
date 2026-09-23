import type { AboutMe } from "@/types";
import SpotlightCard from "../Experience/SpotlightCard";
import { InView } from "../ui/in-view";
import NameTitle from "../VariableProximityComponent/NameTitle";

type AboutMeProps = {
  aboutMe: AboutMe;
};
export default function AboutMeCard({ aboutMe }: AboutMeProps) {
  return (
    <>
      <div className="p-2">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <section>
              <h1 className="text-xl sm:text-xl lg:text-3xl pb-5 font-bold">
                <NameTitle label={aboutMe.headline} />
              </h1>
              <div className="grid grid-cols-2 gap-4 max-w-md">
                {aboutMe.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-gray-500 bg-gray-800 p-4"
                  >
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-xs opacity-70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </section>
            <span>{aboutMe.description}</span>
            {aboutMe.skillGroups.map((group) => (
              <section key={group.title}>
                <h2 className="text-xs font-semibold uppercase tracking-wider opacity-60 mb-2">
                  {group.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 p-2 text-xs rounded-4xl bg-gray-800 border border-gray-500 font-bold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </SpotlightCard>
        </InView>
      </div>
    </>
  );
}
