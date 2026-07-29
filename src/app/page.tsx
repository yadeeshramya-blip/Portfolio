import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExperienceList from "@/components/ExperienceList";
import GlobalEngagement from "@/components/GlobalEngagement";
import Approach from "@/components/Approach";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { experience, leadership } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-5xl flex-1 px-6">
        <Header />
        <div className="lg:grid lg:grid-cols-[minmax(0,42rem)_1fr] lg:items-start lg:gap-16">
          <div>
            <Hero />
            <ExperienceList
              id="work-life"
              label="Work Life"
              entries={experience.map((e) => ({
                title: e.role,
                subtitle: e.company,
                period: e.period,
                points: e.points,
              }))}
            />
            <ExperienceList
              id="leadership"
              label="Leadership & Advisory"
              entries={leadership.map((l) => ({
                title: l.role,
                subtitle: l.org,
                period: l.period,
                points: l.points,
              }))}
            />
            <GlobalEngagement id="global-engagement" />
            <Approach id="approach" />
            <Projects id="projects" />
            <Education id="education" />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Skills id="skills" />
          </aside>
        </div>
        <div className="lg:max-w-[42rem]">
          <Contact id="contact" />
          <Footer />
        </div>
      </div>
    </div>
  );
}
