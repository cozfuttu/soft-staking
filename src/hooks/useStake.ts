import { useWeb3React } from "@web3-react/core";
import { useCallback } from "react";
import axios, { AxiosResponse } from "axios";
import ReactGA from "react-ga4";
import useBlock from "./useBlock";

export const useStake = () => {
  const handleStake = useCallback((tokenId: string) => {
    console.log(tokenId);
  }, []);

  return { onStake: handleStake };
};

export const useMultiStake = () => {
  const { account } = useWeb3React();
  const currentBlock = useBlock().toFixed(0);
  const currentTime = (Date.now() / 1000).toFixed(0);

  const handleMultiStake = useCallback(
    async (tokenIds: string[]) => {
      const fetch: AxiosResponse<
        Array<{
          stakeTimeEpoch: string;
          stakeTimeBlock: string;
          tokenId: string;
        }>
      > = await axios.post("/api/stakeNft", {
        tokenIds,
        currentBlock,
        currentTime,
        account,
      });

      ReactGA.event({
        category: account!,
        action: "Staking",
        label: tokenIds.join(),
        value: parseInt(currentTime),
      });

      return fetch.data;
    },
    [account, currentBlock, currentTime]
  );

  return { onMultiStake: handleMultiStake };
};