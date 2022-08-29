export interface Nft {
  name: string;
  image: string;
  typeId: number;
  tokenId: number;
}

export interface UserNftState {
  isApproved: boolean;
  nfts: Nft[];
}

export interface NftState {
  userData: UserNftState;
}

export interface State {
  nft: NftState;
}
