import {DRAWER_WIDTH} from '../Constants'
import sizes from './sizes'
const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "64px"
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    navBtns: {
        marginRight: "1rem",
        "& a": {
            textDecoration: "none"
        },
        [sizes.down("xs")]: {
            marginRight: "0.5rem"
        }
    },
    btn: {
        margin: "0 0.5rem",
        [sizes.down("xs")]: {
            margin: "0.1rem",
            padding: "0.2rem"
        }
    },
    heading: {
        [sizes.down("xs")]: {
            fontSize: "1rem",
            marginLeft: "-1rem"
        }
    }
})

export default styles