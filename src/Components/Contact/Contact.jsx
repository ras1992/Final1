import { React, useState, useEffect } from 'react'; // Importa React, useState y useEffect desde React
import style from './ContactStyle'; // Importa los estilos desde un archivo externo
import { ChakraProvider, Box, Text, Flex, useToast, Button, Image, FormControl, Input, Textarea } from '@chakra-ui/react'; // Importa componentes de Chakra UI

import translations from '../Languages/Translations';
import { useForm, ValidationError } from '@formspree/react';

const Contact = ({ currentLanguage }) => {

    const [cardService, setCardService] = useState([]);
    const [toastMsg, setToastMsg] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });



    useEffect(() => {
        try {
            // Realiza una solicitud fetch para obtener datos desde 'Json/Data.json'
            fetch('Json/Data.json')
                .then(response => response.json())
                .then(data => {
                    setCardService(data[currentLanguage]['contact']);
                    setToastMsg(data[currentLanguage]['toast']);
                });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [currentLanguage]);


    console.log(cardService) 

    const [state, handleSubmit] = useForm("maygpkql");
    const toast = useToast()

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const result = await handleSubmit(e);
          setFormData({
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: '',
          });
          setFormSubmitted(true);
    
          // Llamar a la función toast aquí después de que se envíe el formulario con éxito.
          toast({
            title: toastMsg.title,
            description: toastMsg.description,
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
        
      };

    return (
        <>
            <ChakraProvider>
                <section id="Contact">
                    <form onSubmit={handleFormSubmit}>
                        <Flex sx={style.body}>

                            <Flex sx={style.titleSub}>
                                <Text color='red' fontSize="md">{translations[currentLanguage]['CONTACT']}</Text>
                                <Text sx={style.titleWhite}>{translations[currentLanguage]['Contact With Me']}</Text>
                            </Flex>

                            <Flex justifyContent="space-between" flexDirection={{ base: 'column', md: 'row' }}>


                                <Flex flexDirection="column" flex="0.5" >

                                    {cardService.map((card, index) => (
                                        <Box
                                            key={index}
                                            mb={index === cardService.length - 1 ? '0' : '1.5em'}
                                            sx={style.cardStyle}
                                        >
                                            <Image src={card.icon} w='2em' h='2em' mx="auto" my="auto"></Image>
                                            <Text x="auto" my="auto" color='white'>{card.name}</Text>
                                        </Box>
                                    ))}
                                </Flex>


                                {/* Columna Verde */}
                                <Flex sx={style.cardStyle2}>
                                    <Box

                                        
                                        sx={style.cardBox}
                                    >
                                        <FormControl mb={{ base: '0.5em', md: '0em' }} >
                                            <Input
                                                id="name"
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                placeholder={translations[currentLanguage]['Name']}
                                                sx={style.inputFormat}
                                                onChange={(e) => {
                                                    setFormData({ ...formData, name: e.target.value });
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
                                                value={formData.phone}
                                                placeholder={translations[currentLanguage]['Phone']}
                                                sx={style.inputFormat}
                                                onChange={(e) => {
                                                    setFormData({ ...formData, phone: e.target.value });
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
                                        <FormControl mb={{ base: '0.5em', md: '0em' }}>
                                            <Input
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                placeholder={translations[currentLanguage]['Email']}
                                                sx={style.inputFormat}
                                                onChange={(e) => {
                                                    setFormData({ ...formData, email: e.target.value });
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
                                                value={formData.subject}
                                                placeholder={translations[currentLanguage]['Subject']}
                                                sx={style.inputFormat}
                                                onChange={(e) => {
                                                    setFormData({ ...formData, subject: e.target.value });
                                                }}
                                            />
                                            <ValidationError
                                                prefix="Subject"
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
                                                type="message"
                                                value={formData.message}
                                                placeholder={translations[currentLanguage]['Message']}
                                                sx={{
                                                    ...style.inputFormat,
                                                    width: '100%',
                                                    height: '100%',
                                                    resize: 'none',
                                                }}
                                                onChange={(e) => {
                                                    setFormData({ ...formData, message: e.target.value });
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
                                            type="submit"

                                            sx={style.button}>

                                            {translations[currentLanguage]['Send Message']}

                                            <Image src='/Images/IconContact/enviado-32.png'
                                                sx={style.image} /> </Button>
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
