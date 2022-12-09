import { useEffect, useState } from 'react';
import Personaje from './personaje';

function PersonajesList(){
    const [personajes, setPersonajes] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            setPersonajes(data.results);
        }
        fetchData()
    })
    return(
        <div className='container'>
            <div className='row'>
                {
                    personajes.map(personaje =>{
                        return (
                            <div key={personaje.id} className="col-sm-3 offset-sm-4. p-3">
                                <Personaje personaje={personaje} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PersonajesList