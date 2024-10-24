import { useContext } from "react";
import logo from "/assets/dddforumlogo.png";
import { Link } from "react-router-dom";
import { User } from "../types";
import { UserContext } from "../contexts/userContext";

const Logo = () => (
  <div id="app-logo">
    <Link to="/">
      <img src={logo}></img>
    </Link>
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
  <div className="header-action">
    {user ? (
      <div>
        <div>{user.userName}</div>
        <u>
          <div>logout</div>
        </u>
      </div>
    ) : (
      <h3>
        <Link className="header-action__join" to="/registration">Join</Link>
      </h3>
    )}
  </div>
);

const shouldShowActionButton = (pathName: string) => {
  return pathName !== "/registration";
};

export const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header id="header" className="flex align-center">
      <Logo />
      <TitleAndSubmission />
      {shouldShowActionButton(location.pathname) ? (
        <HeaderActionButton user={user} />
      ) : (
        ""
      )}
    </header>
  );
};
