const homeapp = document.getElementById('home')

const headline = document.createElement('div')
headline.setAttribute('class', 'headline container')

const myname = document.createElement('h3')
myname.setAttribute('div', 'myname')
myname.innerHTML = 'LARRY YU'

const myposition = document.createElement('h5')
myposition.setAttribute('div', 'myposition')
myposition.innerHTML = 'Student at SMU Studying Physics and Economics'

headline.appendChild(myname)
headline.appendChild(myposition)
homeapp.appendChild(headline)