const headerHTML = `
<header>
  <div style="display: flex; align-items: center;">
    <button class="menu-button" onclick="toggleSidebar()">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
  <div style="display: flex; align-items: center; gap: 40px; margin-right: 20px;">
    <div class="search-container">
      <div class="search-bar">
        <input type="text" id="searchInput" placeholder="Search">
        <button style="font-weight:bolder; margin-left:9px;" id="searchBtn">
        <img src="https://codehs.com/uploads/d32d2b2c0d288d661e2dc2a5aa74f91c" style="margin-left:-10px;"></button>
        <div id="searchResults" class="search-results"></div>
      </div>
    </div>
    <script src="searchbar.js">    
    </script>
    <a href="index">
      <img class="logo" src="https://codehs.com/uploads/7a69e0edd90a208df914b080f5ab27b8" alt="ICE">
    </a>
  </div>
</header>
<div id="sidebar" class="sidebar">
    <a href="index">Home</a>
    <hr style="border-top: 1px;margin: 0;">
    <a href="about">About</a>
    <hr style="border-top: 1px;margin: 0;">
    <a href="contact">Contact Us</a>
    <hr style="border-top: 1px;margin: 0;">
    <a href="support">Support Us</a>
    <hr style="border-top: 1px;margin: 0;">
  </div>
  <br>
  <br>
  <br>
  <br>
`;

document.addEventListener("DOMContentLoaded", () => {
  const headerWrapper = document.createElement("div");
  headerWrapper.innerHTML = headerHTML;
  document.body.insertBefore(headerWrapper, document.body.firstChild);
});