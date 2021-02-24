import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;    
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 110px;  
  
  aside{
    width: 40%;    
    display: flex;
    flex-direction: column;
    justify-content: space-between;      
  }
  
  section{    
    width: 468px;   
    height: 550px;
  }

  @media(max-width: 865px){
    flex-direction: column;
    align-items: center;
    justify-content: center;

    aside{
      width: 80%;
      margin-bottom: 2rem;
    }

    section{
      width: 80%;
    }
  }

  @media(max-width: 720px){
    aside{
      width: 100%;
    }

    section{
      width: 100%;
    }
  }
`