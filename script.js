function applyStyles() {
    // Get the HTML elements
    const topContainer = document.querySelector('.top-container');
    const middleContainer = document.querySelector('.middle-container');
    const bottomContainer = document.querySelector('.bottom-container');
    const cloud = document.querySelector('.cloud');
    const cloud1 = document.querySelector('.cloud1');
    const mountain = document.querySelector('.mountain');
    const flaticon1 = document.querySelector('.flaticon1');
    const sub = document.querySelector('.sub');
    const cpyrght = document.querySelector('.cpyrght');
    const btn = document.querySelectorAll('.btn');
    const body = document.querySelector('body');
    const div1 = document.querySelector('div1');
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const h3 = document.querySelector('h3');
    const aTags = document.querySelectorAll('a');
    const brTags = document.querySelectorAll('br');
    const buttons = document.querySelectorAll('button');
  
    // Add CSS classes
    topContainer.classList.add('top-container');
    middleContainer.classList.add('middle-container');
    bottomContainer.classList.add('bottom-container');
    cloud.classList.add('cloud');
    cloud1.classList.add('cloud1');
    mountain.classList.add('mountain');
    flaticon1.classList.add('flaticon1');
    sub.classList.add('sub');
    cpyrght.classList.add('cpyrght');
    btn.forEach((button) => button.classList.add('btn'));
    body.classList.add('body');
    div1.classList.add('div1');
    h1.classList.add('h1');
    h2.classList.add('h2');
    h3.classList.add('h3');
    aTags.forEach((a) => a.classList.add('a'));
    brTags.forEach((br) => br.classList.add('br'));
    buttons.forEach((button) => button.classList.add('button'));
  }
  
  // Call the function to apply the styles
  applyStyles();
  