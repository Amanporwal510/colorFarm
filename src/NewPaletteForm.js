import React, { Component } from 'react'
import PaletteFormNav from './PaletteFormNav'
import ColorPickerForm from './ColorPickerForm'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button'
import DraggableColorList from './DraggableColorList'
import arrayMove from 'array-move'
import styles from './styles/NewPaletteFormStyles'


class NewPaletteForm extends Component {
    static defaultProps = {
        maxLength: 20
    }
    constructor(props) {
        super(props)
        this.state = {
            open: true,
            colors: this.props.Palettes[0].colors
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
        const allColors = this.props.Palettes.map( palette => palette.colors).flat()
        const randomColor = allColors[Math.floor(Math.random() * allColors.length)]

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
        const { classes, maxLength } = this.props;
        const { open } = this.state;

        const paletteIsFull = this.state.colors.length >= maxLength

        return (
            <div className={classes.root}>
            <PaletteFormNav 
                open={open} 
                classes={classes} 
                Palettes={this.props.Palettes}
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
                        colors={this.state.colors}
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
                    colors={this.state.colors}
                    removeColor={this.removeColor}
                    axis='xy'
                    onSortEnd={this.onSortEnd}
                />
                
            </main>
          </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm)