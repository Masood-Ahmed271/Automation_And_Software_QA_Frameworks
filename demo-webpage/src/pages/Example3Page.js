import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100vh;
    background-color: rgb(232, 119, 34);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Box = styled.div`
    height: 300px;
    width: 400px;
    text-align: center;
    box-shadow: 5px 5px 10px #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 16px;
`;

const Input = styled.input`
    border-radius: 8px;
    font-size: 16px;
    padding: 8px;
    border: 2px solid #0E76A8;
    outline-width: 0;
    text-align: center;
    margin-bottom: 16px;
`;

export const Example3Page = () => {
    const [emailInputValue, setEmailInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        const users = [
          { email: 'test@gmail.com', password: '123456789' },
          { email: 'test2@gmail.com', password: '987654321' },
          { email: 'test3@gmail.com', password: 'test' }
        ];
      
        const user = users.find(u => u.email === emailInputValue && u.password === passwordInputValue);
        if (user) {
          setLoggedIn(true);
        }
      };

    return (
        <Wrapper>
            {loggedIn ? (
                <Box>
                    <p data-cy='successful-login' >Successful login!</p>
                </Box>
            ) : (
                <Box>
                    <Input
                        type="email"
                        value={emailInputValue}
                        onChange={e => setEmailInputValue(e.target.value)}
                        placeholder="Email"
                        className="input-large"
                        id="email-input"
                        data-cy="input-email"
                    />
                    <Input
                        type="password"
                        value={passwordInputValue}
                        onChange={e => setPasswordInputValue(e.target.value)}
                        placeholder="Password"
                        className="input-large"
                        id="password-input"
                        data-cy="input-password"
                    />
                    <button data-cy='login-button' onClick={handleLogin}>Login</button>
                </Box>
            )}
        </Wrapper>
    );
}