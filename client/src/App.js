import React, { Component } from "react";
import "./styles/main.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link
} from "react-router-dom";
import axios from "axios";
import Input from "./components/Input";
import Header from "./components/Header";

export default class App extends Component {
  state = {
    articles: [],
    loading: true
  };

  componentDidMount() {
    axios({ method: "get", url: `http://localhost:5000/data` }).then(
      response => {
        this.setState({ articles: response.data, loading: false });
      }
    );
  }
  render() {
    const articles = this.state.articles.map(article => {
      return (
        <div>
          <span>{article.title}</span>
        </div>
      );
    });

    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Header />
              <h1>HACKATHON</h1>
              {articles}
            </Route>
            <Route path="/input">
              <Header />
              <h1>HACKATHON</h1>
              <Input />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
