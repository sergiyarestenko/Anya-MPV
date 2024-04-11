const debounce = (func, ms = 250) => {
  let timeout
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, arguments), ms)
  }
}

// const observeHeader = (header, observeTarget) => {
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         header.classList.remove('scrolled')
//       } else {
//         header.classList.add('scrolled')
//       }
//     })
//   })
//   observer.observe(observeTarget)
// }

// const changeHeaderClassOnScroll = () => {
//   const header = document.getElementById('header')
//   const observeTarget = document.getElementById('observer')

//   observeHeader(header, observeTarget)
// }

// ;(function () {
  //variables

  let isMobileNavShown = false

  //showHideMobileNav

  function showMobileNav() {
    isMobileNavShown = true
    changeNavClassName()
  }

  function hideMobileNav() {
    isMobileNavShown = false
    changeNavClassName()
  }

  function changeNavClassName() {
    const nav = document.getElementById('nav')
    if (isMobileNavShown) {
      nav.classList.add('open')
    } else {
      nav.classList.remove('open')
    }
    console.log('changeNavClassName');
  }

  //events

  function onResize() {
    hideMobileNav()
  }
  function onDOMLoaded() {
    changeNavClassName()
  }

  // eventListeners

  window.addEventListener('resize', debounce(onResize))
  document.addEventListener('DOMContentLoaded', onDOMLoaded)
// })()
