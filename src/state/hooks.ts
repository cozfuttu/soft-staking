import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserNftDataAsync } from "./nft";
import { State } from "./types";

export const useFetchData = () => {
  const dispatch: any = useDispatch();
  const { account, library } = useWeb3React();

  useEffect(() => {
    if (account) {
      dispatch(fetchUserNftDataAsync(account, library));
    }
  }, [dispatch, account, library]);
};

export const useUserNfts = () => {
  const userData = useSelector((state: State) => state.nft.userData);
  return userData;
};
