const meapp = document.getElementById('me')

const aboutme = document.createElement('h4')
aboutme.setAttribute('div', 'aboutmetitle')
aboutme.innerHTML = 'ABOUT ME'

const summary = document.createElement('p')
summary.setAttribute('div', 'summary')
summary.innerHTML = 'I\'m a junior at Southern Methodist Univeristy double majoring in Physics and Economics with a minor in Computer Science. Before transferring to SMU, I studied at The University of Arizona Honors College.' 

const summary2 = document.createElement('p')
summary2.setAttribute('div', 'summary')
summary2.innerHTML = 'I\'m passionate about tackling problems from an engineering point of view, which requires me to have knowledge in more than one engineering subjects. Nonetheless, Computer Science and Electrical Engineering interests me the most. One day, I hope to solve problems that will have a positive impact on generations to come.' 

meapp.appendChild(aboutme)
meapp.appendChild(summary)
meapp.appendChild(summary2)
