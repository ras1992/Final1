import React, { useState } from 'react';
import { ChakraProvider, Box, Flex, Link, Spacer, WrapItem, Button, Stack, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack } from '@chakra-ui/react';
import style from './NavbarStyles';

import translations from '../Languages/Translations';
import LanguageDropdown from '../Languages/LanguageDropdown';

const Navbar = ({ currentLanguage, onChangeLanguage }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <ChakraProvider>
                <Box sx={style.body} 
                position="fixed"top="0" left="0" right="0" zIndex="3">
                    <Stack direction="row" spacing="4" align="center" ml="1vw" mt="0.5em" display={{ base: 'flex', lg: 'none' }}>
                        <Link href="#" style={style.linksMenu} sx={{ color: 'white', fontWeight: 'bold', ml: '1vh', fontSize: '20', display: 'flex', alignItems: 'center' }}>
                        <img src='vite.png' alt='Logo' width='20px' height='10px' style={{ marginRight: '0.5rem' }} />
                            {translations[currentLanguage]['FORSTR']}
                        </Link>
                        <Spacer />
                        <Button onClick={toggleDrawer} variant="outline" colorScheme="red" size="sm"
                            sx={{
                                borderRadius: 30,
                                mr: '3vh',
                                _hover: {
                                    color: 'white',
                                    bg: 'red.800',
                                    borderBlockColor: 'red',
                                    borderColor: 'red'
                                },
                            }}>
                            {translations[currentLanguage]['Menu']}
                        </Button>
                    </Stack>

                    <Flex pt="1" ml="5vw" alignItems="center" textAlign='' display={{ base: 'none', lg: 'flex' }}>
                        <Link href="#" sx={{ color: 'white', fontWeight: 'bold', fontSize: '20' }} style={style.links}>
                            <Flex>
                                <img src='vite.png' alt='Logo' width='30px' height='10px' style={{ marginRight: '0.5rem' }}></img>
                                {translations[currentLanguage]['FORSTR']}
                            </Flex>
                        </Link>
                        <Spacer />
                        <Flex ml='-5vw'>
                            <Link href="#" sx={style.links} >
                                {translations[currentLanguage]['HOME']}
                            </Link>
                            <Link href="#Service" sx={style.links}>
                                {translations[currentLanguage]['SERVICES']}
                            </Link>
                            <Link href="#Porfolio" sx={style.links}>
                                {translations[currentLanguage]['PORFOLIO']}
                            </Link>
                            <Link href="#Resume" sx={style.links}>
                                {translations[currentLanguage]['RESUME']}
                            </Link>
                            <Link href="#Contact" sx={style.links}>
                                {translations[currentLanguage]['CONTACT']}
                            </Link>

                            <Box sx={style.links2}>
                                <LanguageDropdown currentLanguage={currentLanguage} onChangeLanguage={onChangeLanguage} />
                            </Box>
                            
                            
                        </Flex>
                        <Spacer />
                        <WrapItem>
                            <Button backgroundColor="#d03049" sx={{ borderRadius: 30, mr: '5vw','&:hover': { borderColor: '#303134', bg: '#303134' },
                                    }} color='white'>{translations[currentLanguage]['DOWNLOAD CV']}</Button>
                        </WrapItem>
                    </Flex>
                </Box>

                <Drawer placement="right" onClose={toggleDrawer} isOpen={isDrawerOpen}>
                    <DrawerOverlay />
                    <DrawerContent sx={style.menu}>
                        <DrawerCloseButton sx={{
                            color: '#d03049',
                            fontWeight: 'bold',
                        }} />
                        <DrawerHeader color='White'>{translations[currentLanguage]['Menu']} </DrawerHeader>
                        <DrawerBody>
                            <VStack spacing={4}>
                                <Link href="#" sx={style.linksMenu}>
                                    {translations[currentLanguage]['HOME']}
                                </Link>
                                <Link href="#Service" sx={style.linksMenu}>
                                    {translations[currentLanguage]['SERVICES']}
                                </Link>
                                <Link href="#Porfolio" sx={style.linksMenu}>
                                    {translations[currentLanguage]['PORFOLIO']}
                                </Link>
                                <Link href="#Resume" sx={style.linksMenu}>
                                    {translations[currentLanguage]['RESUME']}
                                </Link>
                                <Link href="#Contact" sx={style.linksMenu}>
                                    {translations[currentLanguage]['CONTACT']}
                                </Link>
                                <Box sx={style.links2} mb='2'>
                                    <LanguageDropdown currentLanguage={currentLanguage} onChangeLanguage={onChangeLanguage} />
                                </Box>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </ChakraProvider>
        </>
    )
}

export { Navbar }
