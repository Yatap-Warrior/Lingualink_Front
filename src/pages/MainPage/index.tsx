import React from 'react';
import { useRecoilState } from 'recoil';

import { WholeWrapper, Logo, ButtonWrapper } from './styles.jsx';
import LanguageSelectButton from '../../components/LanguageSelectButton';
import Theme from '../../global_style/Theme';
import { atomSample } from '../../util/recoil';

const MainPage: React.FC = () => {
  const [sample] = useRecoilState<Array<string>>(atomSample);

  return (
    <WholeWrapper>
      <Logo />
      <ButtonWrapper>
        <LanguageSelectButton
          textColor=""
          backgroundColor={Theme.color.skyblue}
        >
          button
        </LanguageSelectButton>
        <LanguageSelectButton textColor="" backgroundColor="">
          button
        </LanguageSelectButton>
      </ButtonWrapper>

      <div>{sample}</div>
    </WholeWrapper>
  );
};

export default MainPage;
