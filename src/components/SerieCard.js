import React from "react";

class SerieCard extends React.Component {
  render() {
    const { serie } = this.props;
    /* const { nome, image, genre} = serie; */
    return (
      <div className="series">
        <h2>{serie.name}</h2>
        <div className="card-img-wrapper"><img src={serie.image} alt={serie.name} /></div>
        <span>Gênero:{serie.genre}</span>
      </div>
    )
  }
}

export default SerieCard;