const container = document.getElementById("projects-container");

if (!container || typeof projectData === "undefined") {
  console.error("Missing #projects-container or projectData");
} else {

  // Access the nested projects object
  const projects = projectData.projects || projectData;
  
  // Use project_order if it exists, otherwise fall back to numeric sort
  const projectIds = projectData.project_order 
    ? projectData.project_order 
    : Object.keys(projects).filter(key => key !== 'project_order').sort((a,b) => a - b);

  projectIds.forEach(id => {

    const project = projects[id];
    
    // Skip if project doesn't exist (in case project_order references missing projects)
    if (!project) {
      console.warn(`Project ${id} in project_order not found in projectData`);
      return;
    }

    const projectHTML = `
      <div class="project" data-project-id="${id}">
        
        ${project.html_badge
          ? `<div class="project-badge">${project.html_badge}</div>`
          : ""
        }

        <img src="${project.html_image}" alt="${project.title}">

        <h4>${project.html_h4 || project.title}</h4>

        <p>${project.html_description || project.description || ""}</p>

      </div>
    `;

    container.insertAdjacentHTML("beforeend", projectHTML);

  });

}
