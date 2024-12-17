"use client";
import { store } from "@/app/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
}
