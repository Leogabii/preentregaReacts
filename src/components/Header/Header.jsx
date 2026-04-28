import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <span>⌚</span>
        <span>Relojería Cronos</span>
      </div>
      <Nav />
    </header>
  );
};
