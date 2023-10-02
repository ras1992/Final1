const style = {
    letraRara: {
        fontFamily: 'Lobster Two, cursive',
    },

    body: {
        bg: "#282830",
        backgroundImage: "url('Images/test3.jpg')",
        backgroundSize: "8px 8px",
        minHeight: "5vh",
        pt: '0.6vh',
        maxW: '1400px',
        margin: '0 auto',
        //borderTopLeftRadius: '50px',
        //borderTopRightRadius: '50px',
    },

    menu: {
        bg: "#282830",
        backgroundImage: "url('Images/test3.jpg')",
        backgroundSize: "8px 8px",
        minHeight: "6vh",
        pt: '1.5vh',
        maxW: '15em',
        maxH: '20em',
        borderRadius: '8px',
    },


    links: {
        color: '#bac5d5',
        ml: '4vh',
        textDecoration: 'none', // Quítale el subrayado
        transition: 'border-bottom 0.5s', // Agrega una transición para suavizar el cambio al pasar el mouse
        position: 'relative',
        _hover: {
            color: 'white', // Cambia el color al pasar el mouse
            _after: {
                content: '". . ."',
                textAlign: 'center',
                position: 'absolute',
                bottom: '8px', // Ajusta la posición vertical de los puntos
                left: '0',
                right: '0',
                height: '2px', // Establece el tamaño de la línea de puntos
                color: 'white'
            },
        },
    },

    links2: {
        bg: 'none',
        color: '#bac5d5',
        ml: '4vh',
        textDecoration: 'none', // Quítale el subrayado
        transition: 'border-bottom 0.5s', // Agrega una transición para suavizar el cambio al pasar el mouse
        position: 'relative',
        _hover: {
            color: 'white', // Cambia el color al pasar el mouse
        },
    },

    linksMenu: {
        color: '#bac5d5',
        ml: '4vh',
        textDecoration: 'none', // Quítale el subrayado
        transition: 'border-bottom 0.7s', // Agrega una transición para suavizar el cambio al pasar el mouse
        position: 'relative',
        _hover: {
            color: 'white', // Cambia el color al pasar el mouse
            _after: {
                content: '". . ."',
                textAlign: 'center',
                position: 'absolute',
                bottom: '8px', // Ajusta la posición vertical de los puntos
                left: '0',
                right: '0',
                height: '2px', // Establece el tamaño de la línea de puntos
                color: 'white'
            },
        },
    },
    buttonMenu: {
        borderRadius: 8,
        mr: '3vh',
        _hover: {
            color: 'white',
            bg: 'red.800',
            borderBlockColor: 'red',
            borderColor: 'red'
        },
    }

}
export default style;