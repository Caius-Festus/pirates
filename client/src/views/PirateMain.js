import { useEffect, useState } from 'react';
import axios from 'axios';
import PirateDisplay from '../components/PirateDisplay';
import {Link} from 'react-router-dom'

const PirateMain = props => {
    const [pirates, setPirates] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
            .then(res=>{
                setPirates(res.data.pirates.sort((a,b) => {
                    const pirateA = a.name.toUpperCase();
                    const pirateB = b.name.toUpperCase();
                    if (pirateA < pirateB) {
                        return -1;
                    }
                    if (pirateA > pirateB) {
                        return 1
                    }
                    return 0;
                }));
                setLoaded(true);
                console.log(res);
            })
            .then(() => console.log(pirates))
            .catch(err=>console.log(err))
    }, [refresh]);

    const deletePirate = (e, pirate_id) => {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/pirates/delete/'+pirate_id)
            .then(res=>console.log(res))
            .then(()=>setRefresh(!refresh))
            .catch(err=>console.log(err))
    }

    return(
        <div>
            <Link to={`/new`}>
                <p>Add Pirate</p>
            </Link>
            {loaded && <PirateDisplay pirates={pirates} deletePirate={deletePirate} />}
        </div>
    );
}

export default PirateMain