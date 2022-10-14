import { Text } from "../uikit";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import { Nft } from "../state/types";
import styled from "styled-components";
import { REWARD_PER_SECOND } from "../config";

const StyledCard = styled.div<{ chosen?: boolean; staked?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${(p) => (p.staked ? "#BBAA92" : "#430D69")};
  border-radius: 4px;
  width: 132px;
  min-height: 182px;
  max-width: 40%;
  padding: 4px;
  box-shadow: ${(p) =>
    p.chosen ? "0px 2px 4px 6px rgba(96, 202, 81, 0.622)" : "none"};

  @media (max-width: 1600px) {
    min-height: auto;
  }

  & > button {
    background: url(${(p) =>
        `images/backgrounds/${p.chosen ? "RemoveBtn" : "ChooseBtn"}.webp`})
      no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 24px;
    border: none;
    color: white;
    font-weight: bold;
    font-family: "Kingthings Organica", sans-serif;
    font-size: 1rem;
    cursor: pointer;
  }
`;

const rewardStateReducer = (state, action) => {
  if (action.type === "PREV_REWARD_COLLECTED") {
    return { ...state, prevRewardCollected: action.value };
  } else if (action.type === "CURRENT_REWARD_COLLECTED") {
    return { ...state, currentRewardCollected: action.value };
  }

  return { prevRewardCollected: 0, currentRewardCollected: 0 };
};

interface Props {
  nft?: Nft;
  chooseFunc?: Dispatch<SetStateAction<string[]>>;
  chosen?: boolean;
  staked?: boolean;
  setTotalEarned?: Dispatch<SetStateAction<number>>;
}

const NFTCard: React.FC<Props> = ({
  nft,
  chooseFunc,
  chosen,
  staked,
  setTotalEarned,
}) => {
  const [rewardState, dispatchRewardState] = useReducer(rewardStateReducer, {
    prevRewardCollected: 0,
    currentRewardCollected: 0,
  });

  const { image, tokenId, stakeTimeBlock, stakeTimeEpoch } = nft || {};

  const handleChoose = useCallback(() => {
    if (chooseFunc && tokenId)
      chooseFunc((prevState) => [...prevState, tokenId]);
  }, [chooseFunc, tokenId]);

  const handleRemove = useCallback(() => {
    if (chooseFunc && tokenId)
      chooseFunc((prevState) => prevState.filter((str) => str !== tokenId));
  }, [chooseFunc, tokenId]);

  useEffect(() => {
    if (staked && stakeTimeEpoch) {
      const nowSecond = Date.now() / 1000;
      const timeSinceStaked = nowSecond - parseInt(stakeTimeEpoch);
      const rewardCollected = Math.floor(timeSinceStaked * REWARD_PER_SECOND);

      if (rewardCollected !== rewardState.currentRewardCollected) {
        dispatchRewardState({
          type: "PREV_REWARD_COLLECTED",
          value: rewardState.currentRewardCollected,
        });
        dispatchRewardState({
          type: "CURRENT_REWARD_COLLECTED",
          value: rewardCollected,
        });
      }
    }
  }, [stakeTimeEpoch, staked, rewardState.currentRewardCollected]);

  useEffect(() => {
    if (staked && setTotalEarned) {
      setTotalEarned(
        (prev) =>
          prev +
          rewardState.currentRewardCollected -
          rewardState.prevRewardCollected
      );
    }
  }, [
    setTotalEarned,
    staked,
    rewardState.currentRewardCollected,
    rewardState.prevRewardCollected,
  ]);

  if (!nft) return <StyledCard staked={staked} />;

  return (
    <StyledCard chosen={chosen} staked={staked}>
      <img src={`/images/characters/${image}.webp`} alt={image} width={132} />
      <Text fontSize="xs" color={staked ? "secondary" : "primary"}>
        Battlemancer#{tokenId}
      </Text>
      {staked && (
        <Text fontSize="xs" color={staked ? "secondary" : "primary"} center>
          Currently Earned: {rewardState.currentRewardCollected || "0"} BTMG
        </Text>
      )}
      {!staked ? (
        chosen ? (
          <button onClick={handleRemove}>REMOVE</button>
        ) : (
          <button onClick={handleChoose}>CHOOSE</button>
        )
      ) : (
        <></>
      )}
    </StyledCard>
  );
};

export default NFTCard;
