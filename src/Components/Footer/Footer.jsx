import React from 'react'; // Importa React para crear componentes

import style from './FooterStyle'; // Importa los estilos desde un archivo externo

import { ChakraProvider, Box, Text } from '@chakra-ui/react'; // Importa componentes de Chakra UI

import translations from '../Languages/Translations';
import { Redes } from '../Redes/Redes';

const Footer = ({ currentLanguage }) => {
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();

    return (
        <ChakraProvider>
            <Box sx={style.body} textAlign='center' alignItems='center' pt='10'>
                <Text justifyContent="center" sx={{ color: 'white', fontWeight: 'bold', ml: '1vh', fontSize: '20', display: 'flex', alignItems: 'center' }}>
                <img  src='vite.png' alt='Logo' style={{ width:'20px', height:'20px', marginRight: '0.5rem' }} />
                    {translations[currentLanguage]['FORSTR']}
                </Text>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Redes />

                </Box> 
                <Text mt='10' color='white'> <span>{translations[currentLanguage]['FORSTR'].charAt(0).toUpperCase() + translations[currentLanguage]['FORSTR'].slice(1).toLowerCase()}</span> @ <span>{año}</span> {translations[currentLanguage]['All Rights Reserved By PixelMove']}</Text>
            </Box>
        </ChakraProvider>
    );
}

export { Footer }

