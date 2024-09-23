const selected = document.getElementById('selected-rating');
const urlParams = new URLSearchParams(window.location.search);
const selectedRating = urlParams.get('rating');
selected.innerHTML = `You selected ${selectedRating} out of 5`;