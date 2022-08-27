import { useWeb3React } from "@web3-react/core";
import { injected, network } from "components/helpers/connectors";
import { useEffect } from "react";

export function useEagerConnect() {
  const { activate } = useWeb3React();

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized: boolean) => {
      if (isAuthorized) {
        activate(injected, undefined, true);
      } else {
        activate(network);
      }
    });
  }, [activate]); // intentionally only running on mount (make sure it's only mounted once :))
}
