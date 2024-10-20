import logo from "/assets/dddforumlogo.png";
import { Link } from "react-router-dom";
import { User } from "../types";

const Logo = () => (
  <div id="app-logo">
    <img src={logo}></img>
  </div>
);

const TitleAndSubmission = () => (
  <div id="title-container">
    <h1>Domain-Driven Designers</h1>
    <h3>Where awesome domain driven designers are made</h3>
    <Link to={"/submit"}>submit</Link>
  </div>
);

const HeaderActionButton = ({ user }: { user?: User }) => (
  <div id="header-action-button">
    {user ? (
      <div>
        <div>{user.userName}</div>
        <u>
          <div>logout</div>
        </u>
      </div>
    ) : (
      <h3>
        <Link to="/join">Join</Link>
      </h3>
    )}
  </div>
);

const shouldShowActionButton = (pathName: string) => {
  return pathName !== "/join";
};

export const Header = () => {
  return (
    <header id="header" className="flex align-center">
      <Logo />
      <TitleAndSubmission />
      {shouldShowActionButton(location.pathname) ? <HeaderActionButton /> : ""}
    </header>
  );
};
