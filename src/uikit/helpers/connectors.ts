import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { NetworkConnector } from "@web3-react/network-connector";
import { CHAIN_ID } from "../../config";

export const RPC_URLS = {
  1: "https://eth-mainnet.public.blastapi.io", // ETH Mainnet
  5: "https://eth-goerli.public.blastapi.io", // Görli Testnet (ETH)
  137: "https://polygon-rpc.com/", // Polygon Mainnet
  80001: "https://matic-mumbai.chainstacklabs.com", // Polygon Testnet (Polygon)
};

// metamask
export const injected = new InjectedConnector({
  supportedChainIds: [1, 5, 137, 80001],
});

// walletconnect
export const walletconnect = new WalletConnectConnector({
  rpc: {
    1: RPC_URLS[1],
    5: RPC_URLS[5],
    137: RPC_URLS[137],
    80001: RPC_URLS[80001],
  },
  qrcode: true,
});

// coinbase
export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[137],
  appName: "Battlemancers-Soft-Staking",
  supportedChainIds: [1, 5, 137, 80001],
});

// network
export const network = new NetworkConnector({
  urls: RPC_URLS,
  defaultChainId: CHAIN_ID,
});
