const DATA = {
    name: 'Chia-Ying Ho',
    school: 'Georgian College',
    title: 'Computer Studies Student',
    bio: 'Hello world, I am Chia-Ying Ho. From Tawian 🇹🇼. Graduated from Ming Chuan University with a BS Degree in CS, but realize I am a huge fan of web development. Currently a Computer Studies student @ Georgian College, Ontaio, Canada.  From 2020 January, I have developed a report application with Java Swing as a student developer. In free time, I built an small E-commerce with React and firebase. Also done a small boba shop shopping system with ASP.NET Core 3.1 with Razor pages. Hummmm....💭 That\'s pretty much about me! Feel free to reach out to me on LinkedIn and Github! Look forward to meeting you!😄',
    socialMedias: {
        'linkedIn': 'https://www.linkedin.com/in/chiayingho/',
        'github': 'https://github.com/iosum'
    },
    avatar: '/public/images/avatar.jpg',
    experience: [
        {
            id: 1,
            name: 'Volunteer Application',
            title: 'Report-Writing Lead',
            company: 'Georgian College',
            city: 'Barrie',
            province: 'Ontario',
            country: 'Canada',
            dateFrom: '01/2020',
            dateTo: 'Present',
            responsibility: [
                {
                    id: 2,
                    responsibilityList: 'Implemented Java Table including loading data from MySQL'
                },
                {
                    id: 3,
                    responsibilityList: 'Customized reports with JasperReport library to meet client\'s needs'
                },
                {
                    id: 4,
                    responsibilityList: 'Printed reports to a printer with JasperViewer'
                }
            ],
            tech: [
                {
                    id: 5,
                    language: 'Java'
                },
                {
                    id: 6,
                    language: 'Swing'
                }
            ]
        }
    ],
    projects: [
        {
            id: 7,
            name: 'Crwn Clothing',
            description: 'A small clothing site using React-Redux and firebase.',
            link: 'https://crwn-clothing.chiayingho.com',
            buttonName: 'Click here to play around!'
        },
        {
            id: 8,
            name: 'Boba Shop',
            description: 'A small E-commerce website selling peral milk tea using ASP.NET Core 3.1.',
            link: 'https://github.com/iosum/bobashop',
            buttonName: 'Github'
        }
    ]
};

export default DATA;