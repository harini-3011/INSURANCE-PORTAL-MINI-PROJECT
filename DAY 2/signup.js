import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    justifyContent:'center',
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

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your signup logic here
    if (password === confirmPassword) {
      // Successful signup, navigate to login page
      setError('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      alert('Signup successful!');
    } else {
      // Passwords do not match, display error message
      setError('Passwords do not match');
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Signup</h2>
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
        <input
          style={styles.input}
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button style={styles.button} type="submit">Signup</button>
        <p>Already have an account? <Link to="/">Login</Link></p>
      </form>
    </div>
  );
};

export default Signup;