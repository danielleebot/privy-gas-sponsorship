import { bsc } from "viem/chains";
import { addRpcUrlOverrideToChain } from "@privy-io/chains";

// Chain config
export const BSC_RPC_URL = "";
export const bscChain = addRpcUrlOverrideToChain(bsc, BSC_RPC_URL);

// Contract addresses
export const USDT_ADDRESS = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d";
export const SPENDER_ADDRESS = "";
export const APPROVE_AMOUNT = "500000000000000000"; // 0.5 USDT

// Privy config
export const PRIVY_APP_ID = "";
