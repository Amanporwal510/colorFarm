import React, { Component } from 'react'
import classNames from 'classnames';
import {Link} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import {CssBaseline, AppBar, Toolbar,
            Typography, Button, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import PaletteMetaForm from './PaletteMetaForm'
import styles from './styles/PaletteFormNavStyles'


class PaletteFormNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formShowing: false
        }

        this.showForm = this.showForm.bind(this)
        this.hideForm = this.hideForm.bind(this)
    }

    showForm() {
        this.setState({
            formShowing: true
        })
    }
    hideForm() {
        this.setState({
            formShowing: false
        })
    }

    render() {
        const {classes, open, Palettes, handleSavePalette, handleDrawerOpen} = this.props
        const {formShowing} = this.state
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    color="default"
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                    >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                            >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" 
                            color="inherit" noWrap className={classes.heading} >
                            Create a new Palette
                        </Typography>
                    </Toolbar>
                    <div className={classes.navBtns}>
                        <Button 
                            variant="contained" color="primary" 
                            className={classes.btn} onClick={this.showForm}>
                            Save
                        </Button>
                        <Link to='/'>
                            <Button 
                                variant="contained" color="secondary"
                                className={classes.btn} >
                                Go Back
                            </Button>
                        </Link>
                    </div>
                </AppBar>
                { formShowing && <PaletteMetaForm 
                                    Palettes={Palettes}  
                                    handleSavePalette={handleSavePalette}
                                    hideForm={this.hideForm}
                                    />}
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav)