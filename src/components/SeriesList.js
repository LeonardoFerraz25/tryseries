import React from "react";
import SerieCard from "./SerieCard";
import data from "../data"
import Form from "./Form";

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

  addSeries = (newSeries) => {
    console.log(newSeries);
    this.setState((estadoAnterior) =>({
      seriesData: [...estadoAnterior.seriesData, newSeries],
    }));
  }

  render() {
    const { filterName, seriesData } = this.state;

    const series = seriesData.filter(iten => {
      const nameLower = iten.name.toLowerCase();
      const filterNameLower = filterName.toLowerCase();
      return nameLower.includes(filterNameLower)
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
        <Form addSeries={this.addSeries}/>
      </section>
    )
  }
}

export default SeriesList;
