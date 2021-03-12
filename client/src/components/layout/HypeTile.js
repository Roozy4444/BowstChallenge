import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"

const HypeTile = () => {
  return (
    <div>
      <div className="tile-one">
        <FontAwesomeIcon className="briefcase" icon={faBriefcase} />
        <p className="hype">The Hype! Agency</p>
        <h4>Talent Management System</h4>
        <p className="hype">The Hype! Agency works with marketing firms to find, vet, and select staff for marketing events across the United States.</p>
      </div>
    </div>
  )
}

export default HypeTile