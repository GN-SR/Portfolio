export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "UI/UX Designer",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "App Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
		title: "Full Stack Developer Intern",
		company_name: "Basal Analytics",
		icon: "/company/Basal.webp",
		iconBg: "#FFFFFF",
		date: "Sep 2024 -  Dec 2024",
		points: [
			"Real-Time Development: Built a product classification and inventory management system using Flask and SQLite3.",
			"Seamless Integration: Ensured smooth frontend-backend interaction for an intuitive user experience.",
			"Efficient Database Management: Implemented real-time inventory tracking and updates to enhance operational efficiency.",
			"Hands-on Experience: Strengthened full-stack development skills by working on a practical, real-world project."
		],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"Check out my LinkedIn profile for more information about my experience and skills.",
		name: "Guna Swaroop",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/guna-swaroop/",
	},
	{
		id: 2,
		testimonial:
			"Also do check out my Github Profile where I have shared all my Projects.",
		name: "Guna Swaroop ",
		image: "/tech/github.webp",
		link: "https://github.com/GN-SR",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
	{
		name: "A.V.M Auto Portfolio",
		description:
			"Designed and developed a Java Chess Game",
		tags: [
			{
				name: "wordpress",
				color: "blue-text-gradient",
			},
			{
				name: "google-translate",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/avm.webp",
		platform: "Wordpress",
		deploy_link: "https://avmauto.in/",
	},
	{
		name: "Java Chess Game",
		description:
			"Designed and developed a Java Chess Game.",
		tags: [
			{
				name: "Java",
				color: "red-text-gradient",
			},
			{
				name: "Swing",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/Chess.webp",
		source_code_link: "https://github.com/GN-SR/JavaChessGame",
		platform: "Web",
		deploy_link: "https://github.com/GN-SR/JavaChessGame",
	},
	{
		name: "HooBank",
		description:
			"A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
		tags: [
			{
				name: "next",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/hoobank.webp",
		source_code_link: "https://github.com/omunite215/hoobank",
		platform: "Vercel",
		deploy_link: "https://hoobankbyom.netlify.app/",
	},
	{
		name: "MERN Dashboard",
		description:
			" Designed and developed a visually appealing and user-friendly Data Analytics Dashboard using MERN",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "orange-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "Express",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/mern.png",
		source_code_link: "https://github.com/omunite215/Project_MERN-Dashboard",
		platform: "Web",
		deploy_link: "https://admin-frontend-r705.onrender.com/",
	},
	{
		name: "Metaverse Web 3.0",
		description:
			"A Modern UI/UX Landing Page using Framer Motion and TailwindCSS with a feel and looks of Web 3.0",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "framer-motion",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/metaverse.png",
		source_code_link: "https://github.com/omunite215/Project_Metaverse",
		platform: "Vercel",
		deploy_link: "https://project-metaverse-beta.vercel.app/",
	},
	{
		name: "Issue Tracker",
		description:
			"A Next.JS Full Stack Issue Tracker made using Next.Js, ShadCN UI, Prisma, mySQL with latest features like Next.JS Server Components, and Serverless features.",
		tags: [
			{
				name: "next",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "shadCN",
				color: "orange-text-gradient",
			},
			{
				name: "mySQL",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/issuetracker.png",
		source_code_link: "https://github.com/omunite215/Project_Issue-Tracker",
		platform: "Vercel",
		deploy_link: "https://project-issue-tracker.vercel.app/",
	},
];

export { services, technologies, experiences, testimonials, projects };
