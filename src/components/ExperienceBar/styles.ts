import styled from 'styled-components';

type ExperienceBar = {
  experiencePercentage: string;
}

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span{
    font-size: 1rem;
  }
`

export const TotalExperienceBar = styled.div`
  flex: 1;      
  height: 4px;
  border-radius: 4px;
  background: var(--gray-line);
  margin: 0 1.5rem;   
`

export const CurrentExperienceBar = styled.div<ExperienceBar>`
  width: ${({ experiencePercentage }) => experiencePercentage};  
  height: 100%;
  background: var(--green)!important;
  position: relative;
  text-align: right;

  span{    
    position: absolute;    
    top: 10px;
    transform: translateX(-50%)
  }
`