import React from 'react';
import { useRecoilState } from 'recoil';

import { WholeWrapper } from './styles.jsx';
import { atomSample } from '../../util/recoil';

const MainPage: React.FC = () => {
  const [sample] = useRecoilState<Array<string>>(atomSample);

  return (
    <WholeWrapper>
      <div>{sample}</div>
    </WholeWrapper>
  );
};

export default MainPage;
