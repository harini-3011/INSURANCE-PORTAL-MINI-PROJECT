import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';


const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundImage: 'url("https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHxpbnN1cmFuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60")',
    backgroundSize: 'cover',
    backgroundrepeat: 'no-repeat',
    

  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor:'white',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#32a8a4',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

const Login = () => {
  const navigate=useNavigate('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your login logic here
    if (email === 'admin@example.com' && password === 'password') {
      // Successful login, navigate to dashboard
      setError('');
      setEmail('');
      setPassword('');
      alert('Login successful!');
      navigate('/nav');
    } else {
      // Invalid credentials, display error message
      setError('Invalid email or password');
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p style={styles.error}>{error}</p>}
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button style={styles.button} type="submit">Login</button>

        
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </form>
    </div>
  );
};

export default Login;