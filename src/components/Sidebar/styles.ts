import styled from 'styled-components';

export const Container = styled.div`  
  flex: 1;
  height: 100%;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;  
  background: linear-gradient(140deg, var(--white), var(--background));
  box-shadow: 0px 0px 60px var(--background);
  position: fixed;
  top: 0;
  left: 0;

  @media(max-width: 695px){
    width: 100%;
    height: 80px;    
    flex-direction: row;
    padding: 0 2rem;

    ul{
      display: flex;
    }
  }

    img{}
    nav{
      ul{        
        list-style: none;

        li{
          margin: 1rem;
        }
      }
    }
    button{}

`;
