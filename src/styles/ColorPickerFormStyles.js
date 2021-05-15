import sizes from './sizes'
const styles = {
    picker: {
        width: "100% !important",
        // marginTop: "2rem"
    },
    addColorBtn: {
        width: "100%",
        padding: "1rem",
        marginTop: "1rem",
        fontSize: "1.5rem",
        [sizes.down("xs")]: {
            marginTop: "1rem",
            fontSize: "1.5rem"
        }
    },
    colorNameInput: {
        width: "100%",
        height: "70px",
        marginBottom: "0",
        paddingBottom: "0"
    }
}

export default styles