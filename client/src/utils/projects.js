const Portfolio = {
    img:"/images/portfolio.png",
    id: "portfolio",
    section:"Portfolio",
    href:"http://dustinlamarr.com",
    summary: "",
    tech: ["HTML/CSS","Javascript","React","MongoDB (Atlas)","Bootstrap 5","Express", "Node.js"],
    github: "https://github.com/dustin-lamarr/react-portfolio",
    alt: "react portfolio"
}
const Voter = {
    img: "/images/voter-dashboard.png",
    id: "voter",
    section:"Voter",
    href:"https://lamarr-voter-app.herokuapp.com/",
    summary: "An ongoing project to help people be more informed about how their elected officials are representing them. Currently displays users federal, state, and municipal officials.",
    tech: ["HTML/CSS","Javascript","React", "Node.js", "MongoDB (Atlas)","Passport","Axios","Bootstrap 5","Express","Mongoose","Google Civic API","Pro-Publica Congress API"],
    github: "https://github.com/dustin-lamarr/voter-app",
    alt: "voter dashboard"
}

const Bobby = {
    img:"/images/bobbyfirmino.png",
    id:"bobby",
    section:"bobbyfirmino.com",
    href:"https://bobbyfirmino.com/",
    summary:"Promotional website in conjunction with LFC Utah. Previously built with Handlebars, now converted to serverless Vue SPA, with Vite. Uses Netlify Functions to perform backend API calls for EPL data and Etsy shop data. Currently integrating Etsy listing images. Possible affiliate program with LFC store.",
    tech: ["HTML/CSS","Javascript","Vue","Tailwind CSS","Vite","PL API via RapidAPI", "Etsy API", "Netlify Functions"],
    github: "https://github.com/dustin-lamarr/bobbyfirmino-v2",
    alt: "bobbyfirmino.com homepage"
}

export { Portfolio, Voter, Bobby };