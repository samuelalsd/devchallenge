/**
 * Count the number of occurrences of each unique value found in a given array
 * This function is NOT case sensitive.
 *
 * @param {array} list
 *
 * @return {array} containing [color, occurrences] pairs
 * where 'color' is a string and 'occurrences' is an integer
 */
const countOccurrences = list => {
  let result = {};

  list.forEach(item => {
    item = String(item).toLowerCase();
    result[item] = ++result[item] || 1;
  });

  return Object.entries(result);
};

/**
 * Find and print the names of the two most occurring colors in a given array
 *
 * @param {array} answers contains a list which first value
 * is an integer representing the number of answers provided
 * and ALL following values represent the favorite color
 */
const getFavoriteColors = data => {
  const [nb, ...answers] = data;

  let result = countOccurrences(answers).sort((a, b) => b[1] - a[1]);
  const first = result[0];
  const second = result[1];

  console.log(`${first[0]} ${second[0]}`);
};

// TEST

const data = [
  12,
  "purple",
  "blue",
  "purple",
  "white",
  "green",
  "purple",
  "violet",
  "blue",
  "green",
  "blue",
  "blue",
  "white"
];

getFavoriteColors(data);
