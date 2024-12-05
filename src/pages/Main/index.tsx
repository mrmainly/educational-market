import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/all";
import { Application } from "@splinetool/runtime";

import { StartSection, ProjectSection } from "./components";
import { ApplicationFormSection, Loader } from "@/components";

export const MainPage = () => {
    const [loading, setLoading] = useState(true);
    const [gsapLoading, setGsapLoading] = useState(true);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const app = new Application(canvas);
        app.load("https://prod.spline.design/bzKOMbMxQUNTvaGT/scene.splinecode").then(() => {
            setLoading(false);
        });
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setGsapLoading(false);
            },
        });
        const texts = document.querySelectorAll(".loader-text");

        texts.forEach((text, i) => {
            tl.to(text, {
                opacity: 1,
                duration: 2,
            });
            tl.to(text, { ease: "none", color: "#fff", duration: 1 }, i * 2 + 0.5);
        });
    });

    return (
        <div>
            <StartSection splineRef={canvasRef} />
            <ProjectSection />
            <ApplicationFormSection />
            {(loading || gsapLoading) && <Loader />}
        </div>
    );
};
