import React from 'react';
import { Link, HStack, Box } from '@chakra-ui/react'; // Importa el componente Box desde Chakra UI

import linkedin from '/Images/Social/icons8-linkedin.svg';
import gmail from '/Images/Social/icons8-gmail.svg';
import github from '/Images/Social/icons8-github.svg';

const Redes = () => {
    const Icono = ({ src }) => {
        return (
            <Box
                bg="#1d1e24" // Fondo negro
                borderRadius="md" // Borde redondeado
                p={3} // Relleno interno
                mx={1} // Margen horizontal
                display="inline-block" // Mostrar en línea
            >
                <img src={src} alt="Icono" width={20} height={10} /> {/* Muestra la imagen */}
            </Box>
        );
    }
    // Crea la URL para abrir una nueva ventana de redacción de correo en Gmail
    const emailLink = `https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZdjtdrPjjfMlrrQXlflXwSqKpTrNBGGMVdHTNvkDhgLWQsPpvVPCbHZDsKmHnwccxJRzL`;

    const handleClick = () => {
        // Abre la URL en una nueva ventana o pestaña del navegador
        window.open(emailLink);
    }
    return (
        <HStack spacing={2}>
            <Link onClick={handleClick}>
                <Icono src={gmail} />
            </Link>
            <Link href="https://www.linkedin.com/in/ramiro-kuspita-969014151" target="_blank">
                <Icono src={linkedin} />
            </Link>
            <Link href="https://github.com/ras1992" target="_blank">
                <Icono src={github} />
            </Link>
        </HStack>
    )
}

export { Redes }
