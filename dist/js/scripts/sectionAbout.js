const softSkillsList = document.getElementById("soft-skills-list");
softSkills.forEach((skill) => {
  const listItem = document.createElement("li");
  listItem.textContent = skill;
  softSkillsList.appendChild(listItem);
});
const coursesTable = document.getElementById("courses-table");
let tableContent = `
<thead class="bg-primary text-center dark:bg-d dark:text-white">
  <tr>
    <th rowspan="2">Course Name</th>
    <th rowspan="2">Course location</th>
    <th colspan="2">Duration</th>
    <th rowspan="2">Certificate</th>
  </tr>
  <tr>
    <th>Start Date</th>
    <th>End Date</th>
  </tr>
</thead>
<tbody class="text-center">
`;
courses.forEach((course) => {
  tableContent += `
  <tr>
    <td class="border border-primary">${course.name}</td>
    <td class="border border-primary">${course.location}</td>
    <td class="border border-primary">${course.startDate}</td>
    <td class="border border-primary">${course.endDate}</td>
    <td class="border border-primary">
      <a href="${course.certificate}" target="_blank" class="text-primary hover:text-d">
        Certificate
      </a>
    </td>
  </tr>
  `;
});
tableContent += "</tbody>";
coursesTable.innerHTML = tableContent;
