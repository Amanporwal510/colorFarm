import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Navbar from './Navbar'
import ColorBox from './ColorBox'
import PaletteFooter from './PaletteFooter'
import styles from './styles/PaletteStyles'

class SingleColorPalette extends Component {
    constructor(props) {
        super(props)
        this.state = {format: "hex"}
        this._shades = this.gatherColors(this.props.palette.colors ,this.props.colorId)
        this.changeFormat = this.changeFormat.bind(this)
    }

    gatherColors(allColors, id) {
        let shades = []
        for(let key in allColors) {
            shades = shades.concat(allColors[key].filter(color => color.id === id))
        }
        return shades.slice(1)
    }

    changeFormat(format) {
        this.setState({format})
    }

    render() {
        const {format} = this.state
        const {paletteName, emoji, id} = this.props.palette
        const {classes} = this.props
        const colorBoxes = this._shades.map((color) => (
            <ColorBox 
                background={color[format]} 
                name={color.name} 
                key={color.name}
                showingFullPalette={false}
            />
        ))
        return (
            <div className={classes.Palette}>
                <Navbar 
                    changeFormat={this.changeFormat} 
                    showingAllColors={false} 
                />
                <div className={classes.PaletteColors}>
                    {/* Bunch of color Boxes goes Here */}
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`} className="back-button">Go Back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
            // <div>Hi</div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette)