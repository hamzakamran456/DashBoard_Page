const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

const darkMode = document.querySelector(".dark-mode");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});
darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode-variables");
  darkMode.querySelector("span:nth-child(1)").classList.toggle("active");
  darkMode.querySelector("span:nth-child(2)").classList.toggle("active");
});

Orders.forEach((orders) => {
  const tr = document.createElement("tr");
  const trContent = `<td>${orders.productName}</td><td>${
    orders.productNumber
  }</td><td>${orders.paymentStatus}</td>
    <td class="${
      orders.status === "Declined"
        ? "danger"
        : orders.status === "Pending"
        ? "warning"
        : "primary"
    }">${orders.status}</td>
    <td class="primary">Details</td>`;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
