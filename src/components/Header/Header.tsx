import NameTitle from "../VariableProximityComponent/NameTitle";
import "./Header.css";

export default function Header() {
  return (
    <div className="p-10">
      <img
        className="profile-pic"
        src={`${import.meta.env.BASE_URL}images/profile.png`}
        alt="Bootstrap"
      />
      <p className="text-center pt-2 text-4xl font-bold">
        <NameTitle label="Martin Morán García" />
      </p>
    </div>
  );
}
