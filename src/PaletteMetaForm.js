import React, { Component } from 'react'
import {Button,
        Dialog,
        DialogActions, 
        DialogContent, 
        DialogContentText, 
        DialogTitle } from '@material-ui/core'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

class PaletteMetaForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stage: "form",
            newPaletteName: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.setEmojiState = this.setEmojiState.bind(this)
        this.savePalette = this.savePalette.bind(this)
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => 
            this.props.Palettes.every( 
                ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        )
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    setEmojiState() {
        this.setState({stage: "emoji"})
    }
    savePalette(emoji) {
        const newPalette = {
            paletteName: this.state.newPaletteName,
            emoji: emoji.native
        }
        this.props.handleSavePalette(newPalette)
        this.setState({stage: "form"})
    }

    render() {
        const {stage, newPaletteName} = this.state
        const {hideForm} = this.props
        return (
        <div>

            <Dialog open={stage === "emoji"} onClose={hideForm}>
                <DialogTitle id="form-dialog-title">
                    Pick A Palette Emoji
                </DialogTitle>
                <Picker 
                    onSelect={this.savePalette}
                    perLine={10}
                    showPreview={false}
                    showSkinTones={false}
                />
            </Dialog>

            <Dialog open={stage === "form"}
                aria-labelledby="form-dialog-title"   
                onClose={hideForm}>
                <DialogTitle id="form-dialog-title">
                    Enter A Palette Name
                </DialogTitle>

                <ValidatorForm onSubmit={this.setEmojiState}>
                    <DialogContent>
                        <DialogContentText>
                            Please Enter a name for your Beautiful Palette. Makesure it is unique.
                        </DialogContentText>
                        <TextValidator
                            label= "Palette Name"
                            name="newPaletteName"
                            fullWidth
                            margin="normal"
                            value={newPaletteName}
                            onChange={this.handleChange}
                            validators={['required', 'isPaletteNameUnique']}
                            errorMessages={['Enter Palette Name', 'Pallete name Must be Unique']}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={hideForm} color="primary">
                            Cancel
                        </Button>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            type="submit"
                        >Save Palette</Button>
                    </DialogActions>
                </ValidatorForm>

            </Dialog>
        </div>
        );
    }
}

export default PaletteMetaForm