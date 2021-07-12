import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {Link} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { Dialog, DialogTitle, List, Avatar,
    ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import {Check, Close} from '@material-ui/icons';
import { blue, red } from '@material-ui/core/colors';
import Minipalette from './Minipalette'
import styles from './styles/PaletteListStyles'

class PaletteList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openDeleteDialog: false,
            deletePaletteId: ""
        }
        this.openDeleteDialog = this.openDeleteDialog.bind(this)
        this.closeDeleteDialog = this.closeDeleteDialog.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.goToPalette = this.goToPalette.bind(this)
    }

    openDeleteDialog(id) {
        this.setState({openDeleteDialog: true, deletePaletteId: id})
    }
    closeDeleteDialog() {
        this.setState({openDeleteDialog: false, deletePaletteId: ""})
    }

    goToPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }
    handleDelete() {
        this.props.deletePalette(this.state.deletePaletteId)
        this.closeDeleteDialog()
    }
    render() {
        const {palettes, classes} = this.props
        const {openDeleteDialog} = this.state
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className={classes.heading} >ColorFarm</h1>
                        <Link to='/palette/new'>Create Palette</Link>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                        {palettes.map((palette) => (
                            <CSSTransition key={palette.id} classNames='fade' timeout={500} >
                                <Minipalette 
                                    key={palette.id} 
                                    id={palette.id}
                                    openDeleteDialog={this.openDeleteDialog}
                                    {...palette} 
                                    handleClick={this.goToPalette}/>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
                <Dialog 
                    open={openDeleteDialog} 
                    aria-labelledby="delete-dialog-title" 
                    onClose={this.closeDeleteDialog} >
                    <DialogTitle id="delete-dialog-title" >
                        Delete This Palette
                    </DialogTitle>
                    <List>
                        <ListItem button onClick={this.handleDelete}>
                            <ListItemAvatar >
                                <Avatar style={{backgroundColor: blue[100], color: blue[600] }} >
                                    <Check/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Delete" />
                        </ListItem>
                        <ListItem button onClick={this.closeDeleteDialog}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: red[100], color: red[600] }} >
                                    <Close/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Cancel" />
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)