import React from "react";
import { artWorkModel } from "../../../Interface";
import { Link } from "react-router-dom";
interface Props {
  artWork: artWorkModel;
}
function ArtCard(props: Props) {
  return (
    <div className="col-md-4 col-12 p-4">
      <div className="card">
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

export default ArtCard;
