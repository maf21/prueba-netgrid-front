import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';

function Header(){
    let user = JSON.parse(localStorage.getItem('user-info'))
    const navigate = useNavigate()
    function logOut(){
        localStorage.clear();
        navigate("/register");
    }
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">PruebaNetgrid</Navbar.Brand>
                    <Nav className="me-auto navbar_wrapper">
                        <Link to="/home">Home</Link>
                        {
                            localStorage.getItem('user-info') ?
                                <>
                                    <Link to="/personajes">personajes</Link>
                                </>
                            :
                                <>
                                    <Link to="/login">Iniciar Sesion</Link>
                                    <Link to="/register">Registrarse</Link>
                                </>
                        }
                    </Nav>
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Nav>
                                    <NavDropdown title={user && user.name}>
                                        <NavDropdown.Item onClick={logOut}>Cerrar sesion</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </>
                        : null
                    }
                </Container>
            </Navbar>
        </div>
    );
}

export default Header