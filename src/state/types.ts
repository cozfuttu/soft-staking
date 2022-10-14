export interface NftDataContract {
  image?: string;
  typeId?: string;
  tokenId: string;
}

export interface NftDataFirebase {
  stakeTimeEpoch: string | null;
  stakeTimeBlock: string | null;
  tokenId: string;
  owner: string;
}

export interface Nft extends NftDataContract, NftDataFirebase { }

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
