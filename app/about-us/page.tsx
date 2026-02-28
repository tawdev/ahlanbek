import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about the journey of Ahlanbek since 2009. From Marrakesh to the world, our mission is empowering success through integrity and innovation.",
    alternates: {
        canonical: "/about-us",
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
