import { SectionLayout, Title } from "@/components";
import { ChatBot } from "@/components/ChatBot";
import { ProjectDetailInfo, TaskList } from "@/pages/Project/ProjectDetail/components";

const include = [
    {
        title: "Основы IoT",
        text: "Знакомство с концепциями Интернета вещей, устройствами и их взаимодействием.",
    },
    {
        title: "Сборка модели",
        text: "Практическое занятие по сборке модели умной теплицы с использованием предоставленного набора. Участники учатся подключать датчики и актуаторы.",
    },
    {
        title: "Программирование",
        text: "Обучение основам программирования для управления устройствами, например, с использованием Arduino или других платформ.",
    },
    {
        title: "Мониторинг и управление",
        text: "Изучение, как собирать данные с датчиков (температура, влажность и т.д.) и как управлять системой через мобильные приложения или веб-интерфейсы.",
    },

    {
        title: "Практические проекты",
        text: "Участники могут разрабатывать свои проекты, используя знания, полученные в ходе курса, например, создание системы автоматического полива или мониторинга микроклимата.",
    },
    {
        title: "Обсуждение и поддержка",
        text: "В конце курса предусмотрены обсуждения, где участники могут задать вопросы и получить советы от преподавателей и других участников.",
    },
];

export const MyProjectDetailPage = () => {
    return (
        <div className="flex flex-col gap-y-4 py-[124px]">
            <ProjectDetailInfo basketShow={false} />
            <TaskList title="Краткое озокомление по курсу" include={include} />

            <SectionLayout>
                <div className="mt-[124px] flex flex-col md:gap-y-10 gap-y-4">
                    <Title>Giga chat</Title>
                    <div
                        className=" rounded-[20px] z-10 p-4"
                        style={{ background: "rgba(0, 0, 0, 0.25)", border: "1px solid #3A3A3A" }}
                    >
                        <ChatBot />
                    </div>
                </div>
                <div className="spots-bottom" />
            </SectionLayout>
        </div>
    );
};
