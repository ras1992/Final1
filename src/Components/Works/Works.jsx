import { React, useState, useEffect } from 'react';
import style from './WorksStyle';
import { ChakraProvider, Box, Text, Flex, Center, Button, Image, Divider } from '@chakra-ui/react';
import translations from '../Languages/Translations';

const Works = ({ currentLanguage }) => {
    const [cardService, setCardService] = useState([]);
    const [showAllCards, setShowAllCards] = useState(false);

    useEffect(() => {
        try {
            fetch('Json/Data.json')
                .then(response => response.json())
                .then(data => setCardService(data[currentLanguage]['works']))
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [currentLanguage]);

    const displayedCards = showAllCards ? cardService : cardService.slice(0, 6);

    return (
        <ChakraProvider>
            <section id="Porfolio">
                <Flex sx={style.body} pt={{ base: '5em', md: '5em' }} pl={{ base: '3vw', md: '5vw' }} flexDirection='column' justifyContent="center" alignItems="">
                    <Flex align="center" flexDirection="column" textAlign="center" mb="4vh">
                        <Text color='red' fontSize="md">{translations[currentLanguage]['AWARD WINNING WORK']}</Text>
                        <Text as="h1" fontWeight="bold" color='white' fontSize={{ base: '40', md: '60' }}>{translations[currentLanguage]['Recent Works']}</Text>
                    </Flex>

                    <Flex flexDirection="column" alignItems="left" pb='5em'>
                        <Flex flexWrap="wrap" justifyContent="center">
                            {displayedCards.map((card, index) => (
                                <Box
                                    key={index}
                                    flex={{ base: "0 0 calc(100% - 4em)", md: "0 0 calc(31% - 16px)" }}
                                    sx={style.cardData}
                                >
                                    <Image src={card.icon} w='100%' h='100%'></Image>
                                </Box>
                            ))}
                        </Flex>

                        {/* Contenedor del botón */}
                        <Flex justifyContent="center" mt="2em">
                            <Button
                                onClick={() => setShowAllCards(!showAllCards)}
                                sx={style.button}
                            >
                                {showAllCards ? `${translations[currentLanguage]['moreNo']}` : `${translations[currentLanguage]['moreYes']}`}
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            </section>
        </ChakraProvider>

    )
}

export { Works }
