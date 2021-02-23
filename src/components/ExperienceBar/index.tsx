import React, { useState } from 'react';

import { 
  Container, 
  TotalExperienceBar,
  CurrentExperienceBar } from './styles';

const ExperienceBar: React.FC = () => {
  const [percentage, setPercentage] = useState('50%')
  return(
    <Container>
      <span>0 xp</span>
      <TotalExperienceBar>
        <CurrentExperienceBar experiencePercentage={percentage}>
          <span>300xp</span>
        </CurrentExperienceBar>
      </TotalExperienceBar>
      <span>600 xp</span>
    </Container>
  );
}

export default ExperienceBar;