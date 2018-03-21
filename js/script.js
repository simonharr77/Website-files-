//$(element).scrollTo(target[,duration][,settings]);

function aboutScroll(){
  $(window).scrollTo("#AboutMe", 800, {offset : -350});
  console.log('hello');
};
function projectsScroll(){
  $(window).scrollTo("#Projects", 800, {offset : -250});
  console.log('hello');
};
function ContactMeScroll(){
  $(window).scrollTo("#ContactMe", 800, {offset : -200});
  console.log('hello');
};
