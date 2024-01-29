import React from "react";
import Logo from "../moralis-logo.svg";
import Eth from "../eth.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="leftH">
        <img src={Logo} alt="logo" className="logo" />
        <Link to="/" className="Link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="Link">
          <div className="headerItem">Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <img src={Eth} alt="eth" className="eth" />
        Ethereum
      </div>
      <div className="connectButton">Connnect</div>
    </header>
  );
}

export default Header;
