import Header from './Header';
import PersonajesList from './PersonajesList';

function Home(){
    return(
        <div>
            <Header />
            <h1>Lista de personajes</h1>
            <PersonajesList />
        </div>
    )
}

export default Home