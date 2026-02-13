import { notFound } from "next/navigation";
import { servicesData } from "@/lib/servicesData";
import ServiceDetailClient from "@/components/ServiceDetailClient";

export function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug: slug,
    }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    return <ServiceDetailClient service={service} />;
}
