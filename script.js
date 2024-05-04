let responseconatiner = document.querySelector(".responseconatiner");
let loader = document.querySelector(".loader");
async function fetchdetails() {
  showloader();
  let url = `https://dummyjson.com/products?limit=100`;
  let response = await fetch(url);
  let data = await response.json();
  let products = data.products;
  let output = products.map((product) => {
    return `<p class="ptag"><span>${product.title}</span>: ${product.description}</p>`;
  });
  responseconatiner.innerHTML = output.join(" ");
  removeloader();
}
fetchdetails();
document.querySelector(".scrolltotop").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
document.querySelector(".scrolltobottom").addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});
function showloader() {
  loader.style.display = "block";
  responseconatiner.style.display = "none";
}
function removeloader() {
  loader.style.display = "none";
  responseconatiner.style.display = "block";
}
