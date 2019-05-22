const listOfTopics = [
  {title: "Arrays", problems: ["aba", "adad"]}, 
  {title: "Graph", problems: ["aba"]}, 
  {title: "Recursion", problems: ["aba"]}, 
  {title: "Stack", problems: ["aba"]}, 
  {title: "Bit Manipulation", problems: ["aba"]}, 
  {title: "Linked Lists", problems: ["aba"]}, 
  {title: "String", problems: ["adadadad"]}
];
const navbar = document.getElementById("navagation-bar");
for (let i = 0; i < listOfTopics.length; i++) {
  const li = document.createElement("li");
  const select = document.createElement("select");
  const firstOption = document.createElement("option");
  firstOption.textContent = listOfTopics[i].title;
  select.appendChild(firstOption);
  listOfTopics[i].problems.forEach(prob => {
    const option = document.createElement("option");
    option.value = prob;
    option.textContent = prob;
    select.appendChild(option);
  });
  li.appendChild(select);
  navbar.appendChild(li);
}