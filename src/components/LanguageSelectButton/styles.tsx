import styled from 'styled-components';
import { isColor } from '../../util/Util';
import { Theme } from '../../global_style';

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 78px;
  height: 36px;
  border-radius: 7px;
  text-align: center;
`;

const CirclePoint = styled.div<{ backgroundColor: string }>`
  border-radius: 50%;
  background-color: ${(props): string =>
    isColor(props.backgroundColor) ? props.backgroundColor : Theme.color.white};
`;

const TextBox = styled.div<{ textColor: string }>`
  color: ${(props): string =>
    isColor(props.textColor) ? props.textColor : Theme.color.darkgrey};
`;

export { ButtonWrapper, CirclePoint, TextBox };
