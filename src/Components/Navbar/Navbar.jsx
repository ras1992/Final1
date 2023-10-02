import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, Flex, Link, Spacer, WrapItem, Button, Stack, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack } from '@chakra-ui/react';
import style from './NavbarStyles';


import translations from '../Languages/Translations';
import LanguageDropdown from '../Languages/LanguageDropdown';

const Navbar = ({ currentLanguage, onChangeLanguage }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const pdfLink = '/bumeran_kuspita-Ramiro_CV.pdf';
    //const pdfLink ="https://storage.googleapis.com/jc-prod-storage-applicant-service-cv-pdf-temp/bumeran_1054104160_3902378752275781773.pdf?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=applications%40jc-prod-api.iam.gserviceaccount.com%2F20231001%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231001T165545Z&X-Goog-Expires=1800&X-Goog-SignedHeaders=host&X-Goog-Signature=1512d42254d959b93a0a12c4acebdae65cd1f5fbd7a99e6544fdc3270924cdd925ad314e6a0fc9f61b0d94590bdd406f0e3e57deb6d0e24a7c886cd41d4675b22a3a14d606a403ca7c149e584bb313bafb520ed06360afeb19f2bc435e5493157bc4a935a5fbf751de0e8601b4fd61f7b79807e525c887e492835a8676928faf8c0bf243c95dbe199cf12291a7114ba9f793f1d6cd2b1619c01f8d8e70ac0cee4dc08daf480677e8600abac9bb72134fab2165a0cdb2383e7911a68a03de9862e2b6ab2e8b6ce8df34786fff65b64e0d40690db73ff3df0c710e20b2d89a799c5a12b299ebc2529257b1553075aabe15066f05cb2d4168be30d4aa0eb72a794f"

    return (
        <>
            <ChakraProvider>
                <Box sx={style.body}
                    position="fixed" top="0" left="0" right="0" zIndex="3">
                    <Stack direction="row" sx={{ spacing: "4", align: "center", ml: "1vw", mt: "0.5em" }} display={{ base: 'flex', lg: 'none' }}>
                        <Link href="#" style={style.linksMenu} sx={{ color: 'white', fontWeight: 'bold', ml: '1vh', fontSize: '20', display: 'flex', alignItems: 'center' }}>
                            <img src='vite.png' alt='Logo' width='20px' height='10px' style={{ mr: '0.5rem', ml: '0.5rem' }} />
                            {translations[currentLanguage]['FORSTR']}
                        </Link>
                        <Spacer />
                        <Button onClick={toggleDrawer} variant="outline" colorScheme="red" size="sm"
                            sx={style.buttonMenu}>
                            {translations[currentLanguage]['Menu']}
                        </Button>
                    </Stack>

                    <Flex pt="" ml="5vw" alignItems="center" display={{ base: 'none', lg: 'flex' }}>
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
                            <Button as="a" href={pdfLink} backgroundColor="#d03049" sx={{
                                borderRadius: 8, mr: '5vw', '&:hover': { borderColor: '#303134', bg: '#303134' },
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
