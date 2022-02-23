import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Feature from "./Components/Feature";
import Comunicacao from "./Components/Comunicacao";
import Comunicacaoframe from "./Components/Comunicacaoframe";
import Interface from "./Components/Interface";
import Interacao from "./Components/Interacao";
import Interacaoframe from "./Components/Interacaoframe";
import Conteudo from "./Components/Conteudo";
import Conteudoframe from "./Components/Conteudoframe";
import Avaliacao from "./Components/Avaliacao";
import Avaliacaoframe from "./Components/Avaliacaoframe";
import Acompanhamento from "./Components/Acompanhamento";
import Acompanhamentoframe from "./Components/Acompanhamentoframe";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Feature />
        <Resume data={this.state.resumeData.resume} />
        <Interface />
        <Comunicacao />
        <Comunicacaoframe />
        <Interacao />
        <Interacaoframe />
        <Conteudo />
        <Conteudoframe />
        <Avaliacao />
        <Avaliacaoframe />
        <Acompanhamento />
        <Acompanhamentoframe />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
