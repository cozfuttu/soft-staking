import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import {
  injected,
  walletconnect,
  walletlink,
} from "components/helpers/connectors";
import Metamask from "./icons/Metamask";
import WalletConnect from "./icons/WalletConnect";
import Coinbase from "./icons/Coinbase";
import React from "react";

export interface Connector {
  title: string;
  Icon: React.FC;
  connector: InjectedConnector | WalletConnectConnector | WalletLinkConnector;
}

export const connectors: Connector[] = [
  {
    title: "Metamask",
    Icon: Metamask,
    connector: injected,
  },
  {
    title: "WalletConnect",
    Icon: WalletConnect,
    connector: walletconnect,
  },
  {
    title: "Coinbase",
    Icon: Coinbase,
    connector: walletlink,
  },
];
