import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useConnect } from "../../hooks/useConnect";
import { useTruncatedAddress } from "../../hooks/truncatedAddress";

export const Header = () => {
  const { publicKey, connect, msg } = useConnect();
  useEffect(() => {
    if (localStorage.getItem("previouslyConnected") === "true") connect();
  }, [connect]);

  // const switchNetwork = async (chainId) => {
  //   try {
  //     await window.ethereum.request({
  //       method: "wallet_addEthereumChain",
  //       params: [avlNetwork[`${chainId}`]],
  //     });
  //     setNetwork(avlNetwork[`${chainId}`].chainName);
  //     setChainId(chainId);
  //   } catch (error) {
  //     setMsg(error);
  //   }
  // };

  const avlNetwork = {
    137: {
      chainId: `0x${Number(137).toString(16)}`,
      rpcUrls: ["https://rpc-mainnet.matic.network/"],
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      blockExplorerUrls: ["https://polygonscan.com/"],
    },
    43114: {
      chainId: `0x${Number(43114).toString(16)}`,
      rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
      chainName: "Avalanche C-Chain",
      nativeCurrency: {
        name: "Avalanche",
        symbol: "AVAX",
        decimals: 18,
      },
      blockExplorerUrls: ["https://snowtrace.io/"],
    },
  };

  const shortAddress = useTruncatedAddress(publicKey);

  return (
    <header className="bg-darkBlue">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-8 sm:px-6 lg:px-8">
        <div className="sm:justify-between sm:items-center sm:flex">
          <div className="text-center sm:text-left">
            <NavLink to="/">
              <h1 className="text-2xl text-primary hover:text-yellow font-bold sm:text-4xl">
                poSíble!
              </h1>
            </NavLink>
          </div>

          <div className="flex flex-col gap-4 mt-4 sm:flex-row sm:mt-0 sm:items-center">
            <NavLink
              to="/faq"
              className="inline-flex items-center justify-center px-5 py-3 text-xl font-medium text-white transition bg-trasnparent border-b-2 border-transparent hover:text-secondary hover:border-b-2 hover:border-secondary focus:outline-none focus:ring"
            >
              Proyecto
            </NavLink>
            <NavLink
              to="/estudiantes"
              className="inline-flex items-center justify-center px-5 py-3 text-xl font-medium text-white transition bg-trasnparent border-b-2 border-transparent hover:text-secondary hover:border-b-2 hover:border-secondary focus:outline-none focus:ring"
            >
              Estudiantes
            </NavLink>
            <NavLink
              to="/profile"
              className="inline-flex items-center justify-center"
            >
              <div
                onClick={connect}
                className={
                  publicKey
                    ? "inline-flex items-center ju px-6 py-3 text-xl font-medium text-white border-2 border-white rounded-lg"
                    : "inline-flex items-center ju px-6 py-3 text-xl font-medium text-white bg-darkBlue border-2 border-white rounded-lg hover:bg-secondary hover:text-black hover:border-black active:bg-primary focus:outline-none focus:ring"
                }
              >
                <span className="text-sm font-medium">
                  {publicKey ? shortAddress : "Registrarte"}
                </span>
                {publicKey ? (
                  ""
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                )}
              </div>
            </NavLink>
            {msg && <p>{msg}</p>}
          </div>
        </div>
      </div>
    </header>
  );
};
