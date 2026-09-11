import type { Metadata } from "next";
import ActingClient from "./ActingClient";

export const metadata: Metadata = {
  title: "Bikram Mondal - Acting Journey, Work, and Insights",
  description:
    "Official acting portfolio of Bikram Mondal — actor, performer, and storyteller.",
  openGraph: {
    title: "Bikram Mondal - Acting Journey",
    description:
      "Official acting portfolio of Bikram Mondal - actor, performer, and storyteller.",
    type: "website",
  },
};

export default function ActingPage() {
  return <ActingClient />;
}