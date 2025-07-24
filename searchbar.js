document.addEventListener('DOMContentLoaded', () => {
  // Wait a bit to ensure global-header.js has finished injecting the header
  setTimeout(() => {
    const searchBtn = document.getElementById('searchBtn');
    const searchBar = document.querySelector('.search-bar');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // If any critical element is missing, don't proceed
    if (!searchBtn || !searchBar || !searchInput || !searchResults) return;

    const pages = [
      { title: "Home", description: "Go to homepage", link: "index" },
      { title: "About", description: "Learn more about us", link: "about" },
      { title: "Contact", description: "Contact Us", link: "contact" },
      { title: "Support", description: "Support Us", link: "support" }
    ];

    searchBar.addEventListener('mouseenter', () => {
      searchBar.classList.add('expanded');
    });

    searchBar.addEventListener('mouseleave', () => {
      if (!searchInput.matches(':focus') && searchInput.value === '') {
        searchBar.classList.remove('expanded');
        searchResults.classList.remove('show');
      }
    });

    searchInput.addEventListener('focus', () => {
      searchBar.classList.add('expanded');
    });

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
      searchResults.innerHTML = '';

      if (query === '') {
        searchResults.classList.remove('show');
        return;
      }

      const matched = pages.filter(page =>
        page.title.toLowerCase().includes(query) ||
        page.description.toLowerCase().includes(query)
      );

      if (matched.length === 0) {
        searchResults.innerHTML = `<div class="no-results">No search results</div>`;
      } else {
        matched.forEach(page => {
          const result = document.createElement('div');
          result.className = 'search-result';
          result.innerHTML = `
            <div class="search-result-title">${page.title}</div>
            <div class="search-result-description">${page.description}</div>
          `;
          result.addEventListener('click', () => {
            window.location.href = page.link;
          });
          searchResults.appendChild(result);
        });
      }

      searchResults.classList.add('show');
    });

    document.addEventListener('click', (e) => {
      if (!searchBar.contains(e.target)) {
        if (searchInput.value === '') {
          searchBar.classList.remove('expanded');
          searchResults.classList.remove('show');
        }
      }
    });
  }, 50); // delay allows global-header.js to run first
});