import Dashboard from "@/components/dashbord/Dashbord";
import { Suspense } from "react";


export default function Home() {
  return (
    <>
    <Suspense>
    <Dashboard/>
    </Suspense>
    </>
  );
}