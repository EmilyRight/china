/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import { WOW } from './vendor/wow.min';
import detectDevice from './components/detectDevice';

/// /////// DocReady //////////
window.addEventListener('load', () => {
  detectDevice(); // videoTeaser();
  new WOW().init();
  changeData();
  faqOpener();
});

function detectRegion() {
  const region = window.location.hash;
  return region.slice(1);
}

function changeData() {
  const region = detectRegion();
  const regionDataArray = document.querySelectorAll('.js-region-data');
  if (region === 'vsk') {
    regionDataArray.forEach((it) => {
      it.innerHTML = it.dataset.region;
    });
  }
}

function setActive(arr) {
  const activeClassName = 'active';
  arr.forEach((el) => {
    const itemText = el.childNodes[3]; // хардкод текстового дочернего узла
    if (el.classList.contains(activeClassName)) {
      itemText.style.transition = 'none';
      el.classList.remove(activeClassName);
    }
  });
}
function faqOpener() {
  const itemsList = document.querySelectorAll('.faq__item');
  const activeClassName = 'active';
  itemsList.forEach((item) => {
    item.addEventListener('click', () => {
      const itemText = item.childNodes[3]; // хардкод текстового дочернего узла
      if (item.classList.contains(activeClassName)) {
        itemText.style.transition = 'none';
        item.classList.remove(activeClassName);
      } else {
        setActive(itemsList);
        itemText.style.transition = '0.2s ease-in-out';
        item.classList.add(activeClassName);
      }
    });
  });
}
