import { ethers } from "ethers";

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
