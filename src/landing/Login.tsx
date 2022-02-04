
import React, { useState } from "react"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [denied, setDenied] = useState<boolean>(false);
  let navigate = useNavigate();

  async function LoginUser(username ?: string, password ?: string) {
    if (!username || !password)
      return;
  
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password})
    })
      .then(data => data.json())
      .catch(() => { console.log("Acess denied."); setDenied(true); });
  }

  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault();
    // console.log("clicked");

    const token = await LoginUser(username, password);
    // console.log(token);
    sessionStorage.setItem("token", token["token"]);

    navigate('/dashboard');
  };

  return(
    <React.Fragment>
      <div className="login_body">
        <form className="login_form" onSubmit={handleSubmit}>
          <h1 style={{marginTop: '0', marginBottom:'30px'}}>Dashboard Login</h1>
          
          <p>Username</p>
          <p><input type="user" onChange = {e => setUsername(e.target.value)} /></p>
          <p>Password</p>
          <p><input type="password" onChange = {e => setPassword(e.target.value)} /></p>
          
          {
            (denied === true) ? (<p className="login_denied">Access Denied</p>) : (<span></span>)
          }

          <p>            
              <Button variant="contained" className='landing_login' type="submit">Login</Button>
          </p>

        </form>
      </div>
    </React.Fragment>
  );
}
  