import React from 'react';
import styled from 'styled-components';
const PageHeader = styled.header`
  background: linear-gradient(90deg, #6E19FF,  #0A4A94);
  color: white;
  font-style: italic;
  box-sizing: border-box;
  width: 100%;
  padding: 2rem;
  
  @media only screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    @media only screen and (min-width: 600px) {
      text-align: right;
      margin-top: 0;
      font-size: 2rem;
    }
    
    padding: 0;
    font-weight: 300;
    margin: 0;

    font-size: 1.5rem;

    margin-top: 0.5rem;
    text-align: center;
  }
  p {
    @media only screen and (min-width: 600px) {
      text-align: left;
      font-size: 1.5rem;

    }
    padding: 0;
    margin: 0;
    font-size: 1rem;
    text-align: center;

  }
`
export function Header() {
  return(
    <PageHeader>
      <p>Ally.io Assignment</p>
      <h1>Objectives and Key Results</h1>
    </PageHeader>
  )
}