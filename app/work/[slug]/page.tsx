import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/data";
import ProjectDetailClient from "./ProjectDetailClient";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.client} — Globe X Infra`,
    description: project.description,
    openGraph: {
      title: `${project.client} — Globe X Infra`,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const currentIndex = PROJECTS.findIndex((p) => p.slug === params.slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return <ProjectDetailClient project={project} nextProject={nextProject} />;
}
