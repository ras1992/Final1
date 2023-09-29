import React from 'react'; // Importa React para crear componentes

import style from './HomeStyle'; // Importa los estilos desde un archivo externo

import { ChakraProvider, Box, Text, Flex, Image, HStack, Link } from '@chakra-ui/react'; // Importa componentes de Chakra UI

import perfil from '/Images/perfil2.png';

import translations from '../Languages/Translations';
import { Redes } from '../Redes/Redes';

const Home = ({ currentLanguage }) => {
    const yearsExp = 20; // Define la variable yearsExp con un valor de 20 años de experiencia
    const globalClient = 700; // Define la variable globalClient con un valor de 700 clientes globales
    const awardsWins = 30; // Define la variable awardsWins con un valor de 30 premios

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
                            <Text color="white">

                                <h4>
                                    {translations[currentLanguage]['Hello']}, <Text color="#d03049" as="span"> {translations[currentLanguage]['I´m']} </Text> {/* Texto en rojo */}
                                </h4>
                                <Text as="h1" fontWeight="bold" fontSize="60"> {/* Título en negrita y tamaño de fuente grande */}
                                    {translations[currentLanguage]['Kthan Foster']}
                                </Text>
                                <Text as="h3">{translations[currentLanguage]['Web Designer And Web Developer']}</Text> {/* Título de nivel 3 */}
                                <Text mt="2vh" color="#bac5d5"> {/* Margen superior y color de texto */}
                                    {translations[currentLanguage]['text']}
                                </Text>
                                <Text mt="6vh">{translations[currentLanguage]['FIND ME ON']}</Text> {/* Texto "FIND ME ON" con margen superior */}

                                <Redes></Redes>

                                <HStack spacing={{ base: "1em", md: "3em" }} pt={{ base: "1em", md: "3em" }}> {/* Espacio horizontal y margen superior */}
                                    <Box>
                                        <Text fontSize={{ base: "xl", md: "3xl" }}>
                                            {yearsExp}+ {/* Muestra la variable yearsExp */}
                                        </Text>
                                        <Text mt="1px" color="#bac5d5" fontSize="md">
                                            {translations[currentLanguage]['YEARS OF EXPERIENCE']} {/* Texto de experiencia */}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text fontSize={{ base: "xl", md: "3xl" }}>
                                            {globalClient}+ {/* Muestra la variable globalClient */}
                                        </Text>
                                        <Text mt="1px" color="#bac5d5" fontSize="md">
                                            {translations[currentLanguage]['GLOBAL WORKING CLIENT']} {/* Texto de clientes globales */}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text fontSize={{ base: "xl", md: "3xl" }}>
                                            {awardsWins}+ {/* Muestra la variable awardsWins */}
                                        </Text>
                                        <Text mt="1px" color="#bac5d5" fontSize="md">
                                            {translations[currentLanguage]['AWARDS WIN']} {/* Texto de premios ganados */}
                                        </Text>
                                    </Box>
                                </HStack>
                            </Text>
                        </Flex>

                        <Box
                            flexGrow={{ base: 1.5, md: 0 }} // Factor de crecimiento flexible en dispositivos pequeños y medianos
                            alignItems="center" // Alinea elementos al centro verticalmente
                            justifySelf="center" // Justificación propia al centro
                            pt={{ base: '20vh', md: '20vh' }} // Relleno superior en dispositivos pequeños y medianos
                        >
                            <Box>
                                <Box

                                    sx={{
                                        bgColor: "#1b1b26",
                                        borderRadius: "15px",
                                        position: "relative",
                                        w: "100%",
                                    }}

                                    maxW={{ base: '39em', md: '39em' }} // Ancho máximo en dispositivos pequeños y medianos
                                    h={{ base: '34em', md: '34em' }} // Alto del elemento
                                    maxHeight={{ base: '34em', md: 'none' }} // Altura máxima en dispositivos pequeños y sin límite en medianos
                                >
                                    <Image
                                        src={perfil} // Muestra la imagen de perfil
                                        alt="Perfil" // Texto alternativo para la imagen
                                        pl={{ base: '1vh', md: '1vw' }} // Relleno izquierdo en dispositivos pequeños y medianos
                                        pr={{ base: '1vh', md: '1vw' }}
                                        top={{ base: '-10em', md: '-10em' }}
                                        
                                        sx={{
                                            position: "relative",
                                            w: "100%",
                                            h: "700",
                                            left: "0",
                                            zIndex: 1,
                                            filter: "auto",
                                            brightness: "90%",
                                            contrast: "120%",
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Flex>

                </Box>
            </ChakraProvider>
        </>
    )
}

export { Home }
