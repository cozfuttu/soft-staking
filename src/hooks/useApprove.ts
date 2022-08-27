import { useWeb3React } from "@web3-react/core";
import { approve } from "helpers/callHelpers";
import { useERC20, useERC721 } from "./useContract";

export const useApprove = (spenderContract: string, ownerContract: string) => {
  const { account } = useWeb3React();
  const owner = useERC20(ownerContract);

  const handleApprove = () => {
    const result = approve(owner, spenderContract, account);
    return result;
  };

  return { onApprove: handleApprove };
};

export const useApproveNft = (
  spenderContract: string,
  ownerContract: string
) => {
  const { account } = useWeb3React();
  const owner = useERC721(ownerContract);

  const handleApprove = () => {
    const result = approve(owner, spenderContract, account);
    return result;
  };

  return { onApprove: handleApprove };
};
