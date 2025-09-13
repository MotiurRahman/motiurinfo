const MobileAppData = [
  {
    title: "X•Channels",
    playStoreUrl: "",
    appleStoreUrl: "https://apps.apple.com/us/app/x-channels/id6503675859",
    technology: "iOS | Swift | Swift UI",
  },
  {
    title: "X•News",
    playStoreUrl: "",
    appleStoreUrl: "https://apps.apple.com/us/app/x-news/id6746671202",
    technology: "iOS | Swift | Swift UI",
  },
  {
    title: "X•Music",
    playStoreUrl: "",
    appleStoreUrl: "https://apps.apple.com/us/app/x-news/id6751110006",
    technology: "iOS | Swift | Swift UI",
  },
  {
    title: "Password Manager",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.bd.PasswordManagerPro",
    appleStoreUrl: "",
    technology: "Cross Platform Titanium (iOS, Android)",
  },
  {
    title: "Age Calculate",
    playStoreUrl:
      "https://play.google.com/store/apps/dev?id=7955052953183373879",
    appleStoreUrl: "",
    technology: "Native Android (Java)",
  },
  {
    title: "Veosat wo",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.abalittechnologies.veosatcon",
    appleStoreUrl: "https://apps.apple.com/us/app/veosat-wo/id1479817407",
    technology: "Cross Platform Titanium (iOS, Android)",
  },
];

const mobileAppData = document.getElementById("mobileApp");

MobileAppData.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("col-12", "col-md-6", "col-lg-4");
  projectCard.style = "margin-bottom:20px";

  // dynamically build store links only if available
  let links = "";
  if (project.playStoreUrl) {
    links += `<a target="_blank" href="${project.playStoreUrl}" class="card-link">Google Play Store</a>`;
  }
  if (project.appleStoreUrl) {
    if (links) links += " | "; // add separator if both exist
    links += `<a target="_blank" href="${project.appleStoreUrl}" class="card-link">Apple Store</a>`;
  }
  if (project.sourceUrl) {
    links += `<a target="_blank" href="${project.sourceUrl}" class="card-link">Source</a>`;
  }

  projectCard.innerHTML = `
  <div class="card bg-success">
    <div class="card-body"  style="height:120px; padding: 10px">
      <h5 class="card-title">${project.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${project.technology}</h6>
      ${links}
    </div>
  </div>
`;

  mobileAppData.appendChild(projectCard);
});
