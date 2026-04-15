// Show active page
// document.querySelectorAll(".navbar-top-link").forEach(link => {
//     if (link.href === window.location.href) {
//         link.classList.add("active");
//         link.setAttribute("aria-currrent", "page");
//     }
// });

// document.querySelectorAll('.navbar-top-link').forEach(link => {
//     console.log(link);
// });

document.querySelectorAll('.navbar-top-link').forEach(link => {
    if(link.href === window.location.href){
        link.setAttribute('aria-current', 'page')
      }
  });


// alert("CONNECTED!");

// SHOW ACTIVE PAGE

