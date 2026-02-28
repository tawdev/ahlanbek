import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Explore our diverse range of services including Real Estate, Tourism, Import/Export, and Web Development. Tailored solutions for global needs.",
    alternates: {
        canonical: "/services",
    },
};

export default function ServicesPage() {
    return <ServicesClient />;
}
