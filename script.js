
let bar = document.getElementById('bar')
let header = document.querySelector('h1')
let container = document.getElementById('container')
let intro = document.getElementById('intro')
let firstPage = true;
let temp;
let scrollBar = document.getElementById('scrollbar')
container.classList.add('invis')
container.remove()
window.onload = function () {
  header.classList.add('shift')
}
window.addEventListener('wheel', event => {
  if (window.scrollY > 80) {
    bar.classList.add('stick')
  }
  else {
    bar.classList.remove('stick')
  }
  if (event.deltaY > 0 && firstPage) {
    container.ontransitionend = () => {
      console.log()
    }
    scrollBar.style.top = '48vh'
    firstPage = false
    header.classList.add('dip')
    header.ontransitionend = () => {
      header.classList.remove('shift')
      header.classList.add('invis')
      document.body.appendChild(container)
      container.classList.remove('invis')
      container.style.setProperty('--direction', '-60px')
      setTimeout(() => {
        container.classList.add('introduce')
        intro.style.opacity = '1'
        document.querySelectorAll('.img-containers')[0].style.opacity = '1'
        document.querySelectorAll('.img-containers')[1].style.opacity = '1'


      }, 50)

    }

  }
  if (event.deltaY < 0 && !firstPage) {
    header.ontransitionend = () => {
      console.log()
    }
    scrollBar.style.top = '43px'
    firstPage = true
    container.style.setProperty('--direction', '60px')
    container.classList.remove('introduce')
    intro.style.opacity = '0'
    document.querySelectorAll('.img-containers')[0].style.opacity = '0'
    document.querySelectorAll('.img-containers')[1].style.opacity = '0'

    container.ontransitionend = () => {
      container.remove()
      container.classList.add('invis')
      header.classList.remove('dip')
      header.classList.remove('invis')
      temp = setTimeout(() => {
        header.classList.add('shift')
      }, 50)

    }

  }

})