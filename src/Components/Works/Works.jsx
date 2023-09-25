import { React, useState, useEffect } from 'react'; // Importa React, useState y useEffect desde React
import style from './WorksStyle'; // Importa los estilos desde un archivo externo
import { ChakraProvider, Box, Text, Flex, Center, Button, Image } from '@chakra-ui/react'; // Importa componentes de Chakra UI

import translations from '../Languages/Translations';

const Works = ({currentLanguage}) => {

    const [cardService, setCardService] = useState([]); // Define un estado para almacenar la información de las tarjetas de trabajo

    useEffect(() => {
        try {
            // Realiza una solicitud fetch para obtener datos desde 'Json/Data.json'
            fetch('Json/Data.json')
                .then(response => response.json()) // Convierte la respuesta a formato JSON
                .then(data => setCardService(data[currentLanguage]['works'])) // Almacena los datos de trabajo en el estado

        } catch (error) {
            console.error('Error fetching data:', error) // Manejo de errores en caso de falla en la solicitud
        }

    }, [currentLanguage]);

    console.log(cardService) // Muestra en la consola la información de las tarjetas de trabajo

    return (
        <>
            <ChakraProvider>
            <section id="Porfolio">
                <Flex sx={style.body} pt={{ base: '5em', md: '5em' }} pl={{ base: '3vw', md: '5vw' }} flexDirection='column' justifyContent="center" alignItems="">
                    <Flex align="center" flexDirection="column" textAlign="center" mb="4vh">
                        <Text color='red' fontSize="md">{translations[currentLanguage]['AWARD WINNING WORK']}</Text>
                        <Text as="h1" fontWeight="bold" color='white' fontSize="60">{translations[currentLanguage]['Recent Works']}</Text>
                    </Flex>

                    <Flex flexDirection="column" alignItems="left" pb='5em'>
                        <Flex flexWrap="wrap" justifyContent="left">
                            {cardService.map((card, index) => (
                                <Box
                                    key={index} // Clave única para cada tarjeta
                                    p="10" // Relleno interno
                                    flex={{ base: "0 0 calc(100% - 16px)", md: "0 0 calc(30% - 16px)" }} // Calcula el ancho de cada tarjeta para 3 por fila con margen
                                    mr="2vw" // Margen derecho
                                    mt="2vh" // Margen superior
                                    mb="2vh" // Margen inferior
                                    bg="red" // Fondo rojo
                                    minWidth="50px" // Ancho mínimo
                                    borderColor="#21282b" // Color del borde
                                    borderRadius="10px" // Borde redondeado
                                    overflow="hidden" // Controla el desbordamiento del contenido
                                    filter="blur(0.5px)" // Aplica un filtro de desenfoque
                                    boxShadow="4px 4px 8px rgba(0, 0, 0, 0.2)" // Sombra de la tarjeta
                                    style={{
                                        background: 'linear-gradient(140deg, #21282b, #1b1b1c)', // Cambia los colores según tus preferencias con gradiente
                                    }}
                                >
                                    <Image src={card.icon} w='100%' h='100%'></Image> {/* Muestra la imagen de trabajo a pantalla completa */}
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

export { Works }
