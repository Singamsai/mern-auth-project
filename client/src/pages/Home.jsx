import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { loading, error, currentUser } = useSelector((state) => state.user);

  console.log("checkData", { error, loading, currentUser });
  return <div>Home</div>;
}
