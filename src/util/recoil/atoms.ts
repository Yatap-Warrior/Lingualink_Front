import { atom } from 'recoil';

const atomSample = atom<Array<string>>({
  key: 'sample',
  default: ['테스트입니다.'],
});

export { atomSample };
