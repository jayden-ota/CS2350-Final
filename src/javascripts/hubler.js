import faculty from "../faculty.json"

const details = faculty.find((p) => p.name == "Daniel S. Hubler, Ph.D.")

document.title = details.name
document.querySelector(".dropdown-menu").innerHTML = faculty.reduce((acc, p) => {
  return acc + `<li><a href="${p.webpage} class="dropdown-item">${p.name}</a></li>`
}, "")

document.querySelector("#room").innerHTML = details.office
document.querySelector("#email").attributes.href.value = "mailto:" + details.email
document.querySelector("#phone").attributes.href.value = "tel:+" + details.phone
document.querySelector("img").attributes.src.value = details.headshotFile
document.querySelector("img").attributes.alt.value = details.name
document.querySelector("#courses-table").children[1].innerHTML = details.courses.reduce((acc, course) => {
  return acc + `<tr><td>${course.identifier}</td><td>${course.name}</td><td>${course.description}</td><tr>`
}, "")
document.querySelector("#article-list").innerHTML = details.articles.reduce((acc, article) => {
  return acc + `<li class="list-group-item">${article}</li>`
}, "")
