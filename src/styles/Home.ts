import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: no-repeat url('/images/logo-bg.svg') var(--blue);
  background-position: left center;
  display: flex;  
  flex-direction: column;
  align-items: center;   
  color: var(--text-highlight);
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5rem 8rem;

  button{
    padding: 1rem 3rem;
    background: var(--green);
    border: none;
    border-radius: 5px;
    color: var(--white);
    font-size: 1.2rem;
    transition: background 150ms;

    :hover{
      background: var(--green-dark);
    }
  }
`

export const Content = styled.main`  
  width: 100%;
  padding: 2rem 8rem;
  display: flex;
  justify-content: flex-end;  

  img{
    margin-bottom: 7rem;
  }

  h1{
    font-size: 2rem;
    margin-bottom: 4rem;
    color: var(--white);
  }

  p{
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  form{
    fieldset{
      display: flex;
      border: none;

      input{        
        height: 80px;
        border: solid 2px transparent;
        /* border-right: none; */
        border-radius: 5px 0 0 5px;        
        background: linear-gradient( 90deg, var(--blue-dark), rgba(73, 83, 184, 0.20) );
        outline: none;
        padding: 1rem 2rem;
        font-size: 1.2rem;
        color: var(--text-highlight);
        transition: border 150ms;

        :hover{
          border-color: var(--blue-darker);
        }

        :focus{
          border-color: var(--blue-darker);
        }

        ::placeholder{
          color: var(--white);
        }

        :not(:placeholder-shown) + button{
          background: var(--green);          
        }

        :focus ::placeholder{
          color: transparent;
        }

        :not(:placeholder-shown){
          border-color: transparent;
          border-right: none;
        }


      }

      button{
        width: 80px;
        height: 80px;
        background: var(--blue-dark);     
        border-radius: 0 5px 5px 0;    
        border: none;
        transition: background 150ms;
      }
    }
  }
`
