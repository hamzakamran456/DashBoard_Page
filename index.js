Orders.forEach(orders=>{
    const tr = document.createElement("tr");
    const trContent = `<td>${orders.productName}</td><td>${orders.productNumber}</td><td>${orders.paymentStatus}</td>
    <td class="${orders.status === 'Declined' ? 'danger' : orders.status === 'Pending' ? 'warning' : 'primary'}">${orders.status}</td>
    <td class="primary">Details</td>`;
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);
})