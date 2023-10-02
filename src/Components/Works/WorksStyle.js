const style = {
    body: {
        bg: "#282830",
        backgroundImage: "url('Images/test3.jpg')",
        backgroundSize: "18px 18px",
        minHeight: "100vh",
        maxW: '1400px',
        margin: '0 auto',
        mx: 'auto'
    },
    cardData: {
        p: "10",
        mr: "2vw",
        mt: "2vh",
        mb: "2vh",
        bg: "red",
        minWidth: "50px",
        borderColor: "#21282b",
        borderRadius: "10px",
        overflow: "hidden",
        filter: "blur(0.5px)",
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
        background: 'linear-gradient(140deg, #21282b, #1b1b1c)'
    },
    button: {
        bg: '#171818',
        color: '#747f95',
        textAlign: "center",
        display: "block",
        maxWidth: "100%",
        '&:hover': {
            borderColor: '#303134',
            bg: '#303134'
        },
    }
}

export default style;