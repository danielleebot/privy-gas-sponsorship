"use client";

import { usePrivy, useWallets, useSendTransaction } from "@privy-io/react-auth";
import { useState } from "react";
import { ethers, formatUnits } from "ethers";
import {
  USDT_ADDRESS,
  SPENDER_ADDRESS,
  APPROVE_AMOUNT,
  bscChain,
} from "@/lib/config";

export function USDTApprove() {
  const { wallets } = useWallets();
  const { authenticated, login, logout } = usePrivy();
  const { sendTransaction } = useSendTransaction();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const wallet = wallets.find((w: any) => w.walletClientType === "privy");
  const isConnected = authenticated && wallet;

  const handleApprove = async () => {
    if (!wallet) return;

    setIsLoading(true);
    setResult(null);

    try {
      const usdtInterface = new ethers.Interface([
        "function approve(address spender, uint256 amount) external returns (bool)",
      ]);

      const data = usdtInterface.encodeFunctionData("approve", [
        SPENDER_ADDRESS,
        APPROVE_AMOUNT,
      ]);

      const txHash = await sendTransaction(
        {
          to: USDT_ADDRESS,
          data,
          chainId: bscChain.id,
          value: BigInt(0),
        },
        { sponsor: true }
      );

      setResult(`✅ Transaction sent: ${txHash}`);
      console.log("✅ Transaction sent:", txHash);
    } catch (error: any) {
      console.error("❌ Failed:", error);
      setResult(`❌ Failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">
        USDT Approve with Gas Sponsorship
      </h2>

      <div className="mb-6">
        {!isConnected ? (
          <button
            onClick={login}
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg"
          >
            连接钱包
          </button>
        ) : (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-green-800 font-medium">嵌入式钱包已连接</p>
                <p className="text-green-600 text-sm">
                  {wallet?.address?.slice(0, 6)}...{wallet?.address?.slice(-4)}
                </p>
              </div>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-700 text-white text-sm px-3 py-1 rounded"
              >
                断开连接
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mb-4 text-sm text-gray-600 space-y-1">
        <p>
          <strong>Token:</strong> USDT (BSC)
        </p>
        <p>
          <strong>Spender:</strong> {SPENDER_ADDRESS.slice(0, 10)}...
        </p>
        <p>
          <strong>Amount:</strong> {formatUnits(APPROVE_AMOUNT, 18)} USDT
        </p>
      </div>

      <button
        onClick={handleApprove}
        disabled={isLoading || !isConnected}
        className="w-full bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded"
      >
        {isLoading ? "Sending..." : "Approve USDT"}
      </button>

      {result && (
        <div className="mt-4 p-3 bg-gray-100 rounded text-sm break-all">
          {result}
        </div>
      )}

      {!isConnected && (
        <p className="mt-4 text-blue-500 text-sm">
          请先连接嵌入式钱包以继续操作
        </p>
      )}
    </div>
  );
}
