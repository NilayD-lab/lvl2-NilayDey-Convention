
let bar = document.getElementById('bar')
let header = document.querySelector('h1')
let container = document.getElementById('container')
let intro = document.getElementById('intro')
let firstPage = true;
let temp;
container.classList.add('invis')
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
    container.ontransitionend = ()=>{
      console.log()
    }
    firstPage = false
    header.classList.add('dip')
    header.ontransitionend = () => {
      header.classList.remove('shift')
      header.classList.add('invis')
      container.classList.remove('invis')
      container.style.setProperty('--direction', '-60px')
      setTimeout(() => {
        // container.style.marginTop = '25vh'
        // container.style.transform = 'translateY(var(--direction))'
        // container.style.opacity = '1'
        container.classList.add('introduce')
        intro.style.opacity = '1'
      }, 50)

    }

  }
  if (event.deltaY < 0 && !firstPage) {
    header.ontransitionend = () => {
      console.log()
    }
    firstPage = true
    container.style.setProperty('--direction', '60px')
    // container.style.transform = 'translateY(var(--direction))'
    // container.style.opacity = '0'
    container.classList.remove('introduce')
    intro.style.opacity = '0'
    container.ontransitionend = () => {
      // container.style.marginTop = '0vh'
      container.classList.add('invis')
      header.classList.remove('dip')
      header.classList.remove('invis')
      temp = setTimeout(() => {
        header.classList.add('shift')
      }, 50)

    }

  }

})