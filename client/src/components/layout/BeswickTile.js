import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake } from "@fortawesome/free-solid-svg-icons"

const BeswickTile = () => {
  return (
    <div>
      <div className="tile-two">
      <FontAwesomeIcon className="handshake" icon={faHandshake} />
      <p className="beswick">Beswick Engineering</p>
        <h4>E-Commerce</h4>
        <p className="beswick">Not only was the site a redesign, but we were tasked with upgrading thier e-commerce to increase the number of sales made through thier website.</p>
      </div>
    </div>
  )
}

export default BeswickTile