import dynamic from 'next/dynamic';

import { Box, Heading } from '@chakra-ui/react';

const AboutComponentsText = dynamic(() => import('./AboutComponentsText'));

const AboutText = () => {
  return (
    <Box
      display='flex'
      flex='1'
      flexDirection='column'
      justifyContent='center'
      marginTop={{ base: '3', sm: '0' }}
    >
      <Heading marginTop='1'>
        Uma maneira de espalhar a educação para todos!
      </Heading>
      <AboutComponentsText
        text={
          'É um aplicativo que além de capacitar os pais a ensinarem aos seus filhos, ensina para qualquer um!'
        }
      />
      <AboutComponentsText
        text={
          'O aplicativo é inclusivo para todos, tem legendas nos vídeos, tem ferramenta para libras, tem ferramenta para passar o texto em áudio. Tudo isso desde a abertura do aplicativo até o fechamento do aplicativo.'
        }
      />
      <AboutComponentsText
        text={
          'Nele vai ter diversos tipos de assuntos. Desde ensinar a escrever e ler, fazer contas matemáticas, programação, finanças, história, geografia, economia doméstica e entre outros.'
        }
      />
      <AboutComponentsText
        text={'O usuário escolhe qual(is) matéria(s) ele deseja cursar.'}
      />
      <AboutComponentsText
        text={
          'Quando o usuário escolher a matéria e clicar nele para aprender, o aplicativo vai mostrar os vídeos de professores ensinando (legendado).Vai mostrar textos (parecido com uma apostila) e permite o aluno imprimir, grifar no próprio app. Durante o percursos das aulas vão ter pequenos desafios para os alunos fazerem. (nota: Os desafios não vão definir se o aluno foi aprovado na matéria, não vai ter essa aprovação e reprovação)'
        }
      />
    </Box>
  );
};

export default AboutText;
