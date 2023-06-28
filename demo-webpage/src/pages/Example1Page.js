import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(232, 119, 34);
    color: white;
    font-size: 32px;
`;

export const Example1Page = () => (
    <Wrapper>
        <h1>Welcome to Demo</h1>
    </Wrapper>
);