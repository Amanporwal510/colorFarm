import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import {ChromePicker} from 'react-color'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    picker: {
        width: "100% !important",
        marginTop: "2rem"
    },
    addColorBtn: {
        width: "100%",
        padding: "1rem",
        marginTop: "1rem",
        fontSize: "2rem"
    },
    colorNameInput: {
        width: "100%",
        height: "70px"
    }
};

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
        return (
            <div>
                <ChromePicker 
                className={classes.picker}
                    color={this.state.currentColor} 
                    onChangeComplete={this.updateCurrentColor}
                />
                <ValidatorForm onSubmit={this.handleSubmit}>
                    <TextValidator
                        className={classes.colorNameInput}
                        variant="filled"
                        margin="normal"
                        placeholder="Color Name"
                        name= "newColorName" 
                        value={this.state.newColorName} 
                        onChange={this.handleChange} 
                        validators={['required', 'isColorNameUnique', 'isColorUnique']}
                        errorMessages={['Enter Color Name', 'Color name Must be Unique', 'Color already taken']}
                    />
                    <Button 
                        className={classes.addColorBtn}
                        variant='contained' 
                        type='submit'
                        color='primary' 
                        style={ paletteIsFull ? {} : {backgroundColor: this.state.currentColor}}
                        disabled={paletteIsFull}
                    >{paletteIsFull ? "Palette Full" : "AddColor"}</Button>
                </ValidatorForm>
            </div>
        )
    }
}

export default withStyles(styles)(ColorPickerForm)