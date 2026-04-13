import { useParams } from "react-router-dom";
import { StatusMessage } from "../../../common/components/StatusMessage";
import { usePortfolio } from "../hooks/usePortfolio";
import { useProject } from "../hooks/useProject";
import { CaseStudiesSection } from "../components/CaseStudiesSection";
import { ContactSection } from "../components/ContactSection";
import { ProjectHero } from "../components/ProjectHero";
import { ProjectNavigator } from "../components/ProjectNavigator";
import { ProjectOverview } from "../components/ProjectOverview";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const { project, status } = useProject(slug);
  const { portfolio, status: portfolioStatus } = usePortfolio();

  if (status === "loading" || portfolioStatus === "loading") {
    return <StatusMessage>Loading project case study...</StatusMessage>;
  }

  if (status === "error" || portfolioStatus === "error" || !project || !portfolio) {
    return <StatusMessage>Project data did not load.</StatusMessage>;
  }

  return (
    <main className="shell">
      <SiteHeader identity={portfolio.identity} />
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <CaseStudiesSection caseStudies={project.caseStudies} />
      <ProjectNavigator projects={portfolio.projects} currentSlug={project.slug} />
      <ContactSection
        availability={portfolio.identity.availability}
        email={portfolio.identity.email}
        socialLinks={portfolio.identity.socialLinks}
      />
      <SiteFooter identity={portfolio.identity} />
    </main>
  );
}
