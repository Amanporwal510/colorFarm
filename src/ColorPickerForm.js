import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import {ChromePicker} from 'react-color'
import styles from './styles/ColorPickerFormStyles'

class ColorPickerForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newColorName: "",
            currentColor: 'teal'
        }
        this.updateCurrentColor = this.updateCurrentColor.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => 
            this.props.colors.every( 
                ({name}) => name.toLowerCase() !== value.toLowerCase()
            )
        )
        ValidatorForm.addValidationRule('isColorUnique', (value) => 
            this.props.colors.every( 
                ({color}) => color !== this.state.currentColor
            )
        )
    }

    updateCurrentColor(newColor) {
        this.setState({currentColor: newColor.hex})
    }
    handleSubmit() {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        }
        this.props.addNewColor(newColor)
        this.setState({
            newColorName: ""
        })
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        const {paletteIsFull, classes} = this.props
        const {newColorName, currentColor} = this.state
        return (
            <div>
                <ChromePicker 
                className={classes.picker}
                    color={currentColor} 
                    onChangeComplete={this.updateCurrentColor}
                />
                <ValidatorForm onSubmit={this.handleSubmit}  instantValidate={false} >
                    <TextValidator
                        className={classes.colorNameInput}
                        variant="filled"
                        margin="normal"
                        placeholder="Color Name"
                        name= "newColorName" 
                        value={newColorName} 
                        onChange={this.handleChange} 
                        validators={['required', 'isColorNameUnique', 'isColorUnique']}
                        errorMessages={['Enter Color Name', 'Color name Must be Unique', 'Color already taken']}
                    />
                    <Button 
                        className={classes.addColorBtn}
                        variant='contained' 
                        type='submit'
                        color='primary' 
                        style={ paletteIsFull ? {} : {backgroundColor: currentColor}}
                        disabled={paletteIsFull}
                    >{paletteIsFull ? "Palette Full" : "AddColor"}</Button>
                </ValidatorForm>
            </div>
        )
    }
}

export default withStyles(styles)(ColorPickerForm)