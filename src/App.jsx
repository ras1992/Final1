import React, { useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { Navbar } from './Components/Navbar/Navbar'
import { Home } from './Components/Home/Home'
import { Line } from './Components/Line/Line';
import { Services } from './Components/Services/Services';
import { Works } from './Components/Works/Works';
import { Resume } from './Components/Resume/Resume';
import { Clients } from './Components/Clients/Clients';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';




function App() {
  const [currentLanguage, setCurrentLanguage] = useState('es');

  const changeLanguage = (newLanguage) => {
      console.log('Cambiando idioma a:', newLanguage);
      setCurrentLanguage(newLanguage);
  };

  return (
    <>
      <Box flexDirection='column' justify="space-between" wrap="wrap" bg='#282830'>

        <Navbar currentLanguage={currentLanguage} onChangeLanguage={changeLanguage}></Navbar>
        <Home currentLanguage={currentLanguage}></Home>
        <Line></Line>
        <Services currentLanguage={currentLanguage}></Services>
        <Line></Line>
        <Works currentLanguage={currentLanguage}></Works>
        <Line></Line>
        <Resume currentLanguage={currentLanguage}></Resume>
        <Line></Line>
        <Clients currentLanguage={currentLanguage}></Clients>
        <Line></Line>
        <Contact currentLanguage={currentLanguage}></Contact>
        <Line></Line>
        <Footer currentLanguage={currentLanguage}></Footer>
        
      </Box>
    </>
  )
}

export default App;
