import React from "react";
import axios from "axios";

function Input(props) {
  const recordInput = input => {
    axios({
      method: "post",
      url: `http://localhost:5000/data`,
      data: {
        title: input.title,
        category: input.category,
        links: input.links,
        images: input.images,
        videos: input.videos,
        body: input.body
      }
    }).then(response => {
      console.log("Content was input successfully!");
    });
  };

  const handleCreate = event => {
    event.preventDefault();
    console.log(event.target.date.value);
    let input = {
      title: event.target.title.value,
      category: event.target.category.value,
      links: event.target.links.value,
      images: event.target.images.value,
      videos: event.target.videos.value,
      body: event.target.body.value
    };
    console.log(input);
    recordInput(input);
    document.querySelector(".input").reset();
    // props.closedModal();
  };
  return (
    <div className="container">
      <span className="input-header__title">New Posting</span>
      <form className="input" action="submit" onSubmit={handleCreate}>
        <div className="input__title">
          <span className="input__title--header">Post title</span>
          <input
            className="input__title--box"
            placeholder="Title"
            name="title"
          ></input>
        </div>
        {/* <div className="input__date">
          <span className="input__date--posting">Date of posting</span>
          <input className="input__date--input" name="date" type="date"></input>
        </div> */}
        <div className="input__category">
          <span className="input__category--header">Category</span>
          <select className="input__category--input" name="category">
            <option value="technology">Technology</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="socialmedia">Social Media</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="world">World</option>
          </select>
        </div>
        <div className="input__links">
          <span className="input__links--header">Number of hyperlinks</span>
          <input
            className="input__links--input"
            placeholder=""
            type="number"
            name="links"
          ></input>
        </div>
        <div className="input__images">
          <span className="input__images--header">Number of images</span>
          <input
            className="input__images--input"
            placeholder=""
            type="number"
            name="images"
          ></input>
        </div>
        <div className="input__videos">
          <span className="input__videos--header">Number of videos</span>
          <input
            className="input__videos--input"
            placeholder=""
            type="number"
            name="videos"
          ></input>
        </div>
        <div className="input__body">
          <span className="input__body--header">Body of article</span>
          <textarea
            className="input__body--input"
            type="textarea"
            placeholder="Write or paste your content here..."
            name="body"
          ></textarea>
        </div>
        <div className="buttons">
          <button className="button--white">CANCEL</button>
          <button className="button--grey">SAVE DRAFT</button>
          <button type="submit" className="input__submit button--grey">
            SEE RESULTS
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input;
