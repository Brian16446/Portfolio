AOS.init();

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

$('#view-projects').click(function(){
    document.getElementById('main-projects-anchor').scrollIntoView({behavior: "smooth"});
});