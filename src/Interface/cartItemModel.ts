import artWorkModel from "./artWorkModel";

export default interface cartItemModel {
  id: number;
  menuItemId: number;
  menuItem: artWorkModel;
  quantity: number;
}
