import styled, { css } from 'styled-components'

interface INavOption{
  active?: boolean;
}

export const Navbar = styled.nav`
  flex: 1;
  height: 100%;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;  
  background: linear-gradient(140deg, var(--white), var(--background));
  box-shadow: 0px 0px 60px var(--background);

  img{}
  
  ul{        
    display: flex;
    flex-direction: column;
    list-style: none;        
  }
  
  button{
    border: none;
    background: none;
    
    svg{
      stroke: var(--text);
      transition: stroke 150ms;
    }

    :hover{
      svg{
        stroke: var(--blue);
      }
    }
  }

  @media(max-width: 695px){
    width: 100%;
    height: 80px;    
    flex-direction: row;
    padding: 0 2rem;
  } 

`;

export const NavOption = styled.li<INavOption>`
  width: 115px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;  
  border-left: solid 3px transparent;    
  cursor: pointer;
  transition: all 150ms;    

  :hover{
    border-left-color: var(--blue);
    
    svg{
      stroke: var(--blue);
    }
  }

  svg{
    stroke: var(--text);    
  }

  ${({ active }) => active && css`
    border-left: solid 3px var(--blue);
    
    svg{
      stroke: var(--blue);
    }

  `}
`