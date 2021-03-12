import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;  

  aside{}

  main{
    width: 100%;    
    padding: 5rem 10rem;
    display: flex;
    flex-direction: column;     

    h1{
      width: 100%;      
      color: var(--title);
      font-size: 2.2rem;
      font-weight: 600;
      margin-bottom: 5rem;
    }

    ul{
      list-style: none;

      li{
        margin-bottom: 8px;
      }
    }
    
  }
`;
