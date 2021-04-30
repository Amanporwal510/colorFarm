import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import FormatSelector from './Navbar-FormatSelector'
import Snackbar from './Snackbar'
import './Navbar.css'


class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {format: 'hex', snackbarOpen: false}
        this.handleChange = this.handleChange.bind(this)
        this.handleSnackbarClose = this.handleSnackbarClose.bind(this)
    }

    handleChange(evt) {
        this.setState( {
            format: evt.target.value,
            snackbarOpen: true
        }, () => {
            this.props.changeFormat(this.state.format)
            
        })
    }

    handleSnackbarClose() {
        this.setState({snackbarOpen: false})
    }
    render() {
        const {level, handleChangeLevel} = this.props
        const {format, snackbarOpen} = this.state

        return (
            <header className='Navbar'>
                <div className='logo'>
                    <Link to='/'>ColorFarm</Link>
                </div>
                <div className='slider-container'>
                    <span>Level: {level}</span>
                    <div className='slider'>
                        <Slider defaultValue={level} 
                            min={100} 
                            max={900} 
                            step={100} 
                            onAfterChange={handleChangeLevel} 
                        />
                    </div>
                </div>
                <div className='FormatSelector'>
                <FormatSelector format={format} handleChange={this.handleChange}/>
                </div>
                <Snackbar open={snackbarOpen} handleClose={this.handleSnackbarClose} format={format} />
            </header>
        )
    }
}

export default Navbar