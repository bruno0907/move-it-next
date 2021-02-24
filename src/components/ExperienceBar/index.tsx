import React, { useContext, useState } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { 
  Container, 
  TotalExperienceBar,
  CurrentExperienceBar 
} from './styles';

const ExperienceBar: React.FC = () => {  
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)  

  const percentToNextLevel = `${String((Math.round(currentExperience) * 100 / experienceToNextLevel))}%`

  return(
    <Container>
      <span>0xp</span>
      <TotalExperienceBar>
        <CurrentExperienceBar experiencePercentage={percentToNextLevel}>
          <span>{currentExperience}xp</span>
        </CurrentExperienceBar>
      </TotalExperienceBar>
      <span>{experienceToNextLevel}xp</span>
    </Container>
  );
}

export default ExperienceBar;