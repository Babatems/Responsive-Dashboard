const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler2 = document.querySelector(".theme-toggler2");
const themeToggler = document.querySelector(".light_dark");

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

themeToggler2.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
})

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                            <td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>${order.paymentStatus}</td>
                            <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                            <td class="primary">Details</td> 
                        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})