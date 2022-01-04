import { Text, Stack, Flex, useColorModeValue } from '@chakra-ui/react';

interface DetailsProps {
  title: string;
  text: string;
  icon: JSX.Element;
}

const DetailsComponents = ({ title, text, icon }: DetailsProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={900}>{title}</Text>
      <Text color={useColorModeValue('gray.900', 'white')}>{text}</Text>
    </Stack>
  );
};

export default DetailsComponents;
