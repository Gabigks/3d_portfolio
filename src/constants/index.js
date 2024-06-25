import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	tailwind,
	nodejs,
	git,
	n8n,
	manychat,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	leads,
	n8nproject,
	docusign,
	threejs,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "Sobre",
	},
	{
		id: "work",
		title: "Experiências",
	},
	{
		id: "contact",
		title: "Contato",
	},
];

const services = [
	{
		title: "Desenvolvedor Web",
		icon: web,
	},
	{
		title: "Desenvolvedor Backend",
		icon: mobile,
	},
	{
		title: "Ferramentas Low-code",
		icon: backend,
	},
	{
		title: "Automações",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "PostgreSQL",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "docker",
		icon: docker,
	},
	{
		name: "n8n",
		icon: n8n,
	},
	{
		name: "manychat",
		icon: manychat,
	},
];

const experiences = [
	{
		title: "React.js Developer",
		company_name: "Starbucks",
		icon: starbucks,
		iconBg: "#383E56",
		date: "March 2020 - April 2021",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "React Native Developer",
		company_name: "Tesla",
		icon: tesla,
		iconBg: "#E6DEDD",
		date: "Jan 2021 - Feb 2022",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Web Developer",
		company_name: "Shopify",
		icon: shopify,
		iconBg: "#383E56",
		date: "Jan 2022 - Jan 2023",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Full stack Developer",
		company_name: "Meta",
		icon: meta,
		iconBg: "#E6DEDD",
		date: "Jan 2023 - Present",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"Achei que era impossível fazer um site tão bonito quanto o nosso produto, mas Gabriel provou que eu estava errada.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"Nunca conheci um desenvolvedor web que realmente se preocupasse com o sucesso de seus clientes como o Gabriel.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"Depois que Gabriel otimizou nosso site, nosso tráfego aumentou 50%. Não podemos agradecê-los o suficiente!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Empresas",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Integrações de APIs com n8n",
		description:
			"Integrações entre APIs da empresa Desbravador utilizando a ferramenta de automação low-code n8n",
		tags: [
			{
				name: "n8n",
				color: "blue-text-gradient",
			},
			{
				name: "postgresql",
				color: "green-text-gradient",
			},
			{
				name: "javascript",
				color: "pink-text-gradient",
			},
		],
		image: n8nproject,
		source_code_link: "https://github.com/",
	},
	{
		name: "Docusign API",
		description:
			"API para solicitar assinaturas remotamente de uma requsição passando os emails deos assinantes e conteúdo do documento em html",
		tags: [
			{
				name: "nodejs",
				color: "blue-text-gradient",
			},
			{
				name: "postgresql",
				color: "green-text-gradient",
			},
			{
				name: "docusignapi",
				color: "pink-text-gradient",
			},
		],
		image: docusign,
		source_code_link: "https://github.com/",
	},
	{
		name: "GIS - Captação de Leads",
		description:
			"Projeto GIS fullstack para captação de leads para a empresa m8",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "postgresql",
				color: "green-text-gradient",
			},
			{
				name: "python",
				color: "pink-text-gradient",
			},
		],
		image: leads,
		source_code_link: "https://github.com/",
	},
];

export { services, technologies, experiences, testimonials, projects };
