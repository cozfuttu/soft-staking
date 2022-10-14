import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import Web3 from "web3";
import { AbiItem } from "web3-utils";
import ERC721 from "config/abi/ERC721.json";
import ERC20 from "config/abi/ERC20.json";
import BM from "config/abi/BM.json"
import CONTRACT_ADDRESSES from "config/contracts";
import { CHAIN_ID } from "config";

export const useContract = (abi: AbiItem[], address: string) => {
  const { library } = useWeb3React<Web3>();
  const [contract, setContract] = useState(
    new library!.eth.Contract(abi, address)
  );

  useEffect(() => {
    setContract(new library!.eth.Contract(abi, address));
  }, [library]);

  return contract;
};

export const useERC20 = (address: string) => {
  return useContract(ERC20 as unknown as AbiItem[], address);
};

export const useERC721 = (address: string) => {
  return useContract(ERC721 as unknown as AbiItem[], address);
};

export const useBM = () => {
  const bmAddress = CONTRACT_ADDRESSES.nft[CHAIN_ID];
  return useContract(BM as unknown as AbiItem[], bmAddress);
};