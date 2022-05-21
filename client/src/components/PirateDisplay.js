import React from 'react';
import {Link} from 'react-router-dom'

const PirateDisplay = props => {
    return (
        <div>
            {props.pirates.map( (pirate, i) => {
                return (
                <div key={i}>
                    <p>{pirate.name}</p>
                    <img src={pirate.image} height="100" width="100" />
                    <button onClick={(e)=>props.deletePirate(e, pirate._id)} >Walk the Plank</button>
                    <Link to={`/pirates/${pirate._id}`}>
                        <p>View Pirate</p>
                    </Link>
                </div>
                );
                }
            )}
        </div>
    );
}

export default PirateDisplay