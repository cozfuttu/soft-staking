import { ethers } from "ethers";
import { Contract } from "web3-eth-contract";

export const approve = async (lpContract, spenderAddress, account) => {
  return lpContract.methods
    .approve(spenderAddress, ethers.constants.MaxUint256)
    .send({ from: account, gasPrice: "64000000000" });
};

export const stake = async (stakingContract, tokenId, account) => {
  return stakingContract.methods
    .stake(tokenId)
    .send({ from: account, gasPrice: "64000000000" });
};

export const getTransfers = async (
  nftContract: Contract,
  fromBlock,
  account,
  tokenId
) => {
  return nftContract.getPastEvents(
    "Transfer",
    {
      filter: { from: account, tokenId },
      fromBlock,
      toBlock: "latest",
    },
    (err, events) => {
      if (err) console.log("an error occured while fetching: ", err);
      else console.log("events: ", events);
    }
  );
};