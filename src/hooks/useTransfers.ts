import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import { useCallback } from "react";
import ReactGA from "react-ga4";
import { getTransfers } from "../helpers/callHelpers";
import { useBM } from "./useContract";

export const useTransfers = () => {
  const contract = useBM();
  const { account } = useWeb3React();
  const currentTime = (Date.now() / 1000).toFixed(0);

  const handleTransfers = useCallback(
    async (
      fromBlock: string | null,
      tokenId: string,
      stakedTimeEpoch: string
    ) => {
      if (contract && fromBlock && account) {
        const transfers = await getTransfers(
          contract,
          fromBlock,
          account,
          tokenId
        );
        console.log("data: ", transfers);

        transfers.forEach((transferData) => {
          const tokenId = transferData.returnValues.tokenId;
          axios
            .post("/api/withdrawNft", {
              account,
              tokenId,
              stakedTimeEpoch,
              currentTime,
            })
            .then((value) => {
              console.log("withdraw resolved value: ", value);
            })
            .catch((reason) => {
              console.log("withdraw failed, reason: ", reason);
            });

          // UPDATE UI AFTER AUTO-WITHDRAW
          ReactGA.event({
            category: account,
            action: "Withdraw",
            label: tokenId,
            value: parseInt(currentTime),
          });
        });
      }
    },
    [contract, account]
  );

  return { handleTransfers };
};
