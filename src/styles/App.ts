import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100vh;  
  display: grid;
  grid-template-columns: 115px 1fr 1fr;
  grid-template-rows: 115px 1fr 115px;    
  grid-template-areas:
    "Sidebar ExperienceBar ExperienceBar"
    "Sidebar Main Challenges"
    "Sidebar . . ";  

  header{
    grid-area: ExperienceBar;        
    padding: 2rem;    
    align-self: center;    
  }
  
  aside{
    grid-area: Sidebar; 
  }

  main{
    grid-area: Main;     
    width: 100%;
    max-width: 465px;
    padding: 5rem 2rem;
    justify-self: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: space-between;  
  }

  section{  
    grid-area: Challenges;    
    width: 100%;    
    max-width: 465px;
    justify-self: flex-start;    
    padding: 5rem 2rem;       
  }

  @media(max-width: 1090px){
    grid-template-columns: 115px 1fr;
    grid-template-rows: 115px 1fr 1fr;  
    grid-template-areas:
      "Sidebar ExperienceBar"
      "Sidebar Main"
      "Sidebar Challenges";

      main{
        justify-self: center;
      }

      section{
        justify-self: center;
      }
  }

  @media(max-width: 695px){
    grid-template-columns: 1fr;
    grid-template-rows: 80px 80px 1fr 1fr;  
    grid-template-areas:
      "Sidebar"
      "ExperienceBar"
      "Main"      
      "Challenges";

      main{
        padding: 2rem;
      }

      section{
        padding: 2rem;
      }
  }
`
