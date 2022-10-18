import your_img_url from './assets/images/coder.webp'
import resume from './assets/resume/resume.pdf'
const logotext = "solohCode";
const meta = {
    title: "solohCode",
    description: "I’m Solomon Ayodele a software engineer _ Full stack developer, currently working in Lagos Nigeria",
};

const introdata = {
    title: "I’m Solomon Ayodele",
    animated: [
        "I love tech",
        "I code functional web apps",
        "I love to solve problems",
        "I design and develop responsive websites",
        "I play video games",
        "i love music"
    ],
    description: "A software engineer that designs and develop functional and responsive web apps, web softwares and mobile apps with secure and reliable technologies (as required).",
    your_img_url,
};

const dataabout = {
    title: "Abit about my self",
    aboutme: "My names are Solomon Ayodele ( solohCode ) and i'm a tech enthusiast, I'm a full time frontend engineer and part time fullstack engineer from Lagos Nigeria. I started my career in tech in the year 2017 and i've been able to design, develop and deliver different categories of responsive and functional websites and apps to different personnel. I've always loved tech since i was 10 and fortunately for me i found myself trading the path. I love solving problems, deep thinking, writing code logics, playing video games, listening to music and so on..., we can get along for you to know more about me by contacting me : ).",
};
const worktimeline = [
    {
        jobtitle: "Frontend Engineer",
        where: "ViralTribe Limited",
        date: "2022",
    },
    {
        jobtitle: "Frontend Engineer",
        where: "Toybeth Systems",
        date: "2022",
    },
    {
        jobtitle: "Frontend Engineer",
        where: "Techend Limited",
        date: "2021",
    },
    {
        jobtitle: "Frontend Developer",
        where: "Techend inc",
        date: "2020",
    },
    {
        jobtitle: "Web Developer",
        where: "TJV Foundation",
        date: "2018",
    },
];

const skills = [
    {
        name: "Web Design & Development",
        value: 100,
    },
    {
        name: "Mobile App Development",
        value: 50,
    },
    {
        name: "UI/UX Design",
        value: 90
    },
    {
        name: "Graphics Design",
        value: 80
    },
    {
        name: "Project Management",
        value: 70
    },
    {
        name: "Frontend Development",
        value: 100
    },
    {
        name: "Version Control System (Git)",
        value: 80
    },
    {
        name: "Fullstack Development",
        value: 50
    },
    {
        name: "Communication",
        value: 100
    }
];

const technologies = [
    {
        name: "HTML",
        value: 100,
    },
    {
        name: "CSS",
        value: 90,
    },
    {
        name: "Javascript",
        value: 90,
    },
    {
        name: "PHP",
        value: 30,
    },
    {
        name: "React JS",
        value: 80,
    },
    {
        name: "Next JS",
        value: 60,
    },
    {
        name: "Bootstrap",
        value: 90,
    },
    {
        name: "Tailwind CSS",
        value: 80,
    },
    {
        name: "SASS",
        value: 90,
    },
    {
        name: "Typescript",
        value: 70,
    },
    {
        name: "Redux",
        value: 50,
    },
    {
        name: "Recoil",
        value: 50,
    },
    {
        name: "Rest API technology (Axios)",
        value: 90,
    },
];

const services = [
    {
        title: "Responsive Web Development",
        description: "I am a type of developer that considers first the responsiveness of every project i lay my hands on, I,ve designed and developed web applications that looks fantastic and shape fit on every device screen ranging.",
    },
    {
        title: "Functional Web Development",
        description: "I love developing functional applications that meets up to every users experiences satisfaction, I,ve developed fully functional applications that exceed users/visitors functionality expectations and works fine on every functionality supporting device screens.",
    },
    {
        title: "Mobile Apps",
        description: "I do Mobile App development, I design and develop good looking and functional mobile application that works on Android, IOS and other devices.",
    },
    {
        title: "UI & UX Design",
        description: "A UI/UX designer, As a developer i need to take note of the physical and unseen displays and structures of how every projects should look and function like so i'll be needing to create, design or read pre-designed layout structure for the project to satisfy users interaction and experience.",
    },
    {
        title: "Graphics Design",
        description: "I do graphics designs and photography, I am very good at designing of graphics contents like Logo designs, Digital banner designs, Digital flyer designs, Motion graphics, Photography and so on.",
    },
    {
        title: "Project Management",
        description: "I do project management as per to ensure time and resource management and accuracy on every particular project i work on, I set milestones and workflow for every of my work as a professional in order not to disappoint my clients.",
    },
    {
        title: "Freelancing",
        description: "I do freelancing, I work on projects from different sources/different clients on and from different platforms."
    }
];

const dataportfolio = [
    {
        img: "https://picsum.photos/400/?grayscale",
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "https://www.wayalinks.com/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "solohcode@gmail.com",
    YOUR_FONE: "(234)70-1709-5720",
    description: meta.description,
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/solomon-ayodele65",
    facebook: "https://facebook.com/solohcode",
    linkedin: "https://linkedin.com/in/solohcode",
    twitter: "https://twitter.com/solohcode",
    youtube: "https://www.youtube.com/channel/UC_pamioKRa1rKBHJ1yOEzvQ",
    instagram: "https://instagram.com/solohcode",
    whatsapp: "https://wa.me/+2349135926572/?text=Good%20day%20my%20name%20is%20_"
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    technologies,
    services,
    resume,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
