import React from "react";
import { Link } from "react-router-dom";
import "./PreviewPostCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import AddressForm from "../Form/AddressForm";
import ReadPost from "../../views/Order/ReadPost/ReadPost";

function PreviewPostCard({
  id,
  image,
  Title,
  author,
  Description,
  price,
  edit,
  delet,deletsymbol, removeProductfromList, obj, setTaskEditable
}) {
  return (
    <>
      <div className="dis-flex">
        <div className="preview-post-card">
          <img className="image-card" src={image} alt="image" />
          <h4 className="title-card">{Title}</h4>
          <del> RS{delet} </del>{" "}
          <h4 className="pric">
            {" "}
            RS <span className="price-card">{price}</span>{" "}
          </h4>{" "}
          <br />
          <span> {author}</span>
          <p>{Description}</p>
          <Link
            className="button view"
            to={`/Post/ReadPost/${id}`}
          >
            View Now
          </Link>
          
          <AddressForm/>
          
          <span
          className="card-delet"
          onClick={() => {
            removeProductfromList(obj);
          }}
        >
          {deletsymbol}
        </span>
        <span
          className="card-edit-icon"
          onClick={() => {
            setTaskEditable(id);
          }}
        >
          {edit}
        </span>
        </div>
      </div>
       {/* asdfghjkl;dfghjkl;fghjk */}
      {/* <div className="task-container">
        <h2 className="task-title">{Title}</h2>
        <p className="task-description"> {Description} </p>
        <p className="task-priority"> {price}</p>
        <button
          className="btn-card"
          onClick={() => {
            alert("Added cart succesfully");
          }}
        >
          Add to Cart
        </button>
        <button className="btn-card"> Buy Now</button>
        <span
          className="card-delet"
          onClick={() => {
            removeTaskfromList(obj);
          }}
        >
          🗑️
        </span>
        <span
          className="card-edit-icon"
          onClick={() => {
            setTaskEditable(id);
          }}
        >
          🖊️
        </span>
      </div> */}
    </>
  );
}

export default PreviewPostCard;
