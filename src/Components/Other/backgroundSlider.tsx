import React from "react";
import { artWorkModel } from "../../Interface";
import Slider from "react-slick";
import "../css/backgroundSlider.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { useGetMenuItemsQuery } from "../../apis/menuItemApi";
import { useState, useEffect } from "react";
import { setMenuItem } from "../../Storage/Redux/artWorkItemSlice";

function BackgroundSlider() {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetMenuItemsQuery(null);
  useEffect(() => {
    if (!isLoading) {
      dispatch(setMenuItem(data.resul));
    }
  }, [isLoading]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  // const data = [
  //   {
  //     name: "noel",
  //     image:
  //       "https://i.pinimg.com/originals/06/b6/44/06b644a5c22cb45c0ff1bcbad2860c9b.png",
  //   },
  //   {
  //     name: "noel2",
  //     image:
  //       "https://i.pinimg.com/originals/2a/c4/4e/2ac44ed6f37df284bddbac2433aad42a.jpg",
  //   },
  //   {
  //     name: "noel2",
  //     image:
  //       "https://i.pinimg.com/originals/ef/0d/56/ef0d56f96bf3981199dd07f6bf7f23fc.jpg",
  //   },
  // ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <div style={{ width: "100%", marginTop: "20px", marginLeft: "20px" }}>
      <Slider {...settings}>
        {data.result.map((params: artWorkModel) => (
          <div>
            <div
              style={{
                borderRadius: "0.75rem",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={params.image}
                alt="#"
                style={{
                  height: "480px",
                  width: "665px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem",
                  marginLeft: "5rem",
                }}
              >
                <p
                  style={{
                    fontSize: "40px",
                    lineHeight: "1.75rem",
                    fontWeight: "600",
                  }}
                >
                  {params.name}
                </p>
                <div style={{ color: "#707070", fontSize: "16px" }}>
                  {params.category}
                </div>

                <button
                  style={{
                    borderRadius: "50px",
                    backgroundColor: "white",
                    padding: "1px 25px",
                    fontSize: "16px",
                    lineHeight: "26px",
                    height: "50px",
                    width: "210px",
                    fontWeight: "400",
                    border: "1px solid rgb(0,0,0",
                  }}
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BackgroundSlider;
