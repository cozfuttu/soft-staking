import { useContext } from "react";
import { BlockContext } from "../uikit/context/blockContext";

const useBlock = () => {
  const block: number = useContext(BlockContext);
  return block;
};

export default useBlock;
