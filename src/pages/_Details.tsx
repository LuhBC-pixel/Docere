import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcQuestions, FcMultipleDevices, FcLike } from 'react-icons/fc';

interface DetailsProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const DetailsText = ({ title, text, icon }: DetailsProps) => {
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
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

const Details = () => {
  return (
    <Box p={20} id='details'>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <DetailsText
          icon={<Icon as={FcQuestions} w={10} h={10} />}
          title={'Estou com dúvida de uma matéria, o que fazer?'}
          text={
            'Entra no fórum e manda a sua pergunta, qualquer um pode responder (lembrando que, se você responder a dúvida do outro(a) aluno(a), aumenta mais pontos para sua conta, ainda mais se tiver votação para 👍).'
          }
        />
        <DetailsText
          icon={<Icon as={FcMultipleDevices} w={10} h={10} />}
          title={'Não tenho internet na minha casa, o que fazer?'}
          text={
            'Vai ter lugares financiado pelo próprio Docere para que você consiga estudar usando computadores. Terão profissionais disposta a te ajudar com o que precisar.'
          }
        />
        <DetailsText
          icon={<Icon as={FcLike} w={10} h={10} />}
          title={'Vai ter pontuações no aplicativo?'}
          text={
            'Vai ter, mas isso não vai definir se você é mais inteligente ou se foi aprovado. As pontuações vão servir como impulso para você se dedicar mais ao estudo e compartilhar conhecimento.'
          }
        />
      </SimpleGrid>
    </Box>
  );
};

export default Details;
