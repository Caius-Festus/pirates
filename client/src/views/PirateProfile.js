import { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate, useParams, Link} from 'react-router-dom';
import PersonalPirate from '../components/PersonalPirate';

const PirateProfile = props => {
    const [pirate, setPirate] = useState({});
    const [refresh, setRefresh] = useState(false);
    const {pirate_id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates/'+pirate_id)
            .then(res=>setPirate(res.data.pirate))
            .catch(err=>console.log(err))
    }, [refresh])

    const updatePirate = (toggle) => {
        const newPirate = pirate;
        newPirate[toggle] = !pirate[toggle]
        axios.put('http://localhost:8000/api/pirates/update/'+pirate_id, newPirate)
            .then(res=>console.log(res))
            .then(() => setRefresh(!refresh))
            .catch(err=>console.log(err))
    }

    return(
        <div>
            <PersonalPirate pirate={pirate} updatePirate={updatePirate} />
        </div>
    );
}

export default PirateProfile