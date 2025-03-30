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
		id:"contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Java Developer",
		icon: "./java.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "./web.webp",
	},
	{
		title: "Software Engineer",
		icon: "./creator.webp",
	},
	{
		title: "Cybersecurity Enthusiast",
		icon: "./cyber.webp",
	},
];

const technologies = [
	{
		name: "Java",
		icon: "./tech/java.webp",
	},
	{
		name: "Python",
		icon: "./tech/python.webp",
	},
	{
		name: "HTML",
		icon: "./tech/html.webp",
	},
	{
		name: "CSS",
		icon: "./tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "./tech/javascript.webp",
	},
	{
		name: "SQL",
		icon: "./tech/sql.webp",
	},
	{
		name: "React",
		icon: "./tech/reactjs.webp",
	},
	{
		name: "Next JS",
		icon: "./tech/nextjs.svg",
	},
	{
		name: "Tailwind",
		icon: "./tech/tailwind.webp",
	},
	{
		name: "git",
		icon: "./tech/git.webp",
	},
	{
		name: "flask",
		icon: "./tech/flask.webp",
	},
	{
		name: "docker",
		icon: "./tech/docker.webp",
	},
	{
		name: "android",
		icon: "./tech/android.webp",
	},
];

const experiences = [
	{
		title: "Full Stack Developer Intern",
		company_name: "Basal Analytics",
		icon: "./company/Basal.webp",
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
		image: "./socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/guna-swaroop/",
	},
	{
		id: 2,
		testimonial:
			"Also do check out my Github Profile where I have shared all my Projects.",
		name: "Guna Swaroop ",
		image: "./tech/github.webp",
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
		name: "Iris Virtual Assistant",
		description:
			"A voice-activated virtual assistant built with Python, capable of recognizing commands, responding via text-to-speech, and automating tasks. Utilizes SpeechRecognition and pyttsx3 for seamless interaction.",
		tags: [
			{
				name: "Python",
				color: "blue-text-gradient",
			},
			{
				name: "Java Script",
				color: "green-text-gradient",
			},
		],
		image: "./projectimg/Iris.webp",
		platform: "Wordpress",
		deploy_link: "https://github.com/GN-SR/Iris",
	},
	{
		name: "Java Chess Game",
		description:
			"A functional chess game built in Java with core mechanics like piece movement and checkmate detection. Designed using Java Swing for an interactive and smooth user experience.",
		tags: [
			{
				name: "Java",
				color: "red-text-gradient",
			},
			{
				name: "Swing",
				color: "orange-text-gradient",
			},
			{
				name: "OOP",
				color: "blue-text-gradient",
			},
		],
		image: "./projectimg/Chess.webp",
		platform: "Wordpress",
		deploy_link: "https://github.com/GN-SR/JavaChessGame",
	},
	{
		name: "Flappy Bird Game",
		description:
			"A Java-based Flappy Bird game where players navigate a bird through pipes to achieve the highest score. Showcases real-time rendering, user input handling, and collision detection.",
		tags: [
			{
				name: "Java",
				color: "green-text-gradient",
			},
			{
				name: "Game-development",
				color: "blue-text-gradient",
			},
		],
		image: "./projectimg/Flappybird.webp",
		platform: "Wordpress",
		deploy_link: "https://github.com/GN-SR/FlappyBird",
	},
	{
		name: "Computer Vision",
		description:
			"A project utilizing OpenCV and deep learning for image processing, object detection, and real-time analysis. Designed to solve automation challenges and enhance visual data interpretation.",
		tags: [
			{
				name: "Python",
				color: "blue-text-gradient",
			},
			{
				name: "SQL",
				color: "orange-text-gradient",
			},
			{
				name: "Open-CV",
				color: "green-text-gradient",
			},
			{
				name: "HTML",
				color: "pink-text-gradient",
			},
		],
		image: "./projectimg/ComputerVision.webp",
		platform: "Wordpress",
		deploy_link: "https://github.com/Dhanush0000/Computer_vision",
	},
	{
		name: "Weather App",
		description:
			"A Java-based application that fetches real-time weather data using the OpenWeatherMap API. Features a Swing-based GUI for an interactive and user-friendly experience.",
		tags: [
			{
				name: "Java",
				color: "orange-text-gradient",
			},
			{
				name: "API",
				color: "blue-text-gradient",
			},
			{
				name: "GUI",
				color: "green-text-gradient",
			},
		],
		image: "./projectimg/weather.webp",
		platform: "Wordpress",
		deploy_link: "https://github.com/GN-SR/WeatherApp",
	},
	{
		name: "Note Pad",
		description:
			"Text editor built with Java, with essential functions like opening, editing, saving, and formatting text. Designed with a simple and user-friendly interface. Demonstrates GUI development and file handling.",
		tags: [
			{
				name: "Java",
				color: "blue-text-gradient",
			},
			{
				name: "Swing",
				color: "green-text-gradient",
			},
			{
				name: "GUI",
				color: "orange-text-gradient",
			},
			{
				name: "File-handling",
				color: "yellow-text-gradient",
			},
		],
		image: "./projectimg/Notepad.webp",
		platform: "Wordpress",
		deploy_link: "https://github.com/GN-SR/Java-Notepad",
	},
];

export { services, technologies, experiences, testimonials, projects };
