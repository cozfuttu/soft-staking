/// <reference types="react-scripts" />

interface Window {
  ethereum: {
    isMetaMask: true;
    request: (...args: any[]) => Promise<any>;
  };
  BinanceChain?: {
    bnbSign?: (
      address: string,
      message: string
    ) => Promise<{ publicKey: string; signature: string }>;
  };
}
