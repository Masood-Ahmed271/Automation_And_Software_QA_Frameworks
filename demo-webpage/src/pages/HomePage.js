import React from 'react';
import { Link as LinkBase } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: center;
`;

const Link = styled(LinkBase)`
    color: white;
    font-weight: bold;
    text-decoration: none;
    width: 500px;
`;

const Label = styled.div`
    background-color: rgb(232, 119, 34);
    border-radius: 8px;
    padding: 16px;
    max-width: 400px;
    margin: 16px auto;
    font-size: 24px;
    height: 150px;
`;

export const HomePage = () => (
    <Wrapper>
        <nav style={{ background: "#F5DEB3", padding: '2%', color: "rgb(232, 119, 34)", marginBottom: "5%", }}>

            <h1>FWD Insurance Software Quality Assurance - Demo Webpage</h1>
        </nav>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div style={{display:"flex", flexDirection:"row",}}>
                <Link to='/example-1'>
                    <Label style={{paddingTop:"80px"}}>Title Example</Label>
                </Link>
                <Link to='/example-2'>
                    <Label style={{paddingTop:"80px"}}>Characters Example</Label>
                </Link>
            </div>
            <div style={{display:"flex", flexDirection:"row",}}>
                <Link to='/example-3'>
                    <Label style={{paddingTop:"80px"}}>Login Example</Label>
                </Link>
                <Link to='/example-4'>
                    <Label style={{paddingTop:"80px"}}>Some Other Examples</Label>
                </Link>
            </div>
        </div>
    </Wrapper>
)