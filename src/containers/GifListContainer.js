import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

class GifListContainer extends React.Component {
  state={
    gifs: null
  }

  render() {
    return(
      <div className="row">

        <GifList className="col-sm-8"/>
        <GifSearch className="col-sm-4"/>

      </div>
    )
  }
}



export default GifListContainer
