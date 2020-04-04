const apiapp = document.getElementById('api')

const tablecontainer = document.createElement('id')
tablecontainer.setAttribute('class', 'container')

const logo = document.createElement('img')
logo.src = './src/img/github_logo.png'
logo.setAttribute('id', 'githublogo')
apiapp.appendChild(logo)


var request = new XMLHttpRequest()

request.open('GET', 'https://api.github.com/users/ly0708/repos', true)

request.onload = function(){

    var data = JSON.parse(this.response)   

    if (request.status >= 200 && request.status < 400){

        //Creating a table
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