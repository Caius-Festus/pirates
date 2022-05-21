import { useEffect, useState } from 'react';
import axios from 'axios';
import PirateForm from '../components/PirateForm'
import {useNavigate, Link} from 'react-router-dom';

const PirateCreate = props => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const createPirate = (pirate) => {
        if (pirate.position == "Captain") {
            axios.get('http://localhost:8000/api/pirates/Captain')
                .then(res => {
                    if (res.data.captain) {
                        setErrors(["thar can only be one captain!"])
                    }
                })
        } else {
            axios.post('http://localhost:8000/api/pirates/new', pirate)
                .then(res => {
                    console.log(res)
                    return res.data.pirates._id
                })
                .then(res => navigate('/pirates/'+res))
                .catch(err=> {
                    console.log(err);
                    const errorResponse = err.response.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)
                    }
                    setErrors(errorArr);
                })
        }
    }

    return(
        <div>
            <h1>Add Pirate</h1>
            <Link to={`/`}>
                <p>Crew Board</p>
            </Link>
            <PirateForm createPirate={createPirate} errors={errors} />
        </div>
    );
}

export default PirateCreate