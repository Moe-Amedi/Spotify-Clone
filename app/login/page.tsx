"use client";
import Image from "next/image";
import React from "react";
import { UseHandler } from "./handler";
import { ClientSafeProvider } from "next-auth/react";
// import { Provider } from "@/types/customTypes";

const page = () => {
  const { handleLogin, provider } = UseHandler();
  const image = "/images/Spotify-Logo.png";
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      {provider !== undefined ? (
        <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
          <Image
            className="mb-5"
            src={image}
            alt={image}
            width={256}
            height={256}
          />
          {provider &&
            Object.values(provider).map((pro: ClientSafeProvider) => (
              <div key={pro.id}>
                <button
                  className="bg-[#18D860] text-white p-4 rounded-full"
                  onClick={() => handleLogin(pro?.id)}
                >
                  Login With {pro?.name}
                </button>
              </div>
            ))}
        </div>
      ) : (
        <h1>please wait...</h1>
      )}
    </div>
  );
};

export default page;
