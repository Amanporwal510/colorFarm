import React, { Component } from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class FormatSelector extends Component {
    
    render() {
        const {format, handleChange} = this.props

        return (

            
                <Select
                    value={format}
                    onChange={handleChange}>
                    <MenuItem value="hex">HEX #ffffff</MenuItem>
                    <MenuItem value="rgb">RGB rgb(255, 255, 255)</MenuItem>
                    <MenuItem value="rgba">RGBA rgba(255, 255, 255, 1)</MenuItem>
                </Select>
            
        )
    }
}

export default FormatSelector
    