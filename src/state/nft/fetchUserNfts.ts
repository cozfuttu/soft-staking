import Web3 from "web3";
import { AbiItem } from "web3-utils";
import { CHAIN_ID } from "config";
import CONTRACT_ADDRESSES from "config/contracts";
import BM from "config/abi/BM.json";
import { getNftFromTypeId } from "helpers/nftHelpers";

const fetchUserNfts = async (account: string, library: Web3) => {
  const contractAddress = CONTRACT_ADDRESSES.nft[CHAIN_ID];
  const contract = new library.eth.Contract(
    BM as unknown as AbiItem,
    contractAddress
  );
  const balance = await contract.methods.balanceOf(account).call();
  console.log("balance: ", balance);
  const array = Array.from(Array(parseInt(balance)).keys());

  const data = await Promise.all(
    array.map(async (n) => {
      const result = await contract.methods
        .getNftByAddress(account, n + 1)
        .call();

      const { tokenId, typeId } = result;
      const { name, image } = getNftFromTypeId(parseInt(typeId));
      return {
        tokenId,
        typeId,
        name,
        image,
      };
    })
  );

  return data;
};

export default fetchUserNfts;
