import React from "react";
import { Link } from "react-router-dom";
import { artWorkModel } from "../../Interface";
interface Props {
  artWork: artWorkModel;
}
function ArtWorkCart(props: Props) {
  return (
    <div className="col-md-4 col-12 p-4">
      <div
        className="card"
        style={{ boxShadow: "0 1px 7px 0 rgba(0 0 0 / 50%" }}
      >
        <div className="card-body">
          <div className="row col-10 offset-1">
            <Link to={`/artWorkDetails/${props.artWork.id}`}>
              <img
                src={props.artWork.image}
                alt=""
                className="w-100 image-box"
              />
            </Link>
            <div className="tex-center">
              <p className="card-title m-0 text-succes fs-3">
                <Link
                  to={`/artWorkDetails/${props.artWork.id}`}
                  style={{
                    textDecoration: "none",
                    color: "green",
                    fontSize: "20px",
                  }}
                >
                  {props.artWork.name}
                </Link>
                <p style={{ fontSize: "25px" }}>{props.artWork.price} $</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtWorkCart;
