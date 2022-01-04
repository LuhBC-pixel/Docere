import dynamic from 'next/dynamic';

import { Box } from '@chakra-ui/react';

const DetailsText = dynamic(
  () => import('../_subComponents/Details/DetailsText')
);

const Details = () => {
  return (
    <Box p={20} id='details'>
      <DetailsText />
    </Box>
  );
};

export default Details;
