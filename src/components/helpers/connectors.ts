import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { NetworkConnector } from "@web3-react/network-connector";

export const RPC_URLS = {
  137: "https://polygon-rpc.com/",
  80001: "https://rpc-mumbai.matic.today",
};

// metamask
export const injected = new InjectedConnector({
  supportedChainIds: [137, 80001],
});

// walletconnect
export const walletconnect = new WalletConnectConnector({
  rpc: {
    137: RPC_URLS[137],
    80001: RPC_URLS[80001],
  },
  qrcode: true,
});

// coinbase
export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[137],
  appName: "Battlemancers-Soft-Staking",
  supportedChainIds: [137, 80001],
});

// network
export const network = new NetworkConnector({
  urls: RPC_URLS,
  defaultChainId: 80001,
});