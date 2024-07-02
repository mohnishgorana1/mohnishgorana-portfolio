import Footer from "@/components/Footer";
import Graduation from "@/components/Graduation";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import ToolsAndTechnologies from "@/components/ToolsAndTechnologies";

import { FloatingNav } from "@/components/ui/floatingNavbar";
import { navItems, technologies1 } from "@/data";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="min-w-7xl w-full flex flex-col gap-12">
        <FloatingNav navItems={navItems} />
        <Hero />

        <div id="about">
          <Grid />
          <Graduation />
        </div>

        <div id="projects">
          <RecentProjects />
          <ToolsAndTechnologies />
        </div>

        <div id="contact">
          <Footer />
        </div>
      </div>
    </main>
  );
}
