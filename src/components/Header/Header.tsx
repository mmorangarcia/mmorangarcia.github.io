import SpotlightCard from "../Experience/SpotlightCard";
import NameTitle from "../VariableProximityComponent/NameTitle";
import "./Header.css";
import { GiPositionMarker } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";

export default function Header() {
  return (
    <>
      <div className="px-10 pt-6">
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
      <div className="px-10 pt-6">
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
              <span className="text-xs underline underline-offset-1 hover:cursor-pointer">
                martin.moran.garcia.1996@gmail.com
              </span>
            </span>
          </div>
        </SpotlightCard>
      </div>
    </>
  );
}
