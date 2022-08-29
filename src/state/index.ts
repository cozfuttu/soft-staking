import { configureStore } from "@reduxjs/toolkit";
import nftReducer from "./nft";

export default configureStore({
  reducer: {
    nft: nftReducer,
  },
});
