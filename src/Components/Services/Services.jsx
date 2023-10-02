import { React, useState, useEffect } from 'react'; // Importa React, useState y useEffect desde React
import style from './ServicesStyle'; // Importa los estilos desde un archivo externo
import { ChakraProvider, Box, Text, Flex, Center, Button, Image } from '@chakra-ui/react'; // Importa componentes de Chakra UI
import { Line } from '../Line/Line'; // Importa el componente personalizado Line

import translations from '../Languages/Translations';

const Services = ({ currentLanguage }) => {

    const [cardService, setCardService] = useState([]); // Define un estado para almacenar la información de las tarjetas de servicio

    useEffect(() => {
        try {
            // Realiza una solicitud fetch para obtener datos desde 'Json/Data.json'
            fetch('Json/Data.json')
                .then(response => response.json()) // Convierte la respuesta a formato JSON
                .then(data => setCardService(data[currentLanguage]['services'])) // Almacena los datos de servicio en el estado

        } catch (error) {
            console.error('Error fetching data:', error) // Manejo de errores en caso de falla en la solicitud
        }

    }, [currentLanguage]);

    console.log(cardService) // Muestra en la consola la información de las tarjetas de servicio

    return (
        <>
            <ChakraProvider>
                <section id="Service">
                    <Flex sx={style.body} pt={{ base: '5em', md: '7em' }} pl={{ base: '3vw', md: '5vw' }} flexDirection='column'>
                        <Box mb='4vh'>
                            <Text
                                flexGrow={{ base: 1, md: 1 }}
                                width={{ base: '100%', md: '45em' }}
                                alignItems="center">
                                <Text color='red' fontSize="md">{translations[currentLanguage]['MY SERVICES']}</Text> {/* Texto "MY SERVICES" en rojo */}
                                <Text as="h1" fontWeight="bold" color='white' fontSize={{ base: '40', md: '60' }}>{translations[currentLanguage]['What I Do']}</Text> {/* Título en blanco */}
                            </Text>
                        </Box>

                        <Flex flexDirection="column" alignItems="left" pb='5em'>
                            <Flex flexWrap="wrap" justifyContent="center">
                                {cardService.map((card, index) => (
                                    <Box
                                        key={index}

                                        flex={{ base: "0 0 calc(100% - 16px)", md: "0 0 calc(30% - 16px)" }}

                                        sx={style.cardData}
                                    >
                                        <Image src={card.icon} w='50px' h='40px'></Image> {/* Muestra la imagen del icono */}
                                        <Text fontSize="4xl" color="white" mt='1vh' >
                                            {card.name} {/* Muestra el nombre del servicio */}
                                        </Text>
                                        <Text color="#bac5d5" fontSize="xl">
                                            {card.detail} {/* Muestra los detalles del servicio */}
                                        </Text>
                                    </Box>
                                ))}
                            </Flex>
                        </Flex>
                    </Flex>
                </section>
            </ChakraProvider>
        </>
    )
}

export { Services }
