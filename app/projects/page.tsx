import { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
    title: "Our Projects",
    description: "Discover our portfolio of successful projects across Commercial, Infrastructure, Technology, and Healthcare sectors worldwide.",
    alternates: {
        canonical: "/projects",
    },
};

export default function ProjectsPage() {
    return <ProjectsClient />;
}
