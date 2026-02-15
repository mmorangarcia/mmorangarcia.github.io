import SpotlightCard from "../Experience/SpotlightCard";
import NameTitle from "../VariableProximityComponent/NameTitle";
import "./Header.css";
import { GiPositionMarker } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt, FaCloudDownloadAlt, FaBook } from "react-icons/fa";

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
            alt="Bootstrap"
          />
          <span className="text-center pt-2 text-2xl font-bold">
            <NameTitle label="Martin Morán García" />
          </span>
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
          <div>
            <span className="pt-2 text-2xl font-bold flex items-center gap-4">
              <FaCloudDownloadAlt size={18} />
              <a
                href="/docs/Salesforce_Certified_B2C_Martin_Moran.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold underline underline-offset-1 hover:cursor-pointer"
              >
                Salesforce Commerce Cloud Developer
              </a>
            </span>
            <span className="pt-2 text-2xl font-bold flex items-center gap-4">
              <FaBook size={18} />
              <span className="text-xs font-bold ">Inglés B2.2 Curso EOI</span>
            </span>
            <span className="pt-2 text-2xl font-bold flex items-center gap-4">
              <FaBook size={18} />
              <span className="text-xs font-bold ">
                Certificación Inglés B1 EOI
              </span>
            </span>
            <span className="pt-2 text-2xl font-bold flex items-center gap-4">
              <FaBook size={18} />
              <span className="text-xs font-bold ">
                Grado Superior Desarrollo de Aplicaciones Multiplataforma
              </span>
            </span>
          </div>
        </SpotlightCard>
      </div>
    </>
  );
}
