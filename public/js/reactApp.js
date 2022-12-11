const reactProjectsData = [
  {
    title: "Second Hand Bike Buy and Sell",
    sourceUrl: "https://github.com/MotiurRahman/SH-bike-client",
    serverUrl: "https://github.com/MotiurRahman/-SH-bike-server",
    liveSiteLink: "https://sh-bike.web.app",
    technology: "HTML5 | CSS3 | Tailwind | React | Express | MongoDB",
  },
  {
    title: "Motiur's Chember",
    sourceUrl: "https://github.com/MotiurRahman/motiur-s-chember-client",
    serverUrl: "https://github.com/MotiurRahman/-motiur-s-chember-server",
    liveSiteLink: "https://motiur-chember.web.app/",
    technology: "HTML5 | CSS3 | Tailwind | React | Express | MongoDB",
  },

  {
    title: "E-Learning",
    sourceUrl: "https://github.com/MotiurRahman/e-learning-client",
    serverUrl: "https://github.com/MotiurRahman/-e-learning-server",
    liveSiteLink: "https://e-react-d4426.web.app/",
    technology: "HTML | CSS | Bootstrap | React",
  },
  {
    title: "Online Exam Center",
    sourceUrl: "https://github.com/MotiurRahman/online-exam-center",
    serverUrl: "",
    liveSiteLink: "https://genuine-sable-2ed448.netlify.app/",
    technology: "HTML5 | CSS3 | Bootstrap-5 | React",
  },
  {
    title: "Fruits Lover Club",
    sourceUrl: "https://github.com/MotiurRahman/Fruits-Lover-Club",
    serverUrl: "",
    liveSiteLink: "https://inspiring-cajeta-b08995.netlify.app/",
    technology: "HTML5 | CSS3 | Bootstrap-5 | React",
  },
];
const jsProjectsData = [
  {
    title: "Speed Typer",
    sourceUrl: "https://github.com/MotiurRahman/Speed-Monster",
    serverUrl: "",
    liveSiteLink: "https://tangerine-cactus-f408c3.netlify.app/",
    technology: "HTML5 | CSS3 | Bootstrap5 | JavaScript",
  },
  {
    title: "News Portal",
    sourceUrl: "https://github.com/MotiurRahman/New-Portal",
    serverUrl: "",
    liveSiteLink: "https://melodious-macaron-c7db97.netlify.app/",
    technology: "HTML5 | CSS3 | Bootstrap5 | JavaScript",
  },
  {
    title: "Food Lover",
    sourceUrl: "https://github.com/MotiurRahman/Food_Lover",
    serverUrl: "",
    liveSiteLink: "https://steady-fox-2b490b.netlify.app/",
    technology: "HTML5 | CSS3 | Bootstrap5 | JavaScript",
  },
  {
    title: "Digital Learning",
    sourceUrl: "https://github.com/MotiurRahman/edTech",
    serverUrl: "",
    liveSiteLink: "https://lovely-sunflower-4e019f.netlify.app/ ",
    technology: "HTML5 | CSS3 | Bootstrap5",
  },
  {
    title: "Qater World Cup",
    sourceUrl: "https://github.com/MotiurRahman/qatar_world_cup",
    serverUrl: "",
    liveSiteLink: "https://motiurrahman.github.io/qatar_world_cup",
    technology: "HTML5 | CSS3",
  },
  {
    title: "eProverty",
    sourceUrl: "https://github.com/MotiurRahman/eproverty",
    serverUrl: "",
    liveSiteLink: "https://motiurrahman.github.io/eproverty/",
    technology: "HTML5 | CSS3",
  },
];
const reactProjects = document.getElementById("reactApp");
const jsProjects = document.getElementById("htmlcssPorject");

// add react projects
reactProjectsData.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("col-12", "col-md-6", "col-lg-4");
  projectCard.style = "margin-bottom:20px";
  projectCard.innerHTML = `<div class="card bg-success" style="height:120px;">
 <div class="card-body" style="padding-top:10px;">
   <h5 class="card-title">${project.title}</h5>
   <h6 class="card-subtitle mb-2 text-muted">${project.technology}</h6>
   <a target="_blank" href="${
     project.liveSiteLink
   }" class="card-link">Live Site </a> |
   <a target="_blank" href="${
     project.sourceUrl
   }" class="card-link">Details & Client Code</a> |
   ${
     project?.serverUrl
       ? `<a target="_blank" href="${project?.serverUrl}" class="card-link">Details & Server Code</a>`
       : ""
   }
   
   </div>
</div>
`;
  reactProjects.appendChild(projectCard);
});

// add javaScript projects
jsProjectsData.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("col-12", "col-md-6", "col-lg-4");
  projectCard.style = "margin-bottom:20px";
  projectCard.innerHTML = `<div class="card bg-success" style="height:120px;">
   <div class="card-body" style="padding-top:10px;">
     <h5 class="card-title">${project.title}</h5>
     <h6 class="card-subtitle mb-2 text-muted">${project.technology}</h6>
     <a target="_blank" href="${
       project.liveSiteLink
     }" class="card-link">Live Site </a> |
     <a target="_blank" href="${
       project.sourceUrl
     }" class="card-link">Details & Client Code</a> |
     ${
       project?.serverUrl
         ? `<a target="_blank" href="${project?.serverUrl}" class="card-link">Details & Server Code</a>`
         : ""
     }
     
     </div>
  </div>
  `;
  jsProjects.appendChild(projectCard);
});
