var data = {
  labels: ["01-SA-BA", "02-MA-LA", "03-FO-CE", "04-SA-BA", "05-AR-SE", "06-MA-AL", "07-RE-PE", "08-JP-PB", "09-IT-BA", " 10-FO-CE", "11-MA-AM", "12-JP-PB", "13-JP-PB"],
  datasets: [{
      label: "Não fez manutenção",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [30, 25, 28, 31, 26, 23, 10, 20, 30]
    },
    {
      label: "Fez manutenção",
      backgroundColor: "rgba(99,255,132,0.2)",
      borderColor: "rgba(99,255,132,1)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(99,255,132,0.4)",
      hoverBorderColor: "rgba(99,255,132,1)",
      data: [25, 30, 26, 29, 31, 20, 100]
    }
  ]
};

var options = {
  title: {
    display: true,
    text: 'Gráfico das manutenções do mês de dezembro de 2023',
    fontSize: 18
  },
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
        gridLines: {
          display: true,
          color: "rgba(255,99,132,0.2)"
        },
        ticks: {
          beginAtZero: true
        }
      }],
    xAxes: [{
        gridLines: {
          display: false
        }
      }]
  }
};
Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.defaultFontSize = 14;
Chart.Bar('chart', {
  options: options,
  data: data
});

// Selecting the sidebar and buttons
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");

// Function to toggle the lock state of the sidebar
const toggleLock = () => {
  sidebar.classList.toggle("locked");
  // If the sidebar is not locked
  if (!sidebar.classList.contains("locked")) {
    sidebar.classList.add("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
  } else {
    sidebar.classList.remove("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
  }
};

// Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
};

// Function to show the sidebar when the mouse enter
const showSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
};

// Function to show and hide the sidebar
const toggleSidebar = () => {
  sidebar.classList.toggle("close");
};

// If the window width is less than 800px, close the sidebar and remove hoverability and lock
if (window.innerWidth < 800) {
  sidebar.classList.add("close");
  sidebar.classList.remove("locked");
  sidebar.classList.remove("hoverable");
}

// Adding event listeners to buttons and sidebar for the corresponding actions
sidebarLockBtn.addEventListener("click", toggleLock);
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);