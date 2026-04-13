import { Navigate, Route, Routes } from "react-router-dom";
import { PortfolioPage } from "./features/portfolio/pages/PortfolioPage";
import { ProjectDetailPage } from "./features/portfolio/pages/ProjectDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
