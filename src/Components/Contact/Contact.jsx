import { React, useState, useEffect } from 'react'; // Importa React, useState y useEffect desde React
import style from './ContactStyle'; // Importa los estilos desde un archivo externo
import { ChakraProvider, Box, Text, Flex, useToast, Button, Image, FormControl, Input, Textarea } from '@chakra-ui/react'; // Importa componentes de Chakra UI

import translations from '../Languages/Translations';
import { useForm, ValidationError } from '@formspree/react';

const Contact = ({ currentLanguage }) => {

    const [cardService, setCardService] = useState([]);
    const [toastMsg, setToastMsg] = useState([]);

    useEffect(() => {
        try {
            // Realiza una solicitud fetch para obtener datos desde 'Json/Data.json'
            fetch('Json/Data.json')
                .then(response => response.json()) // Convierte la respuesta a formato JSON
                .then(data => {
                    setCardService(data[currentLanguage]['contact']);
                    setToastMsg(data[currentLanguage]['toast']);
                }) // Almacena los datos de trabajo en el estado

        } catch (error) {
            console.error('Error fetching data:', error) // Manejo de errores en caso de falla en la solicitud
        }

    }, []);

    console.log(cardService) // Muestra en la consola la información de las tarjetas de trabajo

    const [state, handleSubmit] = useForm("maygpkql");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    const toast = useToast()


    return (
        <>
            <ChakraProvider>
                <section id="Contact">
                    <form onSubmit={handleSubmit}>
                        <Flex sx={style.body} pt={{ base: '5em', md: '5em' }} pl={{ base: '3vw', md: '5vw' }} pr={{ base: '3vw', md: '5vw' }} flexDirection='column' >

                            <Flex align="center" flexDirection="column" textAlign="center" mb="4vh">
                                <Text color='red' fontSize="md">{translations[currentLanguage]['CONTACT']}</Text>
                                <Text as="h1" fontWeight="bold" color='white' fontSize="60">{translations[currentLanguage]['Contact With Me']}</Text>
                            </Flex>

                            <Flex justifyContent="space-between" flexDirection={{ base: 'column', md: 'row' }}>
                                {/* Columna Roja */}

                                <Flex flexDirection="column" flex="0.5" >

                                    {cardService.map((card, index) => (
                                        <Box
                                            key={index}
                                            p="1em"
                                            mb={index === cardService.length - 1 ? '0' : '1.5em'} // Aplica '0' para el último elemento, '1.5em' para los demás
                                            minW='20em'
                                            bg="red"
                                            borderColor="#21282b"
                                            borderRadius="10px"
                                            overflow="hidden"
                                            filter="blur(0.5px)"
                                            boxShadow="4px 4px 8px rgba(0, 0, 0, 0.5)"
                                            style={{
                                                background: 'linear-gradient(140deg, #21282b, #1b1b1c)',
                                                textAlign: 'center',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                height: '8em',

                                            }}
                                        >
                                            <Image src={card.icon} w='2em' h='2em' mx="auto" my="auto"></Image>
                                            <Text x="auto" my="auto" color='white'>{card.name}</Text>
                                        </Box>
                                    ))}
                                </Flex>


                                {/* Columna Verde */}
                                <Flex
                                    flexDirection='column' // Cambia la dirección de la flexión en pantallas más grandes
                                    bg='green'
                                    borderRadius="10px"
                                    p={9}
                                    pt={12}
                                    mt={{ base: '1.5em', md: '0' }}
                                    mb={{ base: '1.5em', md: '0' }}
                                    ml={{ base: '0', md: '1.5em' }}
                                    w='100%'


                                    overflow="hidden"
                                    style={{
                                        background: 'linear-gradient(140deg, #21282b, #1b1b1c)',
                                        boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.5)",
                                        display: 'flex',
                                        justifyContent: 'center', // Centra horizontalmente
                                    }}
                                >
                                    <Box

                                        flexDirection={{ base: 'column', md: 'row' }}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center', // Centra horizontalmente
                                        }}
                                    >
                                        <FormControl mb={{ base: '1em', md: '0em' }} >
                                            <Input
                                                id="name"
                                                type="text"
                                                name="name"
                                                color='white'
                                                bg='#171818'
                                                alignContent='center'
                                                borderColor='#171818'
                                                placeholder={translations[currentLanguage]['Name']}
                                                sx={{
                                                    ...style.textPlaceholder,

                                                    '&:hover': {
                                                        borderColor: '#303134', // Cambia el color de borde en hover
                                                    },
                                                    '&:focus': {
                                                        outline: 'none !important', // Elimina el resaltado al hacer clic
                                                        borderColor: '#303134', // Puedes ajustar el color del borde en foco
                                                        boxShadow: 'none', // Elimina la sombra en foco
                                                    },
                                                }}
                                            />
                                            <ValidationError
                                                prefix="Name"
                                                field="name"
                                                errors={state.errors}
                                            />
                                        </FormControl>
                                        <FormControl ml={{ base: '0', md: '1.5em' }} mb={{ base: '0.5em', md: '1.2em' }}>
                                            <Input
                                                id="phone"
                                                type="phone"
                                                name="phone"
                                                color='white'
                                                bg='#171818'
                                                alignContent='center'
                                                borderColor='#171818'
                                                placeholder={translations[currentLanguage]['Phone']}
                                                sx={{
                                                    ...style.textPlaceholder,

                                                    '&:hover': {
                                                        borderColor: '#303134', // Cambia el color de borde en hover
                                                    },
                                                    '&:focus': {
                                                        outline: 'none !important', // Elimina el resaltado al hacer clic
                                                        borderColor: '#303134', // Puedes ajustar el color del borde en foco
                                                        boxShadow: 'none', // Elimina la sombra en foco
                                                    },
                                                }}
                                            />
                                            <ValidationError
                                                prefix="Phone"
                                                field="phone"
                                                errors={state.errors}
                                            />
                                        </FormControl>
                                    </Box>

                                    <Box

                                        flexDirection={{ base: 'column', md: 'row' }}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center', // Centra horizontalmente
                                        }}
                                    >
                                        <FormControl mb={{ base: '1em', md: '0em' }}>
                                            <Input
                                                id="email"
                                                type="email"
                                                name="email"
                                                color='white'
                                                bg='#171818'
                                                alignContent='center'
                                                borderColor='#171818'
                                                placeholder={translations[currentLanguage]['Email']}
                                                sx={{
                                                    ...style.textPlaceholder,

                                                    '&:hover': {
                                                        borderColor: '#303134', // Cambia el color de borde en hover
                                                    },
                                                    '&:focus': {
                                                        outline: 'none !important', // Elimina el resaltado al hacer clic
                                                        borderColor: '#303134', // Puedes ajustar el color del borde en foco
                                                        boxShadow: 'none', // Elimina la sombra en foco
                                                    },
                                                }}
                                            />
                                            <ValidationError
                                                prefix="Email"
                                                field="email"
                                                errors={state.errors}
                                            />
                                        </FormControl>

                                        <FormControl ml={{ base: '0', md: '1.5em' }} mb={{ base: '0.5em', md: '1.2em' }}>
                                            <Input
                                                id="subject"
                                                type="text"
                                                name="subject"
                                                color='white'
                                                bg='#171818'
                                                alignContent='center'
                                                borderColor='#171818'
                                                placeholder={translations[currentLanguage]['Subject']}
                                                sx={{
                                                    ...style.textPlaceholder,

                                                    '&:hover': {
                                                        borderColor: '#303134', // Cambia el color de borde en hover
                                                    },
                                                    '&:focus': {
                                                        outline: 'none !important', // Elimina el resaltado al hacer clic
                                                        borderColor: '#303134', // Puedes ajustar el color del borde en foco
                                                        boxShadow: 'none', // Elimina la sombra en foco
                                                    },
                                                }}
                                            />
                                            <ValidationError
                                                prefix="subject"
                                                field="subject"
                                                errors={state.errors}
                                            />
                                        </FormControl>
                                    </Box>

                                    <Box
                                        style={{
                                            display: 'flex',
                                            height: '100%', // Altura al 100%
                                            width: '100%'
                                        }}
                                    >
                                        <FormControl sx={{ width: '100%' }}>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                bg='#171818'
                                                borderColor='#171818'
                                                color='white'
                                                type="message"
                                                placeholder={translations[currentLanguage]['Message']}
                                                textAlign='left' // Alinea el texto a la izquierda
                                                sx={{
                                                    ...style.textPlaceholder,
                                                    width: '100%', // Ancho al 100%
                                                    height: '100%', // Altura al 100%
                                                    '&:hover': {
                                                        borderColor: '#303134', // Cambia el color de fondo en hover
                                                    },
                                                    '&:focus': {
                                                        outline: 'none !important', // Elimina el resaltado al hacer clic
                                                        borderColor: '#303134', // Puedes ajustar el color del borde en foco
                                                        boxShadow: 'none', // Elimina la sombra en foco
                                                    },
                                                    resize: 'none',
                                                }}
                                            />
                                            <ValidationError
                                                prefix="Message"
                                                field="message"
                                                errors={state.errors}
                                            />
                                        </FormControl>
                                    </Box>
                                    <Box mt='4' textAlign='center' alignItems='center' >
                                        <Button
                                            onClick={() =>
                                                toast({
                                                title: toastMsg.title,
                                                description: toastMsg.description,
                                                status: 'success',
                                                duration: 9000,
                                                isClosable: true,
                                                })
                                            }

                                            type="submit"
                                            bg='#171818'
                                            color='#567f95'
                                            sx={{
                                                '&:hover': {
                                                    borderColor: '#303134',
                                                    bg: '#303134'
                                                },
                                            }}>

                                            {translations[currentLanguage]['Send Message']}

                                            <Image
                                                ml='1'
                                                textAlign='center'
                                                alignItems='center'
                                                src='./Images/iconContact/enviado-32.png'
                                                h='5' /> </Button>
                                    </Box>
                                </Flex>
                            </Flex>
                        </Flex>
                    </form>
                </section>
                {/* <ContactForm></ContactForm> */}
            </ChakraProvider>
        </>
    )
}

export { Contact }
