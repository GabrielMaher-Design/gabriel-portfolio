const projects = [
    {
        title: "Project 1",
        url: "https://www.behance.net/gallery/XXXXXXXX/Project-1",
        thumbnail: "assets/project1.jpg"
    },
    {
        title: "Project 2",
        url: "https://www.behance.net/gallery/XXXXXXXX/Project-2",
        thumbnail: "assets/project2.jpg"
    }
];

// RENDER PROJECTS
const grid = document.getElementById("projects-grid");

projects.forEach(project => {
    const item = document.createElement("a");
    item.className = "project";
    item.href = project.url;
    item.target = "_blank";

    item.innerHTML = `
        <img src="${project.thumbnail}" />
        <div class="project-title">${project.title}</div>
    `;

    grid.appendChild(item);
});
