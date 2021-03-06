import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Palette from './Palette'
import PaletteList from './PaletteList'
import seedColors from './seedColors'
import SingleColorPalette from './SingleColorPalette'
import NewPaletteForm from './NewPaletteForm'
import generatePalette from './colorHelper'

class App extends Component {
  constructor(props) {
    super(props)
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"))
    this.state ={
      palettes: savedPalettes || seedColors
    }
    this.savePalette = this.savePalette.bind(this)
    this.findPalette = this.findPalette.bind(this)
    this.deletePalette = this.deletePalette.bind(this)
  }

  // componentWillUnmount() {
  //   window.localStorage.clear()
  // }

  findPalette(id) {
    return this.state.palettes.find((palette) => {
      return palette.id === id
    })
  }
  deletePalette(id) {
    this.setState(
      st => ({
        palettes: st.palettes.filter(palette => palette.id !== id)
      }), this.syncLocalStorage
    )
  }

  savePalette(newPalette) {
    this.setState({
      palettes: [...this.state.palettes, newPalette]
    }, this.syncLocalStorage)
  }

  syncLocalStorage() {
    window.localStorage.setItem("palettes", 
      JSON.stringify(this.state.palettes)
    )
  }

  render() {
    const {palettes} = this.state
    return (
      <Switch>
        <Route exact path='/' render={(routeProps) => (
          <PaletteList 
            palettes={palettes} 
            {...routeProps}
            deletePalette={this.deletePalette}
          />)} 
        />

        <Route exact path='/palette/new' render={ (routeProps) => 
            <NewPaletteForm 
              savePalette={this.savePalette} 
              {...routeProps}
              Palettes={palettes}
            />} 
        />

        <Route exact path='/palette/:id' 
          render={(routeProps) => (
          <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>)} 
        />
        <Route exact path='/palette/:paletteId/:colorId'
          render={(routeProps) => (<SingleColorPalette 
            palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
            colorId={routeProps.match.params.colorId}
          />)}
        />
        <Route render={(routeProps) => (
          <PaletteList 
            palettes={palettes} 
            {...routeProps}
            deletePalette={this.deletePalette}
          />)} 
        />
      </Switch>
    )
  }
}

export default App