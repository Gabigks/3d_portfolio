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
	amo,
	trafegus,
	desbravador,
	brisa,
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
		title: "Estágio de desenvolvedor",
		company_name: "Amo",
		icon: amo,
		iconBg: "#383E56",
		date: "Outubro 2021 - Dezembro 2021",
		points: [
			"Adquiri conhecimentos em Dart, Flutter.",
			"Entedimento do funcionamento interno dos principais serviços.",
			"Estudo dos produtos Amo Ofertas, Amo Delivery e o Amo GO.",
		],
	},
	{
		title: "Estágio de desenvolvedor",
		company_name: "Trafegus",
		icon: trafegus,
		iconBg: "#E6DEDD",
		date: "Maio 2023 - Outubro 2023",
		points: [
			"Estudo de programação web -> HTML, CSS e JS.",
			"Estudo do framework híbrido ionic.",
			"Desenvolvimento no produto mobile da empresa.",
		],
	},
	{
		title: "Estágio de desenvolvedor",
		company_name: "Desbravador Software",
		icon: desbravador,
		iconBg: "#383E56",
		date: "Novembro 2023 - Hoje",
		points: [
			"Parte inicial do estágio estudando banco de dados e relembrando conceitos de programação web.",
			"Implementação de uma API em nodejs para assinar documentos digitais, utilizando a API base do docusign.",
			"Estudo da ferramenta low-code de automação n8n.",
			"Integração de API's do principais produtos da empresa utilizando o n8n.",
		],
	},
	{
		title: "Residência em TIC",
		company_name: "BRISA",
		icon: brisa,
		iconBg: "#E6DEDD",
		date: "Fevereiro 2024 - Hoje",
		points: [
			"Após parte inicial de nivelamento de novembro de 2023 até janeiro de 2024, em fevereiro iniciou o projeto.",
			"Escolha dos grupos para implementar um projeto para alguma empresa parceira, no nosso caso a M8.",
			"Desenvolvimento de um GIS para prospecção de leads para a empresa.",
			"Projeto fullstack sendo desenvolvido o front em react e o back em python com postgres para o banco.",
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
