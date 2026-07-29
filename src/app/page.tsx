import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExperienceList from "@/components/ExperienceList";
import GlobalEngagement from "@/components/GlobalEngagement";
import Approach from "@/components/Approach";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { experience, leadership } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-2xl flex-1 px-6">
        <Header />
        <Hero />
        <ExperienceList
          label="Work Life"
          entries={experience.map((e) => ({
            title: e.role,
            subtitle: e.company,
            period: e.period,
            points: e.points,
          }))}
        />
        <ExperienceList
          label="Leadership & Advisory"
          entries={leadership.map((l) => ({
            title: l.role,
            subtitle: l.org,
            period: l.period,
            points: l.points,
          }))}
        />
        <GlobalEngagement />
        <Approach />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <div className="mx-auto w-full max-w-2xl px-6">
        <Footer />
      </div>
    </div>
  );
}
