import React from "react"; 

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      image: '',
      genre: ''
    }
  }

  handlerChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }

  handlerSubmit = (event) => {
    event.preventDefault();
    const { addSeries } = this.props;
    addSeries(this.state)
    this.setState({
      name: '',
      image: '',
      genre: ''
    })
  }

  render() {
    const { name, image, genre } = this.state;
    return (
      <section className="forms">
        <h3>Adicione uma Série</h3>
        <form onSubmit={this.handlerSubmit}>
          <input 
          className="form-control"
          name="name" 
          type="text" 
          placeholder="Nome da série"
          value={ name }
          onChange={this.handlerChange}
          />
          <input 
          className="form-control"
          name="image" 
          type="text" 
          value={ image }
          placeholder="imagem da série"
          onChange={this.handlerChange}
          />
          <select 
          onChange={this.handlerChange}
          className="form-control" 
          name="genre" id="genre"
          value={ genre }
          >
            <option value="Ação">Ação</option>
            <option value="Horror">Horror</option>
            <option value="Drama">Drama</option>
            <option value="Comedia">Comedia</option>
            <option value="Anime">Anime</option>
          </select>
          <button type="submit">Adicionar serie</button>
        </form>
      </section>
    )
  }
}

export default Form;