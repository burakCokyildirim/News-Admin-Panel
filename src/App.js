import React, { Component } from "react";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      imageURL: "",
      category: "SPORTS",
      release: "",
      authors: "Admin User"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(event) {
    this.setState({ category: event.target.category });
  }
  handleDate(date) {
    console.log(date);
    this.setState({
      release: date
    });
  }
  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    fetch("http://192.168.14.244:3000/news", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
        image: this.state.imageURL,
        category: this.state.category,
        release: this.state.release,
        authors: this.state.authors
      })
    })
      .then(data => alert("Kayıt başarıyla oluşturuldu."))
      .catch(err => alert(err));
  }

  render() {
    return (
      <div>
        <section id="cover">
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
                      onChange={this.handleInputChange}
                    />
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
                      onChange={this.handleInputChange}
                    />
                    <br />
                    <label tpye="label" class="label">
                      <strong>Resim URL:</strong>
                    </label>
                    <input
                      name="imageURL"
                      type="url"
                      class="form-control"
                      value={this.state.imageURL}
                      onChange={this.handleInputChange}
                    />
                    <br />
                    <br />
                    <label tpye="label" class="label">
                      <strong>Kategori: </strong>
                      <select
                        value={this.state.category}
                        onChange={this.handleChange}
                      >
                        <option value="SPORTS">Spor</option>
                        <option value="POLITICS">Politika</option>
                        <option value="BUSINESS">İş</option>
                        <option value="ENTERTAINMENT">Eğlence</option>
                        <option value="CRIME">Suç</option>
                        <option value="TRAVEL">Gezi</option>
                        <option value="TECH">Teknoloji</option>
                      </select>
                    </label>
                    <br />
                    <label tpye="label" class="label">
                      <strong>Yayınlanma Tarihi:</strong>
                      <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={this.state.release}
                        onChange={this.handleDate}
                      />
                    </label>
                    <br />
                    <input
                      type="submit"
                      class="btn btn-success"
                      value="Kaydet"
                    />
                  </form>
                </div>
              </div>
              <br />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
