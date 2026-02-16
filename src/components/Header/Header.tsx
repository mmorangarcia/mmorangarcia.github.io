import SpotlightCard from "../Experience/SpotlightCard";
import NameTitle from "../VariableProximityComponent/NameTitle";
import "./Header.css";
import { GiPositionMarker } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt, FaLinkedin, FaCloudDownloadAlt } from "react-icons/fa";
import { courses, certifications } from "@/data/db";
import CourseComponent from "./CourseComponent";
import ElectricBorder from "../ElectricBorder";

export default function Header() {
  return (
    <>
      <div className="header-containers">
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <img
            className="profile-pic"
            src={`${import.meta.env.BASE_URL}images/profile.png`}
            alt="Profile-picture"
          />
          <span className="text-center pt-2 text-2xl font-bold pb-4">
            <NameTitle label="Martin Morán García" />
          </span>

<div className="flex justify-between">
<ElectricBorder
            color="#7df9ff"
            speed={1}
            chaos={0.07}
            style={{ borderRadius: 14, width: "fit-content" }}
          >
            <button className="hover:cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/mmorang/")}>
              <div
                style={{ opacity: 0.8 }}
                className="eb-button-container flex items-center gap-4 p-4 rounded-xl w-fit text-[#7df9ff] hover:cursor-pointer"
              >
                <FaLinkedin size={30} />
                <p className="text-xl">LinkedIn</p>
              </div>
            </button>
          </ElectricBorder>

          <ElectricBorder
            color="#7df9ff"
            speed={1}
            chaos={0.07}
            style={{ borderRadius: 14, width: "fit-content" }}
          >
            <button className="hover:cursor-pointer" onClick={() => window.open("/docs/cv_Martin_Moran.pdf","_blank")}>
              <div
                style={{ opacity: 0.8 }}
                className="eb-button-container flex items-center gap-4 p-4 rounded-xl w-fit text-[#7df9ff] hover:cursor-pointer"
              >
                <FaCloudDownloadAlt size={30} />
                <p className="text-md">Descargar CV</p>
              </div>
            </button>
          </ElectricBorder>
</div>
          
          
        </SpotlightCard>
      </div>
      <div className="header-containers">
        <h1 className="personal-data-title text-(--black)">Datos personales</h1>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div>
            <span className="text-center pt-2 text-2xl font-bold flex items-center gap-4">
              <GiPositionMarker />
              <NameTitle label="Asturias" />
            </span>
            <span className="text-center pt-2 text-2xl font-bold flex items-center gap-4">
              <IoIosMail />
              <span
                onClick={() =>
                  (window.location.href = "mailto:yourmail@domain.com")
                }
                className="text-xs underline underline-offset-1 hover:cursor-pointer"
              >
                martin.moran.garcia.1996@gmail.com
              </span>
            </span>
            <span className="text-center pt-2 text-2xl font-bold flex items-center gap-4">
              <FaPhoneAlt size={20} />
              <NameTitle label="678 08 21 95" />
            </span>
          </div>
        </SpotlightCard>
      </div>
      <div className="header-containers">
        <h1 className="personal-data-title text-(--black)">Certificaciones</h1>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          {certifications.map((certifications) => (
            <CourseComponent key={certifications.id} data={certifications} />
          ))}
        </SpotlightCard>
      </div>

      <div className="header-containers">
        <h1 className="personal-data-title text-(--black) flex gap-1 items-center">
          Cursos <span className="text-[1rem]">(Más recientes)</span>
        </h1>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          {courses.map((data) => (
            <CourseComponent key={data.id} data={data} />
          ))}
        </SpotlightCard>
      </div>
    </>
  );
}
