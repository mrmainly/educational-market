export type projectType = "base" | "stock";

export interface includeType {
    title: string;
    text: string;
}

export interface projectDTO {
    title: string;
    description: string;
    shortDesc: string;
    price: number;
    image: string;
    type: projectType;
    included: includeType[];
    why_choose: includeType[];
    id: number;
}

export const projectList: projectDTO[] = [
    {
        title: "НАБОР УМНАЯ ТЕПЛИЦА",
        description:
            "Погрузитесь в мир современных технологий с нашим уникальным обучающим набором 'Умная теплица'! Этот комплект идеально подходит как для начинающих, так и для опытных энтузиастов, желающих освоить основы Интернета вещей (IoT) и автоматизации",
        shortDesc: "Погрузитесь в мир современных технологий с нашим уникальным обучающим набором 'Умная теплица'!",
        price: 69000,
        image: "/img/tepl.jpg",
        type: "base",
        id: 1,
        included: [
            {
                title: "Компоненты для сборки",
                text: "Все необходимые детали для создания вашей собственной умной теплицы, включая датчики температуры, влажности, освещения, а также контроллеры и исполнительные механизмы.  ",
            },
            {
                title: "Инструкции по сборке",
                text: "Пошаговые руководства, которые помогут вам собрать и настроить теплицу, даже если вы никогда раньше не работали с электроникой.  ",
            },
            {
                title: "Курс обучения",
                text: "Доступ к онлайн-курсу, который охватывает основы IoT, принципы работы с датчиками и управление устройствами через мобильное приложение.",
            },
            {
                title: "Проекты и задания",
                text: "Практические проекты, которые помогут вам закрепить знания и применить их на практике, включая автоматизацию полива, управление освещением и мониторинг условий в теплице.  ",
            },
            {
                title: "Поддержка сообщества",
                text: "Доступ к форуму и чату, где вы можете общаться с другими участниками, делиться опытом и получать помощь от экспертов.  ",
            },
        ],
        why_choose: [
            {
                title: "Инновационное обучение",
                text: "Мы объединяем теорию и практику, чтобы вы могли не только изучать, но и создавать.  - **Гибкость и удобство**: Учитесь в своем темпе, где и когда вам удобно, с доступом к курсу 24/7.",
            },
            {
                title: "Гибкость и удобство",
                text: "Учитесь в своем темпе, где и когда вам удобно, с доступом к курсу 24/7.  ",
            },
            {
                title: "Развитие навыков",
                text: "Освойте востребованные навыки в области IoT, которые помогут вам в будущем как в учебе, так и в карьере.  ",
            },
        ],
    },
    {
        title: "НАБОР УМНЫЙ ДОМ",
        description:
            "Создайте свой идеальный дом будущего с нашим инновационным обучающим набором 'Умный дом'! Этот комплект не только познакомит вас с основами автоматизации, но и даст возможность реализовать собственные идеи в области Интернета вещей (IoT).",
        shortDesc: "Создайте свой идеальный дом будущего с нашим инновационным обучающим набором 'Умный дом'!",
        price: 69000,
        image: "/img/dom.jpg",
        type: "base",
        id: 2,
        included: [
            {
                title: "Уникальные компоненты",
                text: 'В набор входят современные устройства, такие как умные датчики, камеры, реле и контроллеры, которые позволят вам создать полноценную систему "умного дома"',
            },
            {
                title: "Интерактивные инструкции",
                text: "Вместо традиционных руководств, мы предлагаем интерактивные видеоуроки, которые шаг за шагом проведут вас через процесс установки и настройки.",
            },
            {
                title: "Курс с практическими заданиями",
                text: 'Доступ к онлайн-курсу, который включает в себя не только теорию, но и практические задания, которые помогут вам лучше понять, как работает "умный дом" и как его можно адаптировать под ваши нужды',
            },
            {
                title: "Проектные идеи",
                text: "Мы предлагаем множество идей для проектов, которые вы сможете реализовать, включая автоматизацию освещения, управление климатом и даже системы безопасности.  ",
            },
            {
                title: "Поддержка и сообщество",
                text: "Присоединяйтесь к нашему активному сообществу, где вы сможете делиться своими успехами, задавать вопросы и получать советы от других участников и экспертов.  ",
            },
        ],
        why_choose: [
            {
                title: "Современный подход",
                text: "Мы используем новейшие технологии и методики обучения, чтобы сделать процесс увлекательным и доступным.",
            },
            {
                title: "Гибкость обучения",
                text: "Учитесь в своем темпе и в удобное для вас время, с доступом к материалам 24/7.  ",
            },
            {
                title: "Развитие навыков",
                text: "Освойте актуальные навыки в области IoT и автоматизации, которые пригодятся вам как в личной жизни, так и в профессиональной деятельности.",
            },
        ],
    },
    {
        title: "НАБОР РОБОМЕХ",
        description:
            'Откройте для себя захватывающий мир робототехники с нашим новым обучающим набором "Робомех"! Этот комплект создан для тех, кто хочет не только узнать о роботах, но и самостоятельно создать своего уникального робота, который сможет выполнять различные задачи.  ',
        shortDesc: 'Откройте для себя захватывающий мир робототехники с нашим новым обучающим набором "Робомех"',
        price: 69000,
        image: "/img/robot.jpg",
        type: "base",
        id: 3,
        included: [
            {
                title: "Модульные компоненты",
                text: "В набор входят разнообразные детали, такие как моторы, датчики, контроллеры и модули связи, которые позволят вам собрать робота любой сложности.",
            },
            {
                title: "Интерактивные обучающие материалы",
                text: "Вместо традиционных инструкций, мы предлагаем вам доступ к интерактивным урокам и видеогидом, которые помогут вам на каждом этапе сборки и программирования.",
            },
            {
                title: "Курс с практическими заданиями",
                text: "Онлайн-курс, который включает в себя не только теорию, но и множество практических заданий, позволяющих вам применять полученные знания на практике.",
            },
            {
                title: "Творческие проекты",
                text: "Мы предлагаем идеи для уникальных проектов, таких как создание робота-игрушки, автоматизированного помощника или даже простого робота для выполнения задач.  ",
            },
            {
                title: "Поддержка сообщества",
                text: "Присоединяйтесь к нашему активному сообществу, где вы сможете обмениваться опытом, задавать вопросы и получать советы от других участников и экспертов.  ",
            },
        ],
        why_choose: [
            {
                title: "Современные технологии",
                text: "Мы используем последние достижения в области робототехники и обучения, чтобы сделать процесс увлекательным и доступным для всех.  ",
            },
            {
                title: "Гибкость обучения",
                text: "Учитесь в своем темпе и в любое время, с доступом к материалам 24/7.  ",
            },
            {
                title: "Развитие навыков",
                text: "Освойте навыки, которые будут полезны в будущем, как в учебе, так и в карьере.  ",
            },
        ],
    },

    {
        title: "НАБОР УМНАЯ ТЕПЛИЦА АКЦИОННАЯ",
        description:
            "Погрузитесь в мир современных технологий с нашим уникальным обучающим набором 'Умная теплица'! Этот комплект идеально подходит как для начинающих, так и для опытных энтузиастов, желающих освоить основы Интернета вещей (IoT) и автоматизации",
        shortDesc: "Погрузитесь в мир современных технологий с нашим уникальным обучающим набором 'Умная теплица'!",
        price: 49000,
        image: "/img/tepl.jpg",
        type: "stock",
        id: 7,
        included: [
            {
                title: "Компоненты для сборки",
                text: "Все необходимые детали для создания вашей собственной умной теплицы, включая датчики температуры, влажности, освещения, а также контроллеры и исполнительные механизмы.  ",
            },
            {
                title: "Инструкции по сборке",
                text: "Пошаговые руководства, которые помогут вам собрать и настроить теплицу, даже если вы никогда раньше не работали с электроникой.  ",
            },
            {
                title: "Курс обучения",
                text: "Доступ к онлайн-курсу, который охватывает основы IoT, принципы работы с датчиками и управление устройствами через мобильное приложение.",
            },
            {
                title: "Проекты и задания",
                text: "Практические проекты, которые помогут вам закрепить знания и применить их на практике, включая автоматизацию полива, управление освещением и мониторинг условий в теплице.  ",
            },
            {
                title: "Поддержка сообщества",
                text: "Доступ к форуму и чату, где вы можете общаться с другими участниками, делиться опытом и получать помощь от экспертов.  ",
            },
        ],
        why_choose: [
            {
                title: "Инновационное обучение",
                text: "Мы объединяем теорию и практику, чтобы вы могли не только изучать, но и создавать.  - **Гибкость и удобство**: Учитесь в своем темпе, где и когда вам удобно, с доступом к курсу 24/7.",
            },
            {
                title: "Гибкость и удобство",
                text: "Учитесь в своем темпе, где и когда вам удобно, с доступом к курсу 24/7.  ",
            },
            {
                title: "Развитие навыков",
                text: "Освойте востребованные навыки в области IoT, которые помогут вам в будущем как в учебе, так и в карьере.  ",
            },
        ],
    },
    {
        title: "НАБОР УМНЫЙ ДОМ АКЦИОННАЯ",
        description:
            "Создайте свой идеальный дом будущего с нашим инновационным обучающим набором 'Умный дом'! Этот комплект не только познакомит вас с основами автоматизации, но и даст возможность реализовать собственные идеи в области Интернета вещей (IoT).",
        shortDesc: "Создайте свой идеальный дом будущего с нашим инновационным обучающим набором 'Умный дом'!",
        price: 49000,
        image: "/img/dom.jpg",
        type: "stock",
        id: 8,
        included: [
            {
                title: "Уникальные компоненты",
                text: 'В набор входят современные устройства, такие как умные датчики, камеры, реле и контроллеры, которые позволят вам создать полноценную систему "умного дома"',
            },
            {
                title: "Интерактивные инструкции",
                text: "Вместо традиционных руководств, мы предлагаем интерактивные видеоуроки, которые шаг за шагом проведут вас через процесс установки и настройки.",
            },
            {
                title: "Курс с практическими заданиями",
                text: 'Доступ к онлайн-курсу, который включает в себя не только теорию, но и практические задания, которые помогут вам лучше понять, как работает "умный дом" и как его можно адаптировать под ваши нужды',
            },
            {
                title: "Проектные идеи",
                text: "Мы предлагаем множество идей для проектов, которые вы сможете реализовать, включая автоматизацию освещения, управление климатом и даже системы безопасности.  ",
            },
            {
                title: "Поддержка и сообщество",
                text: "Присоединяйтесь к нашему активному сообществу, где вы сможете делиться своими успехами, задавать вопросы и получать советы от других участников и экспертов.  ",
            },
        ],
        why_choose: [
            {
                title: "Современный подход",
                text: "Мы используем новейшие технологии и методики обучения, чтобы сделать процесс увлекательным и доступным.",
            },
            {
                title: "Гибкость обучения",
                text: "Учитесь в своем темпе и в удобное для вас время, с доступом к материалам 24/7.  ",
            },
            {
                title: "Развитие навыков",
                text: "Освойте актуальные навыки в области IoT и автоматизации, которые пригодятся вам как в личной жизни, так и в профессиональной деятельности.",
            },
        ],
    },
];
