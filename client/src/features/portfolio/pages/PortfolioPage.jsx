import { StatusMessage } from "../../../common/components/StatusMessage";
import { CollaboratorsStrip } from "../components/CollaboratorsStrip";
import { SiteHeader } from "../components/SiteHeader";
import { ContactSection } from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";
import { ManifestoSection } from "../components/ManifestoSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
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
      <HeroSection identity={portfolio.identity} />
      <CollaboratorsStrip clients={portfolio.selectedClients} />
      <ManifestoSection
        featureImage={portfolio.projects[1].heroImage}
        manifesto={portfolio.manifesto}
        capabilities={portfolio.capabilities}
      />
      <ProjectsSection projects={portfolio.projects} />
      <TestimonialsSection testimonials={portfolio.testimonials.slice(0, 2)} />
      <ContactSection
        prompt={portfolio.contact.prompt}
        email={portfolio.identity.email}
      />
    </main>
  );
}
