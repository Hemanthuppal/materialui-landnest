// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ setIsAuthenticated }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Hardcoded credentials
//     const validEmail = 'admin@gmail.com';
//     const validPassword = 'admin@123';
    
//     if (email === validEmail && password === validPassword) {
//       setIsAuthenticated(true);
//       navigate('/dashboard');
//     } else {
//       setError('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <div style={{
//       maxWidth: '400px',
//       margin: '50px auto',
//       padding: '20px',
//       border: '1px solid #ddd',
//       borderRadius: '5px',
//       boxShadow: '0 0 10px rgba(0,0,0,0.1)'
//     }}>
//       <h2 style={{ textAlign: 'center' }}>Login</h2>
//       {error && <div style={{ 
//         color: 'red', 
//         marginBottom: '15px',
//         textAlign: 'center'
//       }}>{error}</div>}
      
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
//           <input 
//             type="email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             required 
//             style={{
//               width: '100%',
//               padding: '8px',
//               boxSizing: 'border-box'
//             }}
//           />
//         </div>
        
//         <div style={{ marginBottom: '15px' }}>
//           <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
//           <input 
//             type="password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             required 
//             style={{
//               width: '100%',
//               padding: '8px',
//               boxSizing: 'border-box'
//             }}
//           />
//         </div>
        
//         <button 
//           type="submit"
//           style={{
//             width: '100%',
//             padding: '10px',
//             backgroundColor: '#4CAF50',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer'
//           }}
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
















import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import landNestLogo from '../../src/assets/LandNestLogo.jpg'; // adjust path as needed


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      const response = await fetch('http://46.37.122.105:89/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: email,
          password: password
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        if (rememberMe) {
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem("user_id", data.user_id);
       
         
        }
  
        navigate('/dashboard');
      } else {
        setError(data.message || 'Invalid email or password');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again later.');
    }
  };
  

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
      <img src={landNestLogo} alt="Land Nest Logo" style={styles.logo} />
        <h2 style={styles.title}>Login</h2>
        {error && <div style={styles.error}>{error}</div>}
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
              placeholder="Enter your email"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                required
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.showPasswordBtn}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <div style={styles.rememberMe}>
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              style={styles.checkbox}
            />
            <label htmlFor="rememberMe" style={styles.rememberLabel}>
              Remember me
            </label>
          </div>

          <button type="submit" style={styles.loginButton}>
            Login
          </button>

          <div style={styles.links}>
            <Link to="/register" style={styles.link}>
              Create an account
            </Link>
            <Link to="/forgot-password" style={styles.link}>
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    backgroundImage: 'linear-gradient(to bottom right, #f5f7fa, #c3cfe2)',
    padding: '20px'
  },
  loginBox: {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center'
  },
  logo: {
    width: '250px',
    height: 'auto',
    marginBottom: '20px',
    borderRadius: '5px'
  },
  
  title: {
    color: '#333',
    marginBottom: '30px',
    fontSize: '24px',
    fontWeight: '600'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left'
  },
  label: {
    marginBottom: '8px',
    fontSize: '14px',
    color: '#555',
    fontWeight: '500'
  },
  input: {
    padding: '12px 15px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    fontSize: '14px',
    transition: 'border 0.3s',
    width: '100%',
    boxSizing: 'border-box'
  },
  passwordContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  showPasswordBtn: {
    position: 'absolute',
    right: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px'
  },
  rememberMe: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0'
  },
  checkbox: {
    marginRight: '8px',
    accentColor: '#4CAF50'
  },
  rememberLabel: {
    fontSize: '14px',
    color: '#555'
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '10px',
    '&:hover': {
      backgroundColor: '#45a049'
    }
  },
  links: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    fontSize: '14px'
  },
  link: {
    color: '#4CAF50',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  error: {
    color: '#f44336',
    backgroundColor: '#fdecea',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '20px',
    fontSize: '14px'
  }
};

export default Login;