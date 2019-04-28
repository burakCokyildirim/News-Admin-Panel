import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      imageURL: '',
      category: 'SPORTS'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(event) {
    this.setState({category: event.target.category});
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    if(this.state.title === '' || this.state.content === '' || this.state.imageURL === ''){
      alert('Lütfen bilgileri eksiksiz doldurunuz.');
      event.preventDefault();
    } else {
      fetch('http://localhost:3000/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.state.title,
          content: this.state.content,
          image: this.state.imageURL,
          type: this.state.category
        })
      })
      alert("Kayıt başarıyla oluşturuldu.")
    }
  }

  render() {
    return (
      <div>
        <section id="cover">
          <div id="cover-caption">
            <div id="container" class="container">
              <div class="row">
                <div class="col-sm-10 offset-sm-1 text-center">
                  <div class="info-form">
                    <h3>Haber Giriş Paneli</h3>
                    <div id="box1" class="box blurred-bg tinted">
                      <form onSubmit={this.handleSubmit}>
                        <label tpye="label" class="label">
                          <strong>Başlık:</strong>
                        </label>
                        <input
                          name="title"
                          type="text"
                          class="form-control"
                          value={this.state.title} 
                          onChange={this.handleInputChange}/>
                        <br />
                        <label tpye="label" class="label">
                          <strong>İçerik:</strong>
                        </label>
                        <textarea
                          name="content"
                          type="text"
                          class="form-control"
                          rows="8" 
                          value={this.state.content}
                          onChange={this.handleInputChange}/>
                        <br />
                        <label tpye="label" class="label">
                          <strong>Resim URL:</strong>
                        </label>
                        <input 
                        name="imageURL" 
                        type="url" 
                        class="form-control" 
                        value= {this.state.imageURL}
                        onChange={this.handleInputChange}/>
                        <br />
                        <br />
                        <label tpye="label" class="label">
                          <strong>Kategori:</strong>
                          <select value={this.state.category} onChange={this.handleChange}>
                            <option value="SPORTS">Spor</option>
                            <option value="POLITICS">Politika</option>
                            <option value="BUSINESS">İş</option>
                            <option value="ENTERTAINMENT">Eğlence</option>
                            <option value="CRIME">Suç</option>
                            <option value="Seyehat">Mango</option>
                            <option value="Teknoloji">Mango</option>
                          </select>
                        </label>
                        <br />
                        <input type="submit" class="btn btn-success" value="Kaydet" />
                      </form>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;


