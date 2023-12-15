import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetMenuItemsQuery } from "../../../apis/menuItemApi";
import { setMenuItem } from "../../../Storage/Redux/artWorkItemSlice";
import { artWorkModel } from "../../../Interface";
import ArtWorkCart from "./ArtWorkCart";
import Slide from "../../../Components/Other/slider";
import { MainLoader } from "../Common";

function ArtWorkList() {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetMenuItemsQuery(null);
  useEffect(() => {
    if (!isLoading) {
      dispatch(setMenuItem(data.result));
    }
  }, [isLoading]);

  if (isLoading) {
    return <MainLoader />;
  }

  return (
    <div className="container row">
      {data.result.length > 0 &&
        data.result.map((menuItem: artWorkModel, index: number) => (
          <ArtWorkCart artWork={menuItem} key={index} />
        ))}
    </div>
  );
}

export default ArtWorkList;
