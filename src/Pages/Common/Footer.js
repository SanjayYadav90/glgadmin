import React from 'react';

function Links() {
  return(
    <footer class="bdT ta-c p-30 lh-0 fsz-sm c-grey-600">
        <span>Copyright © {getYear()} Designed by <a href="https://colorlib.com" target='_blank' title="Colorlib">Colorlib</a>. All rights reserved.</span>
    </footer>
  );
  
  function getYear() {
    return new Date().getFullYear();
  }
}
export default Links;