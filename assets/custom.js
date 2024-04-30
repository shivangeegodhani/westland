/*
* Broadcast Theme
*
* Use this file to add custom Javascript to Broadcast.  Keeping your custom
* Javascript in this fill will make it easier to update Broadcast. In order
* to use this file you will need to open layout/theme.liquid and uncomment
* the custom.js script import line near the bottom of the file.
*/
let totalItemCount;
let hiddenItemCount;
let displayItemCount;

(function () {
  // Add custom code below this line




  function selectOption(el, selectedOption) {
    el.parentNode.classList.remove("popout-list--visible")
    document.getElementById("mainFieldSwatch").querySelectorAll(`[data-swatch='${selectedOption}']`)[0].click();
    document.getElementById("colorDropdownId").querySelectorAll("span")[0].innerText = selectedOption;
  }



  // Attach all the functions to window so they are available to use across the store
  window.selectOption = selectOption;


  // ^^ Keep your scripts inside this IIFE function call to
  // avoid leaking your variables into the global scope.
})();
