const style = {
    body: {
        bg: "#282830",
        backgroundImage: "url('Images/test3.jpg')",
        backgroundSize: "18px 18px",
        minHeight: "100vh",
        maxW: '1400px',
        margin: '0 auto',
        mx: 'auto',
        pb: '3em',
        pt: { base: '5em', md: '5em' },
        pl: { base: '3vw', md: '5vw' },
        pr: { base: '3vw', md: '5vw' },
        flexDirection: 'column'
    },
    cardStyle: {
        p: "1em",
        minW: '20em',
        bg: "red",
        borderColor: "#21282b",
        borderRadius: "10px",
        overflow: "hidden",
        filter: "blur(0.5px)",
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",

        background: "linear-gradient(140deg, #21282b, #1b1b1c)",
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '8em',
    },
    cardStyle2: {
        flexDirection: 'column',
        bg: 'green',
        borderRadius: "10px",
        p: 9,
        pt: 12,
        mt: { base: '1.5em', md: '0' },
        mb: { base: '1.5em', md: '0' },
        ml: { base: '0', md: '1.5em' },
        w: '100%',
        overflow: "hidden",
        background: "linear-gradient(140deg, #21282b, #1b1b1c)",
        boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.5)",
        display: 'flex',
        justifyContent: 'center',
    },
    inputFormat: {
        color: 'white',
        bg: '#171818',
        alignContent: 'center',
        borderColor: '#171818',

        '&:hover': {
            borderColor: '#303134', // Cambia el color de borde en hover
        },
        '&:focus': {
            outline: 'none !important', // Elimina el resaltado al hacer clic
            borderColor: '#303134', // Puedes ajustar el color del borde en foco
            boxShadow: 'none', // Elimina la sombra en foco
        },
    },
    button: {
        bg: '#171818',
        color: '#747f95',
        '&:hover': {
            borderColor: '#303134',
            bg: '#303134'
        },
    },
    image: {
        ml: '1',
        textAlign: 'center',
        alignItems: 'center',
        h: '5',
    },
    titleSub: {
        align: "center",
        flexDirection: "column",
        textAlign: "center",
        mb: "4vh"
    },
    titleWhite: {
        as: "h1",
        fontWeight: "bold",
        color: 'white',
        fontSize: "60"
    },
    cardBox: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: { base: 'column', md: 'row' }
    }


}

export default style;