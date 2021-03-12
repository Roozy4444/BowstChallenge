import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons"

const EasternTile = () => {
  return (
    <div>
      <div className="tile-three">
      <FontAwesomeIcon className="checkmark" icon={faCheckSquare} />
      <p className="propane">Eastern Propane & Oil</p>
        <h4>Design Evolution of the Marketing Site</h4>
        <p className="propane">We worked closely with the internal marketing team to redesign thier marketing site.</p>
      </div>
    </div>
  )
}

export default EasternTile