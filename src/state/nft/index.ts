import { createSlice } from "@reduxjs/toolkit";
import { Nft } from "state/types";
import fetchUserNfts from "./fetchUserNfts";
import fetchUserNftsFromDB from "./fetchUserNftsFromDB";

const initialState: Nft[] = [];

const nftSlice = createSlice({
  name: "nft",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const nfts = action.payload;
      const isApproved = false;

      return { ...state, userData: { nfts, isApproved } };
    },
  },
});

export const { setUserData } = nftSlice.actions;

export const fetchUserNftDataAsync = (account, library) => async (dispatch) => {
  const userNftData = await fetchUserNfts(account, library);
  const userNftDataWithDBResults = await fetchUserNftsFromDB(userNftData, account)

  dispatch(setUserData(userNftData));
};

export default nftSlice.reducer;
