import {DRAWER_WIDTH} from '../Constants'
import sizes from './sizes'
const drawerWidth = DRAWER_WIDTH

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    alignItems: "center",
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'center',
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    width: "80%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  buttons: {
    width: "100%",
    [sizes.down("xs")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: "1rem",
    }
  },
  button: {
      width: "50%",
      [sizes.down("xs")]: {
        width: "45%",
        fontSize: "1rem",
        margin: "0.1rem"
      }
  },
  heading: {
    flexGrow: "1",
    fontWeight: "bold"
  }
})

export default styles