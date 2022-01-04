import { Text, useColorModeValue } from '@chakra-ui/react';

interface IPropsChildren {
  text: React.ReactNode;
}

const AboutComponentsText = ({ text }: IPropsChildren) => {
  return (
    <Text
      as='p'
      marginTop='2'
      color={useColorModeValue('gray.700', 'white')}
      fontSize='lg'
    >
      {text}
    </Text>
  );
};

export default AboutComponentsText;
