import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
    background:#F0F0F0
    ;
    padding:15px;
    margin-bottom:30px;
    box-shadow: 3px 1px 2px 1px rgba(0, 0, 0, 0.2);
    `

const Title = styled.h1 `
    color: #545454;
`



const Navbar =()=>{
    return(
            <NavbarContainer>
                <Title>Star Wars Database 🛸</Title>
            </NavbarContainer>
    )
}

export default Navbar