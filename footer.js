const footerLeft = document.createElement("footer");
footerLeft.style.cssText = "z-index:999;";
footerLeft.style.textAlign = "left";
footerLeft.innerHTML = `<p>&#169 2017-2025 Troop 63</p>`;
const footerRight = document.createElement("footer");
footerRight.style.cssText = "background-color:transparent; text-align:right; z-index:999;";
footerRight.innerHTML = `<p><a href="404"><img src="https://codehs.com/uploads/00e3f072f91daff5ee3be734d74c49b9" class="icons" alt="facebook"></a><a href="404"><img src="https://codehs.com/uploads/948d8323a9b44f3b408e5eaf32935f81" class="icons" alt="youtube"></a><a href="404"><img src="https://codehs.com/uploads/1f4154cde184ea0aab9ea5bf7048b3d7" class="icons" alt="X"></a><a href="404"><img src="https://codehs.com/uploads/6661776061c91e21bce06d4c881e8bb8" class="icons" alt="Instagram"></a><a href="404"><img src="https://codehs.com/uploads/47c64d37b96e7570b39060260d1002b6" class="icons" alt="Github"></a><a href="404"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1024px-Slack_icon_2019.svg.png" class="icons" alt="Slack"></a></p>`;
document.body.appendChild(footerLeft);
document.body.appendChild(footerRight);