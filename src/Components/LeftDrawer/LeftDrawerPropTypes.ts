import { Dispatch, SetStateAction } from "react";

export default interface LeftDrawerPropTypes {
  isOpen: boolean,
  toggleDrawer: () => void,
  setPageIndex: Dispatch<SetStateAction<number>>
}
