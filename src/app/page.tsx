"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { USDTApprove } from "./USDTApprove";
import { bscChain, PRIVY_APP_ID } from "@/lib/config";
import { ExportWalletButton } from "./ExportWalletButton";

export default function Home() {
  return (
    <PrivyProvider
      appId={PRIVY_APP_ID}
      config={{
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
        },
        embeddedWallets: {
          ethereum: {
            createOnLogin: "all-users",
          },
        },
        supportedChains: [bscChain],
        defaultChain: bscChain,
      }}
    >
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">
            Privy Gas Sponsorship Demo
          </h1>
          <USDTApprove />
          <ExportWalletButton />
        </div>
      </main>
    </PrivyProvider>
  );
}
