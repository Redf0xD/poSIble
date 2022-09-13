import { useState } from "react";
import { ethers } from "ethers"; // interacting with wallet
export const useConnect = () => {
  const [publicKey, setPublickey] = useState();
  const [network, setNetwork] = useState();
  const [chainId, setChainId] = useState();
  const [msg, setMsg] = useState();
  const { ethereum } = window;
  const connect = async () => {
    if (ethereum.isMetaMask) {
      localStorage.setItem("previouslyConnected", "true");
      const provider = new ethers.providers.Web3Provider(ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);

      const { name, chainId } = await provider.getNetwork();

      setNetwork(name);
      setChainId(chainId);
      setPublickey(accounts[0]);
    } else {
      setMsg("Install MetaMask");
    }
  };
  return { publicKey, connect };
};