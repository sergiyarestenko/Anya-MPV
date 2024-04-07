// function debounce(func, ms = 250) {
//   let timeout
//   return function () {
//     clearTimeout(timeout)
//     timeout = setTimeout(() => func.apply(this, arguments), ms)
//   }
// }

const observeHeader = (header, observeTarget) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        header.classList.remove('scrolled')
      } else {
        header.classList.add('scrolled')
      }
    })
  })
  observer.observe(observeTarget)
}

const changeHeaderClassOnScroll = () => {
  const header = document.getElementById('header')
  const observeTarget = document.getElementById('observer')

  observeHeader(header, observeTarget)
}

;(function () {
  // changeHeaderClassOnScroll();
})()
