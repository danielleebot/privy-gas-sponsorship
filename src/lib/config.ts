import { bscTestnet } from "viem/chains";
import { addRpcUrlOverrideToChain } from "@privy-io/chains";
import { parseUnits } from "viem";

// Chain config
export const BSC_RPC_URL =
  "https://bnb-testnet.g.alchemy.com/v2/z_VbKWaDjY0JlY0YpCLHy";
export const bscChain = addRpcUrlOverrideToChain(bscTestnet, BSC_RPC_URL);

// Contract addresses
export const USDT_ADDRESS = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";
export const SPENDER_ADDRESS = "0xbe946b2a47b5861e95aa8b601205889568c97def";
export const APPROVE_AMOUNT = parseUnits("100", 18); // 100 USDT
export const PRIVY_APP_ID = "cmi5m5vdz006lks0cbixho6k0";
