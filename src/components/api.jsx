import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Article = styled.article`
    background: #F0F0F0;
    width: 240px;
    padding:40px;
    margin-top:10px;
    border-radius:50px;
    display:flex;
    display:inline-block;
    align-items:center;
    margin-left:10px;
    box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.2);
   
`;

const ReactApi =()=>{
    const [user, setUser] = useState([])

    useEffect(()=>{
        fetch('https://swapi.dev/api/people').then(response=>{
        response.json().then(data=>{
            setUser(data.results)
            })
        })
        
        .catch(err=>console.error('Ops, erro na requisição', err))
    },[])

    const renderData = (users, index) =>{
        return(
            <Article key={index}>
                    <p><strong>Nome:</strong> {users.name}</p>
                    <p><strong>Peso:</strong> {users.mass} Kg</p>
                    <p><strong>Cor do cabelo:</strong> {users.hair_color}</p>
                    <p><strong>gênero:</strong> {users.gender}</p>
                    <p><strong>Aniversário:</strong> {users.birth_year}</p>
            </Article>
        )
    }

    return(
        <div>
                {user.map(renderData)}
        </div>
    )
}

export default ReactApi
