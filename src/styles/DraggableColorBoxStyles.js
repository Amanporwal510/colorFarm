import chroma from 'chroma-js'
import sizes from "./sizes"

const styles = {
    root: {
        width: "20%",
        height: "25%",
        // margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-5.5px",
        "&:hover button": {
            opacity: "1",
            transition: "0.5s"
        },
        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "20%"
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "10%"
        },
        [sizes.down("sm")]: {
            width: "100%",
            height: "5%"
        }
    },
    boxContent: {
        width: "100%",
        position: "absolute",
        left: "0",
        bottom: "0",
        textTransform: "uppercase",
        padding: "10px",
        letterSpacing: "1px",
        color: props => chroma(props.color).luminance() <= 0.08 ? "white" : "black",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
        [sizes.down("sm")]: {
            padding: "0 10px"
        }
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out"
    }
}

export default styles