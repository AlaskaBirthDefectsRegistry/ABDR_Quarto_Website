// Fix for search button accessibility
document.addEventListener('DOMContentLoaded', function() {
  // Fix search button
  const searchButton = document.querySelector('.aa-DetachedSearchButton');
  if (searchButton && !searchButton.getAttribute('aria-label')) {
    searchButton.setAttribute('aria-label', 'Search this site');
  }
  
  // Fix aria-hidden focusable elements
  const hiddenFocusable = document.querySelectorAll('[aria-hidden="true"][tabindex="0"]');
  hiddenFocusable.forEach(function(element) {
    element.setAttribute('tabindex', '-1');
  });
});