import './App.css';
import Sidebar from './components/Sidebar';
import Feeds from './components/Feeds';
import Rightbar from './components/Rightbar';
import { Box, createTheme, Stack, styled, ThemeProvider } from '@mui/material';
import ModalTweet from './components/ModalTweet';
import { useState } from 'react';



const Cont = styled(Box)((({theme}) => ({
  [theme.breakpoints.up('lg')]:{
    width:'65%',
    marginLeft:'auto',
    marginRight:'auto'
  }
})))

function App() {
  const [mode, setMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode:mode,
      primary:{
        main: '#2196f3'
      },
      item:{
        main:'#000',
        contrastText: '#fff',
      }
    },
    typography: {
      fontFamily: 'Roboto'
    }
  })

  const [open, setOpen] = useState(false)

  const setMod = (klik) => {
    setOpen(klik)
  }

  const clModal = (tutup) => {
    setOpen(tutup)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={'background.default'}>
        <Cont >
          <Stack direction='row' >
            <Sidebar setMod={setMod} mode={mode} setMode={setMode} />
            <Feeds />
            <Rightbar />
          </Stack>
          <ModalTweet open={open} clModal={clModal} />
        </Cont>
      </Box>
    </ThemeProvider>

  );
}

export default App;
