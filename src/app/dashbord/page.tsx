import { Suspense } from "react";
import Dashboard from "./[tag]/page";


export default function Home() {
  return (
    <>
    <Suspense>
    <Dashboard/>
    </Suspense>
    </>
  );
}