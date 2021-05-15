import sizes from './sizes'
export default {
    Palette: {
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
    },
    PaletteColors: {
        height: "90%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
    },
    goBack: {
        width: "20%",
        height: "50%",
        backgroundColor: "black",
        // margin: "0 auto",
        // display: "inline-block",
        position: "relative",
        cursor: "pointer",
        // marginBottom: "-3.5px",
        opacity: "1",
        "& a": {
            color: "white",
            width: "100px",
            height: "30px",
            display: "inline-block",
            position: "absolute",
            top: "50%",
            left: "50%",
            marginLeft: "-50px",
            marginTop: "-15px",
            outline: "none",
            border: "none",
            background: "rgba(255, 255, 255, 0.3)",
            textAlign: "center",
            fontSize: "1rem",
            lineHeight: "30px",
            textTransform: "uppercase",
            cursor: "pointer",
            textDecoration: "none",
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "33.33333%"
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "20%"
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: "10%"
        },

    }
}