import React from "react";
import axios from "axios";

function Input(props) {
  const recordInput = input => {
    axios({
      method: "post",
      url: `http://localhost:5000/data`,
      data: {
        title: input.title,
        date: input.date,
        links: input.links,
        images: input.images,
        category: input.category,
        body: input.body,
        keywords: input.keywords
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
      date: event.target.date.value,
      links: event.target.links.value,
      images: event.target.images.value,
      category: event.target.category.value,
      body: event.target.body.value,
      keywords: event.target.keywords.value
    };
    console.log(input);
    recordInput(input);
    document.querySelector(".input").reset();
    // props.closedModal();
  };
  return (
    <div className="new-modal">
      <div className="container">
        <div className="newhead">
          <h1>Create New</h1>
        </div>
        <form className="input" action="submit" onSubmit={handleCreate}>
          <div className="input__head1">
            <h3>TITLE</h3>
            <input
              className="input__title"
              placeholder="Title"
              name="title"
            ></input>
          </div>
          <div className="input__head2">
            <h3>DAY</h3>
            <input name="date" type="date" className="input__day"></input>
          </div>
          <div className="input__head3">
            <h3>NUMBER OF HYPERLINKS</h3>
            <input
              className="input__links"
              placeholder="Number of hyperlinks in your post"
              type="number"
              name="links"
            ></input>
          </div>
          <div className="input__head4">
            <h3>NUMBER OF IMAGES</h3>
            <input
              className="input__images"
              placeholder="Number of images in your post"
              type="number"
              name="images"
            ></input>
          </div>
          <div className="input__head5">
            <h3>CATEGORY</h3>
            <select className="input__category" name="category">
              <option value="technology">Technology</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="socialmedia">Social Media</option>
              <option value="business">Business</option>
              <option value="entertainment">Entertainment</option>
              <option value="world">World</option>
            </select>
          </div>
          <div className="input__head6">
            <h3>BODY</h3>
            <input
              className="input__body"
              type="textarea"
              placeholder="Write or paste your content here..."
              name="body"
            ></input>
          </div>
          <div className="input__head7">
            <h3>KEYWORDS</h3>
            <input
              className="input__keywords"
              placeholder="(Optional) Keywords associated with your content"
              name="keywords"
            ></input>
          </div>
          <div className="input__button1">
            <button type="submit" className="input__submit">
              TEST MY IMPACT
            </button>
          </div>
          <button onClick={props.closedModal} className="input__cancel">
            <h2>CANCEL</h2>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Input;
