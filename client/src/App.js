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
import Report from "./components/Report";

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
        <div className="main-container__article">
          <span className="main-container__article--title">
            {article.title}
          </span>
          <span className="main-container__article--category">
            {article.category}
          </span>
          <span className="main-container__article--date">{article.date}</span>
        </div>
      );
    });

    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Header />
<<<<<<< HEAD
              <h1>HACKATHON</h1>
              <Report />
              {articles}
            </Route>
            <Route path="/input">
              <Header />
              <h1>HACKATHON</h1>
              <Input />
=======
              <section className="main">
                <div className="main-container">
                  <div className="main-container__top">
                    <span className="main-container__top--header">
                      My Postings
                    </span>
                    <Link to="/input">
                      <button className="main-container__top--button">
                        <span>ADD NEW</span>
                      </button>
                    </Link>
                  </div>
                  <div className="main-container__placeholders">
                    <span className="main-container__placeholders--title">
                      TITLE
                    </span>
                    <span className="main-container__placeholders--category">
                      CATEGORY
                    </span>
                    <span className="main-container__placeholders--posted">
                      POSTED ON
                    </span>
                  </div>
                  {articles}
                </div>
              </section>
>>>>>>> 3aae2bc77bf697e6228a13924dfa70e9cb855262
            </Route>
            <Route
              path="/input"
              render={() => {
                return (
                  <>
                    <Header />
                    <Input state={this.state} setState={this.setState} />
                  </>
                );
              }}
            ></Route>
          </Switch>
        </Router>
      </>
    );
  }
}
