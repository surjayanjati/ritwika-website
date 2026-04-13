import { StatusMessage } from "../../../common/components/StatusMessage";
import { CollaboratorsStrip } from "../components/CollaboratorsStrip";
import { SiteHeader } from "../components/SiteHeader";
import { ContactSection } from "../components/ContactSection";
import { FeaturedStorySection } from "../components/FeaturedStorySection";
import { HeroSection } from "../components/HeroSection";
import { ManifestoSection } from "../components/ManifestoSection";
import { ProcessSection } from "../components/ProcessSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { SiteFooter } from "../components/SiteFooter";
import { usePortfolio } from "../hooks/usePortfolio";

export function PortfolioPage() {
  const { portfolio, status } = usePortfolio();

  if (status === "loading") {
    return <StatusMessage>Loading portfolio narrative...</StatusMessage>;
  }

  if (status === "error" || !portfolio) {
    return (
      <StatusMessage>
        The portfolio data did not load. Start the backend or check the API connection.
      </StatusMessage>
    );
  }

  return (
    <main className="shell">
      <SiteHeader identity={portfolio.identity} />
      <HeroSection
        identity={portfolio.identity}
        projectCount={portfolio.projects.length}
        selectedClientsCount={portfolio.selectedClients.length}
      />
      <CollaboratorsStrip clients={portfolio.selectedClients} />
      <ManifestoSection
        featureImage={portfolio.projects[1].heroImage}
        manifesto={portfolio.manifesto}
        capabilities={portfolio.capabilities}
      />
      <FeaturedStorySection projects={portfolio.projects.slice(0, 3)} />
      <ProjectsSection projects={portfolio.projects} />
      <ProcessSection process={portfolio.process} />
      <ContactSection
        availability={portfolio.identity.availability}
        email={portfolio.identity.email}
        socialLinks={portfolio.identity.socialLinks}
      />
      <SiteFooter identity={portfolio.identity} />
    </main>
  );
}
