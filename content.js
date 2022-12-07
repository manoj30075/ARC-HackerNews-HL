/* This runs after a web page loads */
const lengthOfItems = document.getElementsByClassName("titleline").length;

for (let i = 0; i < lengthOfItems; i++) {
  document.getElementsByClassName("titleline").item(i).firstChild.target = "_blank"
}