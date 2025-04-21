import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import landNestLogo from '../../src/assets/LandNestLogo.jpg'; 

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    state: '',
    city: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile is required';
    if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Invalid mobile number';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      
      if (users.some(user => user.email === formData.email)) {
        setErrors({ email: 'Email already registered' });
        return;
      }
      
      const { confirmPassword, ...userData } = formData;
      users.push(userData);
      
      localStorage.setItem('users', JSON.stringify(users));
      navigate('/login');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.registerBox}>
        <img src={landNestLogo} alt="Land Nest Logo" style={styles.logo} />
        <h2 style={styles.title}>Create Account</h2>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Name Field */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your full name"
            />
            {errors.name && <span style={styles.errorText}>{errors.name}</span>}
          </div>

          {/* Mobile Field */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter 10-digit mobile number"
              maxLength="10"
            />
            {errors.mobile && <span style={styles.errorText}>{errors.mobile}</span>}
          </div>

          {/* State Field */}
          <div style={styles.formGroup}>
            <label style={styles.label}>State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your state"
            />
            {errors.state && <span style={styles.errorText}>{errors.state}</span>}
          </div>

          {/* City Field */}
          <div style={styles.formGroup}>
            <label style={styles.label}>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your city"
            />
            {errors.city && <span style={styles.errorText}>{errors.city}</span>}
          </div>

          {/* Email Field */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your email"
            />
            {errors.email && <span style={styles.errorText}>{errors.email}</span>}
          </div>

          {/* Password Field */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={styles.input}
                placeholder="Enter password (min 6 characters)"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.showPasswordBtn}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {errors.password && <span style={styles.errorText}>{errors.password}</span>}
          </div>

          {/* Confirm Password Field */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Confirm Password</label>
            <div style={styles.passwordContainer}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={styles.input}
                placeholder="Confirm your password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={styles.showPasswordBtn}
              >
                {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {errors.confirmPassword && <span style={styles.errorText}>{errors.confirmPassword}</span>}
          </div>

          <button type="submit" style={styles.registerButton}>
            Register
          </button>
        </form>

        <p style={styles.loginLink}>
          Already have an account? <Link to="/login" style={styles.link}>Sign in</Link>
        </p>
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
  registerBox: {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    width: '100%',
    maxWidth: '500px',
    margin: '20px 0'
  },
  logo: {
    width: '250px',
    height: 'auto',
    marginBottom: '20px',
    borderRadius: '5px'
  },
  title: {
    color: '#333',
    marginBottom: '25px',
    fontSize: '24px',
    fontWeight: '600',
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px'
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
    boxSizing: 'border-box',
    '&:focus': {
      borderColor: '#4CAF50',
      outline: 'none'
    }
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
    fontSize: '16px',
    padding: '0',
    display: 'flex',
    alignItems: 'center'
  },
  errorText: {
    color: '#f44336',
    fontSize: '12px',
    marginTop: '5px'
  },
  registerButton: {
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
  loginLink: {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '14px',
    color: '#666'
  },
  link: {
    color: '#4CAF50',
    textDecoration: 'none',
    fontWeight: '500',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
};

export default Register;