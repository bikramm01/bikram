import Header from "../components/Header";
import Footer from "../components/Footer";
import InsightClient from "./InsightClient";
import { getAllInsights } from "@/lib/insights";

export default function InsightPage() {
  const insights = getAllInsights();

  return (
    <>
      <Header />
      <InsightClient insights={insights} />
      <Footer />
    </>
  );
}