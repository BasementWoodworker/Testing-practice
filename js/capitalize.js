function capitalize(string) {
  let char = string.charAt(0);
  char = char.toUpperCase();
  string = string.slice(1);
  return char + string;
}

module.exports = capitalize;