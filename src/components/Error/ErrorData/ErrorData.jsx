import erroeImage from '../img/pngwing.com.png';

import { Conteiner, Img, Text } from './ErrorData.styled';

export const ErrorData = () => {
  return (
    <Conteiner role="alert">
      <Img src={erroeImage} alt="errorData" width="800" />
      <Text>Reload the page or try again later!</Text>
    </Conteiner>
  );
};
