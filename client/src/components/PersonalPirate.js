import React from 'react';
import {Link} from 'react-router-dom'

const PersonalPirate = props => {
    const buttonHandler = (e, toggle) => {
        e.preventDefault();
        props.updatePirate(toggle)
    }

    return (
        <div>
            <h1>{props.pirate.name}</h1>
            <Link to={`/`}>
                <p>home</p>
            </Link>
            <div>
                <div>
                    <img src={props.pirate.image} />
                    <p>{props.pirate.catchPhrase}</p>
                </div>
                <div id="about">
                    <h2>About</h2>
                    <p>Position: {props.pirate.position}</p>
                    <p>Treasures: {props.pirate.treasure}</p>
                    <div className="toggleDisplay">
                        <p>Peg Leg: {props.pirate.pegLeg ? "yes": "no"}</p>
                        <button onClick={(e)=>buttonHandler(e, "pegLeg")}>{props.pirate.pegLeg ? "no": "yes"}</button>
                    </div>
                    <div className="toggleDisplay">
                        <p>Eye Patch: {props.pirate.eyePatch ? "yes": "no"}</p>
                        <button onClick={(e)=>buttonHandler(e, "eyePatch")}>{props.pirate.eyePatch ? "no": "yes"}</button>
                    </div>
                    <div className="toggleDisplay">
                        <p>Hook Hand: {props.pirate.hookHand ? "yes": "no"}</p>
                        <button onClick={(e)=>buttonHandler(e, "hookHand")}>{props.pirate.hookHand ? "no": "yes"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalPirate