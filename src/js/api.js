const apiapp = document.getElementById('api')

const tablecontainer = document.createElement('id')
tablecontainer.setAttribute('class', 'container')


// <div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div>




var request = new XMLHttpRequest()

request.open('GET', 'https://api.github.com/users/ly0708/repos', true)

request.onload = function(){

    var data = JSON.parse(this.response)   

    console.log(data)

    if (request.status >= 200 && request.status < 400){

        // //Creating a table
        const table = document.createElement('table')
        table.setAttribute('class', 'table')

        //Table header
        const headername = document.createElement('th')
        headername.setAttribute('scope', 'col')
        const hname = "NAME"
        headername.innerHTML = hname

        const headerlanguage = document.createElement('th')
        headerlanguage.setAttribute('scope', 'col')
        const hlanguage = "LANGAUGE"
        headerlanguage.innerHTML = hlanguage

        const headerdescription = document.createElement('th')
        headerdescription.setAttribute('scope', 'col')
        const hdescription = "DESCRIPTION"
        headerdescription.innerHTML = hdescription

        const headerlink = document.createElement('th')
        headerlink.setAttribute('scope', 'col')
        const hlink = "LINK"
        headerlink.innerHTML = hlink

        //Header row 
        const headers = document.createElement('tr')
        headers.setAttribute('id', 'tableheader')

        headers.appendChild(headername)
        headers.appendChild(headerlanguage)
        headers.appendChild(headerdescription)
        headers.appendChild(headerlink)

        //Adding header row to table
        table.appendChild(headers)

        data.forEach(repos => {


            // const card = document.createElement('div')
            // card.setAttribute('class', 'card')

            // const card_body = document.createElement('div')
            // card_body.setAttribute('class', 'card-body')
            // card.appendChild(card_body)

            // const card_title = document.createElement('h5') // name
            // card_title.setAttribute('class', 'card-title')
            // card_title.textContent = repos.name
            // card_body.appendChild(card_title)

            // const card_substile = document.createElement('h6') // langauge
            // card_substile.setAttribute('class', 'card-subtitle mb-2 text-muted')
            // card_substile.textContent = repos.language
            // card_body.appendChild(card_substile)

            // const text = document.createElement('p') // desciption
            // text.setAttribute('class', 'card-text')
            // text.textContent = repos.description
            // card_body.appendChild(text)

            // const link = document.createElement('a') // link
            // link.setAttribute('href', repos.html_url)
            // link.textContent = repos.html_url
            // card_body.appendChild(link)


            // table.appendChild(card)

            //Elements
            const projectname = document.createElement('h6')
            projectname.textContent = repos.name
            const namecomp = document.createElement('td')
            projectname.setAttribute('id', 'projectname')
            namecomp.appendChild(projectname)

            const projectlanguage = document.createElement('p')
            projectlanguage.textContent = repos.language
            const languagecomp = document.createElement('td')
            projectlanguage.setAttribute('id', 'projectlanguage')
            languagecomp.appendChild(projectlanguage)

            const projectdescription = document.createElement('p')
            projectdescription.textContent = repos.description
            const descriptioncomp = document.createElement('td')
            projectdescription.setAttribute('id', 'projectdescription')
            descriptioncomp.appendChild(projectdescription)

            const projectlink = document.createElement('a')
            projectlink.textContent = repos.html_url
            const linkcomp = document.createElement('td')
            projectlink.setAttribute('id', 'projectlink')
            projectlink.setAttribute('href', repos.html_url)
            linkcomp.appendChild(projectlink)

            //Append elements to row
            const row = document.createElement('tr')
            row.appendChild(namecomp)
            row.appendChild(languagecomp)
            row.appendChild(descriptioncomp)
            row.appendChild(linkcomp)

            //Append rows to table
            table.appendChild(row)
        });

        //Display
        tablecontainer.appendChild(table)
        apiapp.appendChild(tablecontainer)
    }

}

request.send()