function addCards(file_name, selector) {
  /* 
  faculty.json
  staff.json
   */
  fetch(file_name)
    .then((res) => {
      if (res.ok) return res.json()
    })
    .then((faculty) => {
      // Add cards to landing page
      let html = ""
      for (const p of faculty) {
        html += `
        <div class="card p-0">
          <img src="${p.headshotFile}" class="card-img-top" alt="${p.name}" />
          <div class="card-body">
            <h5 class="card-title fw-bold">${p.name}</h5>
            <!-- <p class="card-text">filler</p> -->
            <div class="d-grid gap-1">
              <a href="${p.webpage}" class="btn btn-primary"><i class="bi bi-globe"></i>&nbsp;Website</a>
              <a href="tel:+${p.phone}" class="btn btn-primary"><i class="bi bi-telephone"></i>&nbsp;Phone</a>
              <a href="mailto:${p.email}" class="btn btn-primary"><i class="bi bi-envelope"></i>&nbsp;Email</a>
            </div>
          </div>
        </div>`
      }
      document.querySelector(selector).innerHTML = html
    })
    .catch((e) => console.log(e))
}

function addLinksToNav() {
  fetch("./faculty.json")
    .then((res) => {
      if (res.ok) return res.json()
    })
    .then((faculty) => {
      let html = ""

      for (let p of faculty) {
        html += `<li><a class="dropdown-item" href=${p.webpage}>${p.name}</a></li>`
      }

      document.querySelector(".dropdown-menu").innerHTML = html
    })
    .catch((e) => console.log(e))
}

addLinksToNav()
addCards("./faculty.json", "#faculty-section")
