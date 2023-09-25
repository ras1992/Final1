import { React, useState, useEffect } from 'react'; // Importa React, useState y useEffect desde React
import style from './ResumeStyle'; // Importa los estilos desde un archivo externo
import { ChakraProvider, Box, Text, Flex, Center, Button, Image } from '@chakra-ui/react'; // Importa componentes de Chakra UI

import translations from '../Languages/Translations';

const Resume = ({currentLanguage}) => {

    const [cardServiceEd, setCardServiceEd] = useState([]); // Define un estado para almacenar la información de las tarjetas de trabajo

    useEffect(() => {
        try {
            // Realiza una solicitud fetch para obtener datos desde 'Json/Data.json'
            fetch('Json/Data.json')
                .then(response => response.json()) // Convierte la respuesta a formato JSON
                .then(data => setCardServiceEd(data[currentLanguage]['resumeEducation'])) // Almacena los datos de trabajo en el estado

        } catch (error) {
            console.error('Error fetching data:', error) // Manejo de errores en caso de falla en la solicitud
        }

    }, [currentLanguage]);

    console.log(cardServiceEd) // Muestra en la consola la información de las tarjetas de trabajo

    const [cardServiceEx, setCardServiceEx] = useState([]); // Define un estado para almacenar la información de las tarjetas de trabajo

    useEffect(() => {
        try {
            // Realiza una solicitud fetch para obtener datos desde 'Json/Data.json'
            fetch('Json/Data.json')
                .then(response => response.json()) // Convierte la respuesta a formato JSON
                .then(data => setCardServiceEx(data[currentLanguage]['resumeExperience'])) // Almacena los datos de trabajo en el estado

        } catch (error) {
            console.error('Error fetching data:', error) // Manejo de errores en caso de falla en la solicitud
        }

    }, [currentLanguage]);

    console.log(cardServiceEx) // Muestra en la consola la información de las tarjetas de trabajo

    return (
        <>
            <ChakraProvider>
                <section id="Resume">
                    <Flex sx={style.body} pt={{ base: '5em', md: '5em' }} pl={{ base: '3vw', md: '5vw' }} pr={{ base: '3vw', md: '5vw' }} flexDirection='column' >
                        <Flex align="center" flexDirection="column" textAlign="center" mb="4vh">
                            <Text color='red' fontSize="md">{translations[currentLanguage]['YEARS OF EXPERIENCE']}</Text>
                            <Text as="h1" fontWeight="bold" color='white' fontSize="60">{translations[currentLanguage]['My Resume']}</Text>
                        </Flex>
                        <Box >
                            <Flex flexDirection={{ base: 'column', md: 'row' }} paddingX={4} pb='5em'>
                                {/* Columna Roja */}

                                <Flex flexDirection="column" flex="1" p={4}>
                                    <Flex align="left" flexDirection="column" textAlign="left" mb="4vh" ml='.1em' >
                                        <Text as='h2' color='WHITE' >{translations[currentLanguage]['Job Experience']}</Text>
                                        <Text color='red' fontSize="15">2017 - 2023</Text>
                                    </Flex>
                                    {cardServiceEx.map((card, index) => (
                                        <Flex key={index} alignItems='stretch'>
                                            {index >= 0 &&
                                                <Flex bg='black' flexDirection="column" mr={4}>
                                                    <Box style={{
                                                        width: '3px',
                                                        height: '100%',
                                                        background: '#171818',
                                                    }}>

                                                        <Box
                                                            style={{
                                                                transform: 'translateX(-4px) translateY(3em)',
                                                                width: '10px',
                                                                height: '10px',
                                                                borderRadius: '10px',
                                                                background: '#171818',
                                                            }}
                                                        >
                                                            <Box style={{
                                                                transform: 'translateX(3px) translateY(3.5px)',
                                                                flexDirection: "row",
                                                                width: '100px',
                                                                position: 'absolute',
                                                                height: '3px',
                                                                background: '#171818',
                                                            }}></Box>
                                                        </Box>
                                                    </Box>


                                                </Flex>
                                            }
                                            <Box
                                                key={index}
                                                p="10"
                                                mb={index === cardServiceEx.length - 1 ? '0' : '2vh'}
                                                bg="red"
                                                flex="1"
                                                borderColor="#21282b"
                                                borderRadius="10px"
                                                filter="blur(0.5px)"
                                                boxShadow="4px 4px 8px rgba(0, 0, 0, 0.2)"
                                                style={{
                                                    background: 'linear-gradient(140deg, #21282b, #1b1b1c)',
                                                }}
                                            >
                                                <Text fontSize="4xl" color={(card.name) === 'Desempleado' || (card.name) === 'Unemployed' ? 'red.400' : 'white'} mt='-1.5vh' >
                                                    {card.name}
                                                </Text>
                                                <Text color="#71777c" fontSize="18px">
                                                    {card.company} ({card.date})
                                                </Text>
                                                <Text color="#71777c" fontSize="15px">
                                                    {card.details}
                                                </Text>
                                                <Text  mt='-1em' fontSize="xl" color={(card.status) === 'Freelancer' ? 'green.300' : 'orange.300'}>
                                                    {card.status}
                                                </Text>
                                            </Box>
                                        </Flex>
                                    ))}
                                </Flex>


                                {/* Columna Verde */}
                                <Flex flexDirection="column" flex="1" p={4}>
                                    <Flex align="left" flexDirection="column" textAlign="left" mb="4vh" ml='.1em'>
                                        <Text as='h2' color='WHITE' >{translations[currentLanguage]['Education Quality']}</Text>
                                        <Text color='red' fontSize="15">2004 - 2023</Text>
                                    </Flex>
                                    {cardServiceEd.map((card, index) => (
                                        <Flex key={index} alignItems='stretch'>
                                            {index >= 0 &&
                                                <Flex bg='black' alignItems="center" flexDirection="column" mr={4}>
                                                    <Box style={{
                                                        width: '3px',
                                                        height: '100%',
                                                        background: '#171818',
                                                    }}>

                                                        <Box
                                                            style={{
                                                                transform: 'translateX(-4px) translateY(3em)',
                                                                width: '10px',
                                                                height: '10px',
                                                                borderRadius: '10px',
                                                                background: '#171818',
                                                            }}
                                                        >
                                                            <Box style={{
                                                                transform: 'translateX(3px) translateY(3.5px)',
                                                                flexDirection: "row",
                                                                width: '100px',
                                                                position: 'absolute',
                                                                height: '3px',
                                                                background: '#171818',
                                                            }}></Box>
                                                        </Box>
                                                    </Box>


                                                </Flex>
                                            }
                                            <Box
                                                key={index}
                                                p="10"
                                                mb={index === cardServiceEd.length - 1 ? '0' : '2vh'}
                                                bg="red"
                                                flex="1"
                                                borderColor="#21282b"
                                                borderRadius="10px"
                                                filter="blur(0.5px)"
                                                boxShadow="4px 4px 8px rgba(0, 0, 0, 0.2)"
                                                style={{
                                                    background: 'linear-gradient(140deg, #21282b, #1b1b1c)',
                                                }}
                                            >
                                                <Text fontSize="4xl" color="white" mt='-1.5vh'>
                                                    {card.name}
                                                </Text>
                                                <Text color="#71777c" mt='-1.2em' fontSize="15px">
                                                    {card.study} ({card.date})
                                                </Text>
                                                <Text color="#71777c" fontSize="15px">
                                                    {card.modality}
                                                </Text>
                                                <Text  mt='-1em' fontSize="xl" color={(card.status) === 'Graduado' || (card.status) === 'Graduated' ? 'green.300' : (card.status) === 'Abandonado' || (card.status) === 'Dropped Out' ? 'red.400' : 'orange.300'}>
                                                    {card.status}
                                                </Text>
                                            </Box>
                                        </Flex>
                                    ))}
                                </Flex>
                            </Flex>
                        </Box>

                    </Flex>
                </section>
            </ChakraProvider>

        </>
    )
}

export { Resume }
