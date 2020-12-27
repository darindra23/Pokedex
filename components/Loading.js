import react from "react";
import Loader from "react-loader-spinner";
import { Backdrop } from "./index";

export default function Loading() {
  return (
    <Backdrop>
      <Loader type="ThreeDots" color="#c22a19" height={80} width={80} />
    </Backdrop>
  );
}
