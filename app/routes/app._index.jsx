import { useEffect } from "react";
import { useFetcher } from "react-router";
import { useAppBridge } from "@shopify/app-bridge-react";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null;
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);

  return null;
};

export default function Index() {

  return (
    <h1>Orders</h1>
  );
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
