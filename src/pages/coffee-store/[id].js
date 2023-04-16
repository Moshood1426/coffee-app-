import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import coffeStoreData from "../../../coffee-stores.json";

export async function getStaticProps(staticProps) {
  const params = staticProps.params;

  return {
    props: {
      coffeeStore: coffeStoreData.find((item) => item.id === +params.id),
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
    fallback: false,
  };
}

const CoffeeStore = () => {
  const router = useRouter();

  if(router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Link href="">Back to home</Link>
    </div>
  );
};

export default CoffeeStore;
