const style = {
    body: {
        bg: "#282830",
        backgroundImage: "url('Images/test3.jpg')",
        backgroundSize: "18px 18px",
        minHeight: "100vh",
        maxW: '1400px',
        margin: '0 auto',
        mx: 'auto', // Agrega esta línea para centrar horizontalmente
        pt:{ base: '5em', md: '5em' },
        pl:{ base: '3vw', md: '5vw' },
        pr:{ base: '3vw', md: '5vw' },

    },
    cardLineB1: {
        transform: 'translateX(-4px) translateY(3em)',
        width: '10px',
        height: '10px',
        borderRadius: '10px',
        background: '#171818',
    },
    cardLineB2: {
        transform: 'translateX(3px) translateY(3.5px)',
        flexDirection: "row",
        width: '100px',
        position: 'absolute',
        height: '3px',
        background: '#171818',
    },
    cardData: {
        filter: "blur(0.5px)",
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
        bg: "red",
        flex: "1",
        borderColor: "#21282b",
        borderRadius: "10px",
        background: 'linear-gradient(140deg, #21282b, #1b1b1c)',
    },
    cardData2:{
        p:"10",
        bg: "red",
        flex: "1",
        borderColor: "#21282b",
        borderRadius: "10px",
        filter: "blur(0.5px)",
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
        background: 'linear-gradient(140deg, #21282b, #1b1b1c)',
    }

}

export default style;