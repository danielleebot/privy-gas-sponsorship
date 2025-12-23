import { usePrivy } from "@privy-io/react-auth";

export function ExportWalletButton() {
  const { ready, authenticated, user, exportWallet } = usePrivy();
  // Check that your user is authenticated
  const isAuthenticated = ready && authenticated;
  // Check that your user has an embedded wallet
  const hasEmbeddedWallet = !!user?.linkedAccounts.find(
    (account) =>
      account.type === "wallet" &&
      account.walletClientType === "privy" &&
      account.chainType === "ethereum"
  );

  return (
    <button
      onClick={exportWallet}
      disabled={!isAuthenticated || !hasEmbeddedWallet}
    >
      Export my wallet
    </button>
  );
}
