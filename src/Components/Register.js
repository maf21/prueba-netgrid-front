import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './Header';
/*
history.push('/path') with navigate('/path')
history.replace('/path') with navigate('/path', { replace: true })
push/navigate do navigate('/path', { state: { name:'Xyz' }})
*/

function Register(){
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate("/home")
        }
    })

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [city, setCity] = useState("");

    async function signUp(){
        let item = {name, email, password, address, birthdate, city}
        let result = await fetch("http://localhost:8000/api/register",{
            method: 'POST',
            body: JSON.stringify(item),
            headers:{
                "Content-Type" : 'application/json',
                "Accept" : 'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/")
    }

    return(
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3 p-3">
                <h3>Registrar Usuario</h3>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Escriba su nombre" value={name} onChange={(e)=>setName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese el correo" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese la contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese la dirección" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicBirthdate">
                    <Form.Group controlId="dob">
                        <Form.Label>Fecha de nacimiento</Form.Label>
                        <Form.Control 
                            type="date" 
                            name="dob" 
                            placeholder="Date of Birth" 
                            max={new Date().toISOString().split("T")[0]}
                            value={birthdate}
                            onChange={(e)=>setBirthdate(e.target.value)}
                            />
                    </Form.Group>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Label>Ciudad de residencia</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa la ciudad" value={city} onChange={(e)=>setCity(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={signUp}>
                    Enviar
                </Button>
            </div>
        </div>
    )
}

export default Register