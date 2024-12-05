import { ContactsForm } from "@/components";
import { StartSection, AboutSection, ProblemSection, WorkSection } from "./components";
import { TimelineSection } from "./components/TimelineSection";

export const ProgramPage = () => {
    return (
        <div className="pt-[124px]">
            <StartSection />
            <TimelineSection />
            <AboutSection />
            <ProblemSection />
            <WorkSection />
            <ContactsForm />
        </div>
    );
};
