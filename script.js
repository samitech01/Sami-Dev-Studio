document.addEventListener('DOMContentLoaded', function () {
    const settingsIcon = document.getElementById('settingsIcon');
    const configurator = document.getElementById('configurator');
    const closeConfig = document.getElementById('closeConfig');
    const sidebar = document.getElementById('sidebar');
    const colors = document.querySelectorAll('.color');
    const sidenavButtons = document.querySelectorAll('.sidenav-btn');
    const lightDarkModeBtn = document.getElementById('toggleLightDarkMode');
    const navbarFixedBtn = document.getElementById('toggleNavbarFixed');
    let isNavbarFixed = false;
    let isDarkMode = false;

    settingsIcon.addEventListener('click', function () {
        configurator.classList.toggle('open');
    });

    closeConfig.addEventListener('click', function () {
        configurator.classList.remove('open');
    });

    colors.forEach(color => {
        color.addEventListener('click', function () {
            sidebar.style.backgroundColor = this.dataset.color;
        });
    });

    sidenavButtons.forEach(button => {
        button.addEventListener('click', function () {
            sidebar.classList.remove('dark', 'transparent', 'white');
            if (this.dataset.type === 'dark') {
                sidebar.classList.add('dark');
                sidebar.style.backgroundColor = '#2C2F33';
                document.querySelectorAll('.sidebar ul li').forEach(li => {
                    li.style.color = 'white';
                });
            } else if (this.dataset.type === 'transparent') {
                sidebar.classList.add('transparent');
                sidebar.style.backgroundColor = 'transparent';
                document.querySelectorAll('.sidebar ul li').forEach(li => {
                    li.style.color = 'black';
                });
            } else if (this.dataset.type === 'white') {
                sidebar.classList.add('white');
                sidebar.style.backgroundColor = '#FFFFFF';
                document.querySelectorAll('.sidebar ul li').forEach(li => {
                    li.style.color = 'black';
                });
            }
        });
    });

    lightDarkModeBtn.addEventListener('click', function () {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
});