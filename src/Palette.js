import React, { Component } from 'react'
import Navbar from './Navbar'
import ColorBox from './ColorBox'
import './Palette.css'

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
        const {colors, paletteName, emoji} = this.props.palette


        const colorBoxes = colors[level].map( color => (
            <ColorBox background={color[format]} name={color.name} key={color.id} />
        ))

        return (
            <div className='Palette'>
                <Navbar level={level} handleChangeLevel={this.handleChangeLevel} changeFormat={this.changeFormat} />
                <div className='Palette-colors'>
                    {/* Bunch of color Boxes goes Here */}
                    {colorBoxes}
                </div>
                <footer className='palette-footer'>
                    <div>{paletteName}</div>
                    <span className='emoji'>{emoji}</span>
                </footer>
            </div>
        )
    }
}

export default Palette