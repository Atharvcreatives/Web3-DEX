import React from "react";
import Logo from "../moralis-logo.svg";
import Eth from "../eth.svg";
import { Link } from "react-router-dom";

function Header(props) {
  const { address, isConnected, connect } = props;

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
      <div className="connectButton" onClick={connect}>
        {isConnected
          ? address.slice(0, 4) + "..." + address.slice(38)
          : "Connect"}
      </div>
    </header>
  );
}

export default Header;
