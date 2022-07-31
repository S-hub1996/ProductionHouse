
import { Box } from '@chakra-ui/react';
import MainRoutes from './routes/MainRoutes';
// import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
function App() {
  console.log(theme);
  return (

    <Box bgColor={'black'} color={'white'}>
  {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
<MainRoutes/>
    </Box>
  );
}

export default App;
