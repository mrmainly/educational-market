import { Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

import { MainLayout } from "@/components";
import { ROUTES } from "@/constans";

import { MainPage } from "./Main";
import { DocumentPage } from "./Document";
import { ProjectPage } from "./Project";
import { ProjectDetailPage } from "./Project/ProjectDetail";
import { ProgramPage } from "./Program";
import { LoginPage } from "./Login";
import { RegistrationPage } from "./Registration";
import { ProfilePage } from "./Profile";
import { BasketPage } from "./Basket";

export const Routing = () => {
    const location = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <Routes location={location} key={location.pathname}>
            <Route element={<LoginPage />} path={ROUTES.LOGIN} />
            <Route element={<RegistrationPage />} path={ROUTES.REGISTRATION} />
            <Route element={<MainLayout />} path="/">
                <Route index element={<MainPage />} />
                <Route element={<DocumentPage />} path={ROUTES.DOCUMENTS} />
                <Route element={<ProjectDetailPage />} path={ROUTES.PROJECTS + "/:id"} />
                <Route element={<ProjectPage />} path={ROUTES.PROJECTS} />
                <Route element={<ProgramPage />} path={ROUTES.PROGRAMS} />
                <Route element={<ProfilePage />} path={ROUTES.PROFILE} />
                <Route element={<BasketPage />} path={ROUTES.BASKET} />
            </Route>
        </Routes>
    );
};
