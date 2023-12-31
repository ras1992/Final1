import { React, useState, useEffect } from 'react'; // Importa React, useState y useEffect desde React
import style from './ClientsStyle'; // Importa los estilos desde un archivo externo
import { ChakraProvider, Box, Text, Flex, Center, Button, Image } from '@chakra-ui/react'; // Importa componentes de Chakra UI

import translations from '../Languages/Translations';

const Clients = ({currentLanguage}) => {

    const [cardService, setCardService] = useState([]); // Define un estado para almacenar la información de las tarjetas de trabajo

    useEffect(() => {
        try {
            // Realiza una solicitud fetch para obtener datos desde 'Json/Data.json'
            fetch('Json/Data.json')
                .then(response => response.json()) // Convierte la respuesta a formato JSON
                .then(data => setCardService(data[currentLanguage]['clients'])) // Almacena los datos de trabajo en el estado

        } catch (error) {
            console.error('Error fetching data:', error) // Manejo de errores en caso de falla en la solicitud
        }

    }, [currentLanguage]);

    console.log(cardService) // Muestra en la consola la información de las tarjetas de trabajo

    return (
        <>
            <ChakraProvider> {/* Proveedor de Chakra UI para estilos */}
                <Flex sx={style.body} pt={{ base: '3vw', md: '5vw' }} pl={{ base: '3vw', md: '5vw' }} flexDirection='column' justifyContent="center">
                    <Flex align="center" flexDirection="column" textAlign="center" mb="4vh">
                        <Text color='red' fontSize="md">{translations[currentLanguage]['BEST CUSTOMERS']}</Text>
                        <Text as="h1" fontWeight="bold" color='white' fontSize={{ base: '40', md: '60' }}>{translations[currentLanguage]['Selected Clients']}</Text>
                    </Flex>

                    <Flex flexDirection="column" alignItems="left" pb='5em'>
                        <Flex flexWrap="wrap" justifyContent="center">
                            {cardService.map((card, index) => (
                                <Box
                                    key={index}
                                    sx={style.cardStyle}
                                >
                                    <Text  x="auto" my="auto" color='white'>{card.name}</Text> 
                                    {/* <Image src={card.icon} w='5em' h='5em' mx="auto" my="auto"></Image>  */}
                                </Box>
                            ))}
                        </Flex>
                    </Flex>
                    
                </Flex>
            </ChakraProvider>
        </>
    )
}

export { Clients }
