const footerLeft = document.createElement("footer");
footerLeft.style.cssText = "z-index:999;";
footerLeft.style.textAlign = "left";
footerLeft.innerHTML = `<p>&#169 2017-2025 Troop 63</p>`;
const footerRight = document.createElement("footer");
footerRight.style.cssText = "background-color:transparent; text-align:right; z-index:999;";
footerRight.innerHTML = `<p><a href="https://www.facebook.com/troopsixtythree.altoona"><img src="https://codehs.com/uploads/00e3f072f91daff5ee3be734d74c49b9" class="icons" alt="facebook"></a><a href="404"><img src="https://codehs.com/uploads/948d8323a9b44f3b408e5eaf32935f81" class="icons" alt="youtube"></a><a href="404"><img src="https://codehs.com/uploads/6661776061c91e21bce06d4c881e8bb8" class="icons" alt="Instagram"></a></p>`;
document.body.appendChild(footerLeft);
document.body.appendChild(footerRight);