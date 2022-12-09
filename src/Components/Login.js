import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Header from './Header';

function Login(){
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate("/home")
        }
    })
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    async function login(){
        let item = {email, password}
        let result = await fetch("http://localhost:8000/api/login",{
            method: 'POST',
            body: JSON.stringify(item),
            headers:{
                "Content-Type" : 'application/json',
                "Accept" : 'application/json'
            }
        })
        result = await result.json()
        if(!result.error){
            localStorage.setItem("user-info",JSON.stringify(result))
            navigate("/")
        }else{
            console.warn(result)
        }
    }
    return(
        <div>
            <Header />
            <div className="Auth-form-container col-sm-6 offset-sm-3 p-3">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Iniciar Sesion</h3>
                    <div className="form-group mt-3">
                        <label>Correo</label>
                        <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Ingrese correo"
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Contraseña</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Ingrese contraseña"
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={login}>
                        Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login