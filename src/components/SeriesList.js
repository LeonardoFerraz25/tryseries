import React from "react";
import SerieCard from "./SerieCard";
import data from "../data"

class SeriesList extends React.Component {

  constructor() {
    super()

    this.state = {
      filterName: '',
      seriesData: data,
    }
  }

  handlerChange = ({ target }) => {
    this.setState({
      filterName: target.value
    })
  }

  render() {
    const { filterName, seriesData } = this.state;

    const series = seriesData.filter(iten => {
      return iten.name.includes(filterName)
    })

    return(
      <section className="series-list" >
        <input 
        onChange={this.handlerChange}
        className="form-control"
        type="text"
        placeholder="pesquise uma serie"
        />
        <div className="container-series">{series.map(iten => <SerieCard key={iten.id} serie={iten} />)}</div>
      </section>
    )
  }
}

export default SeriesList;
