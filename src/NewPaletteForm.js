import React, { Component } from 'react'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {Drawer, Typography, Divider, Button, IconButton} from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import arrayMove from 'array-move'
import DraggableColorList from './DraggableColorList'
import PaletteFormNav from './PaletteFormNav'
import ColorPickerForm from './ColorPickerForm'
import seedColors from './seedColors'
import styles from './styles/NewPaletteFormStyles'


class NewPaletteForm extends Component {
    static defaultProps = {
        maxLength: 20
    }
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            colors: seedColors[0].colors
        }

        this.addNewColor = this.addNewColor.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSavePalette = this.handleSavePalette.bind(this)
        this.removeColor = this.removeColor.bind(this)
        this.clearPalette = this.clearPalette.bind(this)
        this.addRandomColor = this.addRandomColor.bind(this)
    }
    
    handleDrawerOpen = () => {
        this.setState({ open: true });
    }
    
    handleDrawerClose = () => {
        this.setState({ open: false });
    }
    
    addNewColor(newColor) {
        this.setState({
            colors: [...this.state.colors, newColor]
        })
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSavePalette(Palette) {
        const {paletteName, emoji} = Palette
        const newPalette = {
            paletteName,
            id: paletteName.toLowerCase().replace(/ /g, "-"),
            emoji,
            colors: this.state.colors
        }
        this.props.savePalette(newPalette)
        this.props.history.push('/')
    }
    removeColor(removeColor) {
        this.setState({
            colors: this.state.colors.filter((color) => color.name !== removeColor)
        })
    }
    clearPalette() {
        this.setState({
            colors: []
        })
    }
    addRandomColor() {
        const {colors} = this.state
        const allColors = this.props.Palettes.map( palette => palette.colors).flat()
        let randomColor = ""
        let isDuplicate = true
        do{
            randomColor = allColors[Math.floor(Math.random() * allColors.length)]
            isDuplicate = colors.some(color => color.name === randomColor.name)
        }while(isDuplicate);

        this.setState({
            colors: [...this.state.colors, randomColor]
        })
    }
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({colors}) => ({
            colors: arrayMove(colors, oldIndex, newIndex),
        }));
    };


    render() {
        const { classes, maxLength, Palettes } = this.props;
        const { open, colors } = this.state;

        const paletteIsFull = colors.length >= maxLength

        return (
            <div className={classes.root}>
            <PaletteFormNav 
                open={open} 
                classes={classes} 
                Palettes={Palettes}
                handleSavePalette={this.handleSavePalette}
                handleDrawerOpen = {this.handleDrawerOpen}
            />
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
                >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose}>
                    <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <div className={classes.container}>
                    <Typography variant="h4" gutterBottom>
                        Design Your Palette
                    </Typography>
                    <div className={classes.buttons}>
                        <Button 
                            className={classes.button}
                            variant='contained' 
                            color='secondary' 
                            onClick={this.clearPalette}
                        >Clear Palette</Button>
                        <Button 
                            className={classes.button}
                            variant='contained' 
                            color='primary' 
                            onClick={this.addRandomColor}
                            disabled={paletteIsFull}
                        >Random Color</Button>
                    </div>
                    <ColorPickerForm
                        paletteIsFull={paletteIsFull}
                        addNewColor={this.addNewColor}
                        colors={colors}
                    />
                </div>
            </Drawer>

            <main
                className={classNames(classes.content, {
                    [classes.contentShift]: open,
                })}
                >
                <div className={classes.drawerHeader} />

                <DraggableColorList
                    colors={colors}
                    removeColor={this.removeColor}
                    axis='xy'
                    onSortEnd={this.onSortEnd}
                    distance={15}
                />
                
            </main>
          </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm)