import React, { useState, useEffect } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    
    const checklog= () => {
      const fakeUser = {
        username: 'tuser1',
        isLoggedIn: true
      };
      setTimeout(() => {
        setIsLoggedIn(fakeUser.isLoggedIn);
        setUsername(fakeUser.username);
      }, 2000);
    };
    checklog ();
  }, []);

  const handleLogin = () => {
    
    const checklog = () => {
      const fakeUser = {
        username: 'user1',
        isLoggedIn: true
      };
      setTimeout(() => {
        setIsLoggedIn(fakeUser.isLoggedIn);
        setUsername(fakeUser.username);
      }, 2000);
    };
    checklog();
  };

  const handleLogout = () => {
    
    const checklog = () => {
      setTimeout(() => {
        setIsLoggedIn(false);
        setUsername('');
      }, 2000);
    };
    checklog();
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>You are logged in as {username}.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
