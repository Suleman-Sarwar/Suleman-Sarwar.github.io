
(function TypeEffect() {
  const select = (el, type  = false) => {
    el = el.trim()
    if (type) {
      return [...document.querySelector(el)]
    } else {
      return document.querySelector(el)
    }
  }



  /**
   * Hero type effect
   */
   const typed = select('.typed')
   if (typed) {
     let typed_strings = typed.getAttribute('data-typed-items')
     typed_strings = typed_strings.split(',')
     new Typed('.typed', {
       strings: typed_strings,
       loop: true,
       typeSpeed: 90,
       backSpeed: 60,
       backDelay: 500
     });
   };



})()