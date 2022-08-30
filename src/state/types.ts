export interface Nft {
  name: string;
  image: string;
  typeId: string;
  tokenId: string;
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
