import { Box } from '@chakra-ui/react';

import loadable from '@loadable/component'
const DetailsText = loadable(() => import('../components/Details/DetailsText'));

const Details = () => {
  return (
    <Box p={20} id='details'>
      <DetailsText />
    </Box>
  );
};

export default Details;
