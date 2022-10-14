import axios from "axios"
import { NftDataContract } from "state/types"

const fetchUserNftsFromDB = async (userNftData: NftDataContract[], account: string) => {

  const data = await Promise.all(userNftData.map(async (data) => {
    const result = await axios.post('/api/getUserNftData', { tokenId: data.tokenId })

  }))
}

export default fetchUserNftsFromDB