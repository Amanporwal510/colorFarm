import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import PaletteFooter from './PaletteFooter'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import styles from './styles/PaletteStyles'

class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = {level: 400, format: 'hex'}

        this.handleChangeLevel = this.handleChangeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }

    handleChangeLevel(level) {
        this.setState({level})
    }

    changeFormat(format) {
        this.setState({format})
    }

    render() {

        const {level, format} = this.state
        const {colors, paletteName, id, emoji} = this.props.palette
        const {classes} = this.props


        const colorBoxes = colors[level].map( color => (
            <ColorBox 
                background={color[format]} 
                name={color.name} 
                key={color.id}
                paletteId={id}
                colorId={color.id}
                showingFullPalette={true}
            />
        ))

        return (
            <div className={classes.Palette}>
                <Navbar 
                    level={level} 
                    handleChangeLevel={this.handleChangeLevel} 
                    changeFormat={this.changeFormat} 
                    showingAllColors = {true}
                />
                <div className={classes.PaletteColors}>
                    {/* Bunch of color Boxes goes Here */}
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default withStyles(styles)(Palette)