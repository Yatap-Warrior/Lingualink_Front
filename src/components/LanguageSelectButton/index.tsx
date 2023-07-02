import React from 'react';

import { ButtonWrapper, CirclePoint, TextBox } from './styles';

type styleProps = {
  backgroundColor: string;
  textColor: string;
  children: React.ReactNode;
};

const LanguageSelectButton: React.FC<styleProps> = ({
  backgroundColor,
  textColor,
  children,
}: styleProps) => (
  <ButtonWrapper>
    <CirclePoint backgroundColor={backgroundColor} />
    <TextBox textColor={textColor}>{children}</TextBox>
  </ButtonWrapper>
);

export default LanguageSelectButton;
