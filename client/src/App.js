import React, { Component } from "react";
import "./styles/main.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Input from "./components/Input";
import axios from "axios";

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
            <Route path="/">
              <h1>HACKATHON</h1>
              {articles}
            </Route>
            <Route path="/input">
              <Input />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
