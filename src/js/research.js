const researchapp = document.getElementById('research')

const researchtitle = document.createElement('h4')
researchtitle.innerHTML = 'RESEARCH'

const research = document.createElement('h6')
research.setAttribute('div', 'worksinprogess')
research.innerHTML = 'Works in progress:'

const finished = document.createElement('h6')
finished.setAttribute('div', 'finished')
finished.innerHTML = 'Finished:'

const currentresearch = document.createElement('ul')
currentresearch.setAttribute('div', 'currentresearch')

const error = document.createElement('p')
error.innerHTML = 'Comeback in the future for updates.'

const error2 = document.createElement('p')
error2.innerHTML = 'Comeback in the future for updates.'


researchapp.appendChild(researchtitle)
researchapp.appendChild(research)
researchapp.appendChild(error)
researchapp.appendChild(finished)
researchapp.appendChild(error2)