import styled from 'styled-components';
import logo from '../../util/images/LingualinkLogo.png';

const WholeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  padding-top: 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  object-fit: contain;
  margin-top: 60px;
  height: 150px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export { WholeWrapper, Logo, ButtonWrapper };
