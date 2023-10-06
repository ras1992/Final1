import React from 'react'; // Importa React para crear componentes

import style from './HomeStyle'; // Importa los estilos desde un archivo externo

import { ChakraProvider, Box, Text, Flex, Image, HStack, Link } from '@chakra-ui/react'; // Importa componentes de Chakra UI

import perfil from '/Images/ramiro.png';

import translations from '../Languages/Translations';
import { Redes } from '../Redes/Redes';

const Home = ({ currentLanguage }) => {
    const yearsExp = 2; // Define la variable yearsExp con un valor de 20 años de experiencia
    const globalClient = 2; // Define la variable globalClient con un valor de 700 clientes globales
    const awardsWins = 3; // Define la variable awardsWins con un valor de 30 premios

    return (
        <>
            <ChakraProvider> {/* Proveedor de Chakra UI para estilos */}
                <Box sx={style.body}> {/* Usa estilos definidos en style.body */}
                    <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        direction={{ base: "column", md: "row" }}
                        pl={{ base: '3vw', md: '5vw' }}
                        pr={{ base: '5vw', md: '7.1vh' }}
                        pt={{ base: '10vh', md: '10vh' }}
                    >
                        <Flex
                            flexGrow={{ base: 1, md: 1 }} // Factor de crecimiento flexible en dispositivos pequeños y medianos
                            width={{ base: '100', md: '45em' }} // Ancho del elemento
                            alignItems="center" // Alinea elementos al centro verticalmente
                            pr={{ base: '1em', md: '2em' }} // Relleno derecho en dispositivos pequeños y medianos
                        >
                            <Box color="white">
                                <Text as="h4">
                                    {translations[currentLanguage]['Hello']}, <Text color="#d03049" as="span"> {translations[currentLanguage]['I´m']} </Text>
                                </Text>
                                <Text as="h1" fontWeight="bold" fontSize={{ base: '40', md: '60' }}>
                                    {translations[currentLanguage]['Kthan Foster']}
                                </Text>
                                <Text as="h3">{translations[currentLanguage]['Web Designer And Web Developer']}</Text>
                                <Text mt="2vh" color="#bac5d5">
                                    {translations[currentLanguage]['text']}
                                </Text>
                                <Text mt="6vh">{translations[currentLanguage]['FIND ME ON']}</Text>

                                <Redes></Redes>

                                <HStack spacing={{ base: "1em", md: "3em" }} pt={{ base: "1em", md: "3em" }}>
                                    <Box>
                                        <Text fontSize={{ base: "xl", md: "3xl" }}>
                                            {yearsExp}+
                                        </Text>
                                        <Text mt="1px" color="#bac5d5" fontSize="md">
                                            {translations[currentLanguage]['YEARS OF EXPERIENCE']}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text fontSize={{ base: "xl", md: "3xl" }}>
                                            {globalClient}+
                                        </Text>
                                        <Text mt="1px" color="#bac5d5" fontSize="md">
                                            {translations[currentLanguage]['GLOBAL WORKING CLIENT']}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text fontSize={{ base: "xl", md: "3xl" }}>
                                            {awardsWins}+
                                        </Text>
                                        <Text mt="1px" color="#bac5d5" fontSize="md">
                                            {translations[currentLanguage]['AWARDS WIN']}
                                        </Text>
                                    </Box>
                                </HStack>
                            </Box>
                        </Flex>

                        <Box
                            flexGrow={{ base: 1.5, md: 0 }} // Factor de crecimiento flexible en dispositivos pequeños y medianos
                            alignItems="center" // Alinea elementos al centro verticalmente
                            justifySelf="center" // Justificación propia al centro
                            pt={{ base: '30vh', md: '10vh' }} // Relleno superior en dispositivos pequeños y medianos
                        >

                            <Box
                                sx={style.box}
                            >
                                <Image
                                    src={perfil}
                                    alt="Perfil"
                                    sx={style.image}
                                />
                            </Box>

                        </Box>
                    </Flex>

                </Box>
            </ChakraProvider>
        </>
    )
}

export { Home }
