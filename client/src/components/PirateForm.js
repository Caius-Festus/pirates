import React, { useEffect, useState } from 'react';

const PirateForm = props => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [treasure, setTreasure] = useState("");
    const [catchPhrase, setCatchPhrase] = useState("");
    const [position, setPosition] = useState("Captain");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.createPirate({
            name: name,
            image: image,
            treasure: treasure,
            catchPhrase: catchPhrase,
            position: position,
            pegLeg: pegLeg,
            eyePatch: eyePatch,
            hookHand: hookHand
        })
    }

    return (
        <div>
            <form onSubmit={ onSubmitHandler }>
                {props.errors.map((err, index) => <p key={index} >{err}</p>)}
                <div className="form" >
                    <label>
                        Pirate Name: 
                        <input type="text" onChange={ (e) => setName(e.target.value) } value={name} />
                    </label>
                    <label>
                        Image: 
                        <input type="url" onChange={ (e) => setImage(e.target.value) } value={image} />
                    </label> 
                    <label>
                        # of Treasure Chests: 
                        <input type="number" onChange={ (e) => setTreasure(e.target.value) } value={treasure} />
                    </label> 
                    <label>
                        Pirate Catch Phrase: 
                        <input type="text" onChange={ (e) => setCatchPhrase(e.target.value) } value={catchPhrase} />
                    </label> 
                    <label>
                        Crew Position:
                        <select onChange={ (e) => setPosition(e.target.value) }>
                            <option value="Captain">Captain</option>
                            <option value="First Mate">First Mate</option>
                            <option value="Quartermaster">Quarter Master</option>
                            <option value="Boatswain">Boatswain</option>
                            <option value="Powder Monkey">Powder Monkey</option>
                        </select>
                        {/* <input type="text" onChange={ (e) => setPosition(e.target.value) } value={position} /> */}
                    </label> 
                    <label>
                        Peg Leg
                        <input type="checkbox" checked={pegLeg} onChange={() => setPegLeg(!pegLeg)} />
                    </label>
                    <label>
                        Eye Patch
                        <input type="checkbox" checked={eyePatch} onChange={() => setEyePatch(!eyePatch)} />
                    </label>
                    <label>
                        Hook Hand
                        <input type="checkbox" checked={hookHand} onChange={() => setHookHand(!hookHand)} />
                    </label>
                </div>
                <input type="submit" value="Add Pirate" />
            </form>
        </div>
    );
}

export default PirateForm