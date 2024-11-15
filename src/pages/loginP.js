import React from "react";


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  // Handle form submission
    const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    };
    
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>

                <button type = "submit">Login</button>
                <button>Create An Account</button>
                <button>Continue As Guest</button>
            </form>
        </div>
    ); 
}

export default Login;