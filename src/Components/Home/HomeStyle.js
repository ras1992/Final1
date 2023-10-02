const style = {
    letraRara: {
        fontFamily: 'Lobster Two, cursive',
    },
    body: {
        bg: "#282830",
        backgroundImage: "url('Images/test3.jpg')",
        backgroundSize: "8px 8px",
        maxW: '1400px',
        margin: '0 auto',
        mx: 'auto', // Agrega esta línea para centrar horizontalmente
        pb: '3em',
        pt: '3em',
        pr: '1.5vw'
    },
    box: {
        bgColor: "#1b1b26",
        borderRadius: "15px",
        position: "relative",
        w: "100%",
        maxW: { base: '39em', md: '39em' },
        h: { base: '34em', md: '34em' },
        maxHeight: { base: '34em', md: 'none' },
    },
    image: {
        position: "relative",
        w: "100%",
        h: "700",
        left: "0",
        zIndex: 1,
        filter: "auto",
        brightness: "90%",
        contrast: "120%",
        pl: { base: '1vh', md: '2vw' },
        pr: { base: '1vh', md: '2vw' },
        top: { base: '-10em', md: '-10em' },
    },


}

export default style;