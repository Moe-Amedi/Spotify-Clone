// import { Provider } from "@/types/customTypes";
import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from "next-auth/react";
import { useEffect, useState } from "react";

type Providers = Record<
  LiteralUnion<BuiltInProviderType, string>,
  ClientSafeProvider
>;

export const UseHandler = () => {
  const [provider, setProvider] = useState<Providers>();

  const handleProviders = async () => {
    const providers = await getProviders();
    if (!providers) {
      return;
    }
    setProvider(providers);
  };

  useEffect(() => {
    handleProviders();
  }, []);

  const handleLogin = (providerId: string) => {
    return signIn(providerId, { callbackUrl: "/" });
  };
  return { handleProviders, handleLogin, provider };
};
