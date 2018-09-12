/**
 * 
 * @author Perlat Kociaj <github.com/perlatsp>
 * @copyright Perlat Kociaj 2018
 * @version 0.0.1
 */


/**
 * CSS class names
 * Facebook might change css classes for elements
 * you will have to change accordingly
 */
const pages_Class = '._5rz._5k3a._5rz3._153f', //class for individual page container
  pagetTitle_Class = '.fsl.fwb.fcb',           //class for page title
  pageLikeOptions_Class = 'button.PageLikedButton',//class for options dropdown 
  pageUnlikeBTN_Class = '.uiMenuItem[data-label="Unlike"]',//class for unlike button
  pageUnlikeBTN_container_Class = '.uiContextualLayer';


let clickDelay = 250;
let delayOffset = 0;

//Get liked pages
const pages = document.querySelectorAll(pages_Class);

/**
 * For each page element call unlike page function
 * with a given delay. Default 250ms for each page found
 */
if(pages.length>0){
  pages.forEach(page => {
    setTimeout(function () {
      unlikePage(page)
    }, clickDelay + delayOffset)
    delayOffset += clickDelay;
  });
}


/**
 * @param {element} page
 * @description Will get an "page" element which will be an individual
 * page the user liked.
 * Will trigger the click event on the dropdown
 * and will "unlike" the page
 */
function unlikePage(page) {
  pagetitle = page.querySelector(pagetTitle_Class).children[0].innerText;
  pageLikeOptions = page.querySelector(pageLikeOptions_Class);
  pageLikeOptions.click();

  setTimeout(function () {
    pageUnlikeBTN = document.querySelector(pageUnlikeBTN_Class); //get the unlike button element via class and data attribute
    pageUnlikeBTN.closest(pageUnlikeBTN_container_Class).style.display = 'none'; //do not display the "unlike" button
    pageUnlikeBTN.click(); //click the unlike button
  }, 500)
  console.warn('Unliked ' + pagetitle);
}