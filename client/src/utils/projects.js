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
    href:"http://bobbyfirmino.com/",
    summary:"Promotional website in conjunction with LFC Utah. Currently renders a random gif based on an api search from the clicked team name. Future development will include transition to hosted MongoDB-Atlas database to allow users to upload gifs.",
    tech: ["HTML/CSS","Javascript", "Node.js", "Handlebars","Sequelize/MySQL","jQuery","Express","UI Kit","Giphy Search API"],
    github: "https://github.com/dustin-lamarr/bobbyfirmino",
    alt: "bobbyfirmino.com homepage"
}

const Binger = {
    img:"/images/binger.png",
    id:"binger",
    section:"Binger",
    href:"https://dustin-lamarr.github.io/binger/",
    summary: "Binger takes user inputs and tracks the number of hours they have watched movies or television shows and stores the inputs on local storage. Future development includes conversion to PWA.",
    tech: ["HTML/CSS","Javascript", "Node.js", "Handlebars","jQuery","Bootstrap","TMDB Trending Movies / Search API"],
    github: "https://github.com/dustin-lamarr/binger",
    alt: "binger homepage"
}

export { Portfolio, Voter, Bobby, Binger };