
import { Box } from '@chakra-ui/react';
import MainRoutes from './routes/MainRoutes';
// import { ColorModeScript } from '@chakra-ui/react'

function App() {


  return (

    <Box>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
      <MainRoutes />
    </Box>
  );
}

export default App;
