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

function UpdateLogin(){
    const navigate = useNavigate();
    let [userData, setUserData] = useState([]);
    useEffect(()=>{
        if(!localStorage.getItem('user-info')){
            navigate("/register")
        }
    })
    if(userData.length === 0){
        setUserData(JSON.parse(localStorage.getItem('user-info')));
    }

    async function update(){
        setUserData(userData);
        let result = await fetch("http://localhost:8000/api/updateLogin",{
            method: 'PUT',
            body: JSON.stringify(userData),
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
                    <Form.Control type="text" placeholder="Escriba su nombre" defaultValue={userData.name} onChange={(e)=> {userData.name = e.target.value}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese el correo" defaultValue={userData.email} onChange={(e)=>{userData.email = e.target.value}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Sin cambios" onChange={(e)=>{userData.password = e.target.value}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese la dirección" defaultValue={userData.address} onChange={(e)=>{userData.address = e.target.value}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicBirthdate">
                    <Form.Group controlId="dob">
                        <Form.Label>Fecha de nacimiento</Form.Label>
                        <Form.Control 
                            type="date" 
                            name="dob" 
                            placeholder="Date of Birth" 
                            max={new Date().toISOString().split("T")[0]}
                            defaultValue={userData.birthdate}
                            onChange={(e)=>{userData.birthdate = e.target.value}}
                            />
                    </Form.Group>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Label>Ciudad de residencia</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa la ciudad" defaultValue={userData.city} onChange={(e)=>{userData.city = e.target.value}}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={update}>
                    Enviar
                </Button>
            </div>
        </div>
    )
}

export default UpdateLogin;