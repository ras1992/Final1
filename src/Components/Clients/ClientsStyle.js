const style={
    body: {
        bg: "#282830",
        backgroundImage: "url('Images/test3.jpg')",
        backgroundSize: "18px 18px",
        minHeight: "100vh",
        maxW:'1400px',
        margin: '0 auto',
        mx: 'auto', // Agrega esta línea para centrar horizontalmente
    },
    
    cardStyle: {
        p: "10px",
        flex: { base: "0 0 calc(50% - 16px)", md: "0 0 calc(22% - 16px)" },
        mr: "2vw",
        mt: "2vh",
        mb: "2vh",
        bg: "red",
        h: "10em",
        minWidth: "em", // Esto parece incorrecto, debe ser un valor numérico ej. "10em"
        borderColor: "#21282b",
        borderRadius: "10px",
        overflow: "hidden",
        filter: "blur(0.5px)",
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
        background: 'linear-gradient(140deg, #21282b, #1b1b1c)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    

}

export default style;