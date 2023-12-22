import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useUpdateShoppingCartMutation } from "../../../apis/shoppingCartApi";
import { artWorkModel } from "../../../Interface";
import apiResponse from "../../../Interface/apiResponse";
import { MiniLoader } from "../Common";

interface Props {
  artWork: artWorkModel;
}

function ArtWorkCard(props: Props) {
  const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);
  const [updateShoppingCart] = useUpdateShoppingCartMutation();
  const handleAddToCart = async (artWorkId: number) => {
    setIsAddingToCart(true);

    const response: apiResponse = await updateShoppingCart({
      menuItemId: artWorkId,
      updateQuantityBy: 1,
      userId: "a2283b26-1086-4ec6-b72e-7ba985f50494",
    });
    console.log(response.data);
    setIsAddingToCart(false);
  };

  return (
    <div className="col-md-4 col-12 p-4">
      <div
        className="card"
        style={{ boxShadow: "0 1px 7px 0 rgb(0 0 0 / 50%)" }}
      >
        <div className="card-body pt-2">
          <div className="row col-10 offset-1 p-4">
            <Link to={`/menuItemDetails/${props.artWork.id}`}>
              <img
                src={props.artWork.image}
                style={{ borderRadius: "50%" }}
                alt=""
                className="w-100 mt-5 image-box"
              />
            </Link>
          </div>

          <i
            className="bi bi-star btn btn-success"
            style={{
              position: "absolute",
              top: "15px",
              left: "15px",
              padding: "5px 10px",
              borderRadius: "3px",
              outline: "none !important",
              cursor: "pointer",
            }}
          >
            &nbsp
          </i>

          {isAddingToCart ? (
            <MiniLoader />
          ) : (
            <i
              className="bi bi-cart-plus btn btn-outline-danger"
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                padding: "5px 10px",
                borderRadius: "3px",
                outline: "none !important",
                cursor: "pointer",
              }}
              onClick={() => handleAddToCart(props.artWork.id)}
            ></i>
          )}

          <div className="text-center">
            <p className="card-title m-0 text-success fs-3">
              <Link
                to={`/menuItemDetails/${props.artWork.id}`}
                style={{ textDecoration: "none", color: "green" }}
              >
                {props.artWork.name}
              </Link>
            </p>
            <p className="badge bg-secondary" style={{ fontSize: "12px" }}>
              {props.artWork.category}
            </p>
          </div>
          <p className="card-text" style={{ textAlign: "center" }}>
            {props.artWork.description}
          </p>
          <div className="row text-center">
            <h4>${props.artWork.price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtWorkCard;
