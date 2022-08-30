import { useCallback } from "react";

export const useStake = () => {
  const handleStake = useCallback((tokenId: string) => {
    console.log(tokenId);
  }, []);

  return { onStake: handleStake };
};

export default useStake;
