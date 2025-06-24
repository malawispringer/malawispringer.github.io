import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface PasswordProtectedProps {
  children: React.ReactNode;
  password: string;
  pageName: string;
}

const PasswordProtected: React.FC<PasswordProtectedProps> = ({ children, password, pageName }) => {
  const [enteredPassword, setEnteredPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAuth = sessionStorage.getItem(`auth_${pageName}`);
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, [pageName]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (enteredPassword === password) {
      setIsAuthenticated(true);
      sessionStorage.setItem(`auth_${pageName}`, 'true');
    } else {
      alert('Incorrect password.');
      setEnteredPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(`auth_${pageName}`);
    // Optionally redirect to home or another page
    navigate('/');
  };

  if (isAuthenticated) {
    return (
      <div>
        {children}
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Password Required for {pageName}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={enteredPassword}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PasswordProtected;