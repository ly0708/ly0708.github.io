const meapp = document.getElementById('me')

const aboutme = document.createElement('h4')
aboutme.setAttribute('div', 'aboutmetitle')
aboutme.innerHTML = 'ABOUT ME'

const summary = document.createElement('p')
summary.setAttribute('div', 'summary')
summary.innerHTML = 'I am currently studying physics and economics at Southern Methodist University (SMU). I am interested in artificial intelligence, software engineering, energy engineering, and machine communication, and I wish to be able to do some R&D in any of those fields in the future.'

const learning = document.createElement('h6')
learning.setAttribute('div', 'learning')
learning.innerHTML = 'Currently self-learning:'

const learninglist = document.createElement('ul')
learninglist.setAttribute('div', 'learninglist')

const list1 = document.createElement('li')
list1.innerHTML = 'Deep Reinforcement Learning'

const list2 = document.createElement('li')
list2.innerHTML = 'Circuit Analysis / Design'

learninglist.appendChild(list1)
learninglist.appendChild(list2)

meapp.appendChild(aboutme)
meapp.appendChild(summary)
meapp.appendChild(learning)
meapp.appendChild(learninglist)