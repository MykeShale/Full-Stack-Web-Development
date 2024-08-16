document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchInput = document.getElementById('search-input').value;
    console.log('Searching for:', searchInput);
    // Here, you can add the functionality to handle the search query.
  });
  