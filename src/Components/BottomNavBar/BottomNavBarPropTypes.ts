import { Dispatch, SetStateAction } from "react";

export default interface BottomNavBarPropTypes {
  pageIndex: number,
  setPageIndex: Dispatch<SetStateAction<number>>
}