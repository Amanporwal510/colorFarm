import React, { Component } from 'react'
import Navbar from './Navbar'
import ColorBox from './ColorBox'
import './Palette.css'

class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = {level: 400}

        this.handleChangeLevel = this.handleChangeLevel.bind(this)
    }

    handleChangeLevel(level) {
        this.setState({level})
    }

    render() {

        const {level} = this.state
        const {colors} = this.props.palette


        const colorBoxes = colors[level].map( color => (
            <ColorBox background={color.hex} name={color.name} />
        ))

        return (
            <div className='Palette'>
                {/* Navbar goes Here */}
                <Navbar level={level} handleChangeLevel={this.handleChangeLevel} />
                <div className='Palette-colors'>
                    {/* Bunch of color Boxes goes Here */}
                    {colorBoxes}
                </div>
                {/* Footer goes Here */}
            </div>
        )
    }
}

export default Palette