// ======= Admin Dashboard JS =======

// Mock data (replace with API calls in real app)
let dashboardData = {
    totalOrders: 256,
    totalRevenue: 145670,
    activeUsers: 102,
    totalRestaurants: 25,
    ordersPerMonth: [20, 30, 40, 35, 50, 60, 45, 55, 70, 65, 80, 90],
    revenuePerCategory: {
        "Starters": 15000,
        "Main Course": 40000,
        "Biryani": 30000,
        "Tiffins": 12000,
        "Drinks": 8000,
        "Desserts": 15000
    }
};

// ===== Update Stats Cards =====
document.getElementById('total-orders').innerText = dashboardData.totalOrders;
document.getElementById('total-revenue').innerText = `₹${dashboardData.totalRevenue}`;
document.getElementById('active-users').innerText = dashboardData.activeUsers;
document.getElementById('total-restaurants').innerText = dashboardData.totalRestaurants;

// ===== Orders Per Month Chart =====
const ordersCtx = document.getElementById('ordersChart').getContext('2d');
const ordersChart = new Chart(ordersCtx, {
    type: 'line',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Orders',
            data: dashboardData.ordersPerMonth,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } }
    }
});

// ===== Revenue Per Category Chart =====
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(revenueCtx, {
    type: 'bar',
    data: {
        labels: Object.keys(dashboardData.revenuePerCategory),
        datasets: [{
            label: 'Revenue (₹)',
            data: Object.values(dashboardData.revenuePerCategory),
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ],
            borderColor: 'rgba(0,0,0,0.1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
    }
});

// ===== Function to simulate live updates (optional) =====
function simulateLiveUpdate() {
    // Randomly increase total orders and revenue
    const newOrders = Math.floor(Math.random() * 5);
    const newRevenue = newOrders * (100 + Math.floor(Math.random() * 200));

    dashboardData.totalOrders += newOrders;
    dashboardData.totalRevenue += newRevenue;
    dashboardData.activeUsers = 80 + Math.floor(Math.random() * 50);

    // Update cards
    document.getElementById('total-orders').innerText = dashboardData.totalOrders;
    document.getElementById('total-revenue').innerText = `₹${dashboardData.totalRevenue}`;
    document.getElementById('active-users').innerText = dashboardData.activeUsers;

    // Update charts
    const monthIndex = new Date().getMonth();
    dashboardData.ordersPerMonth[monthIndex] += newOrders;
    ordersChart.data.datasets[0].data = dashboardData.ordersPerMonth;
    ordersChart.update();

    // Update revenue chart
    const categories = Object.keys(dashboardData.revenuePerCategory);
    categories.forEach(cat => {
        dashboardData.revenuePerCategory[cat] += Math.floor(Math.random() * 500);
    });
    revenueChart.data.datasets[0].data = Object.values(dashboardData.revenuePerCategory);
    revenueChart.update();
}

// Update every 10 seconds (optional)
setInterval(simulateLiveUpdate, 10000);
