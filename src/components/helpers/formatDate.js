 export function formatDate(dateString) {
  // Create a new Date object from the input string
  const date = new Date(dateString);

  // Define options for formatting the date
  const options = { year: 'numeric', month: 'short', day: 'numeric' };

  // Format the date and return it
  return date.toLocaleDateString('en-US', options);
}

