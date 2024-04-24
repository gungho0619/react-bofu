import Head from "next/head";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
  getRemainingAccountsForCandyGuard,
  mintV2Instruction,
} from "@/utils/mintV2";
import { fromTxError } from "@/utils/errors";
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  });
  return <></>;
}
