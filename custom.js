function showCategory(category) {
    const categories = document.querySelectorAll('.category-content');
    categories.forEach(cat => {
        cat.classList.add('hidden');
    });
    document.getElementById(category).classList.remove('hidden');

    const categoryButtons = document.querySelectorAll('.category-button');
    categoryButtons.forEach(button => {
        button.classList.remove('border-black');
        button.classList.remove('border-b-2');
    });
    document.getElementById('btn-' + category).classList.add('border-black', 'border-b-2');
}

function showTab(tab) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(t => {
        t.classList.add('hidden');

    });
    document.getElementById(tab).classList.remove('hidden');
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('border-black');
        button.classList.remove('border-b-2');
    });
    document.getElementById('btn-' + tab).classList.add('border-black', 'border-b-2');
}
function showSection(section) {
    document.getElementById('team-section').style.display = 'none';
    document.getElementById('availability-section').style.display = 'none';
    document.getElementById('map-section').style.display = 'none';
    document.getElementById(section).style.display = 'block';
}

function openmodel() {
    document.getElementById('modal').classList.remove('hidden');

    document.getElementById('modal').addEventListener('click', function (event) {
        if (event.target === this) {
            this.classList.add('hidden');
        }
    });
}




function finaldatapopupshow() {
    document.getElementById('finaldataselection').classList.remove('hidden');
    document.getElementById('finaldataselection').addEventListener('click', function (event) {
        if (event.target === this) {
            this.classList.add('hidden');
        }
    });
}
function alternativepopupshow() {
    document.getElementById('alternativepopup').classList.remove('hidden');
    document.getElementById('alternativepopup').addEventListener('click', function (event) {
        if (event.target === this) {
            this.classList.add('hidden');
        }
    });
}

function addfrndshowPopup() {
    document.getElementById('popup').classList.remove('hidden');
}

function addfrndclosePopup() {
    document.getElementById('popup').classList.add('hidden');
}

function selectDate(element) {
    const dates = document.querySelectorAll('.date');
    dates.forEach(date => date.classList.remove('border-blue-500'));
    element.classList.add('border-blue-500');
}
function selectTime(button) {
    document.querySelectorAll('.time-button').forEach(btn => {
        btn.classList.remove('border-blue-600');
        btn.classList.add('border-gray-300');
    });
    button.classList.remove('border-gray-300');
    button.classList.add('border-blue-600');
}

document.addEventListener('DOMContentLoaded', function () {
    function createDateGrid(containerId, prevBtnId, nextBtnId) {
    const dateGrid = document.getElementById(containerId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);

    let currentDate = new Date();
    let selectedDateElement = null;

    function getDates(startDate, daysToAdd) {
        let dates = [];
        for (let i = 0; i < daysToAdd; i++) {
            let date = new Date(startDate);
            date.setDate(date.getDate() + i);
            dates.push(date);
        }
        return dates;
    }

    function renderDates(dates) {
        dateGrid.innerHTML = '';
        dates.forEach((date, index) => {
            const colors = ['border-blue-600', 'border-yellow-500', 'border-green-500', 'border-red-500', 'border-pink-500'];
            const color = colors[index % colors.length];
            const dateElement = document.createElement('div');
            dateElement.className = 'text-center border border-gray-300 rounded-lg p-2 w-20 cursor-pointer';
            dateElement.innerHTML = `
                <div class="text-xs text-gray-500">${date.toLocaleString('default', { month: 'short' })}</div>
                <div class="text-lg font-medium">${date.toLocaleString('default', { weekday: 'short' })}</div>
                <div class="text-lg font-medium text-blue-600 border-b-4 ${color}">${date.getDate()}</div>
            `;
            dateElement.addEventListener('click', () => selectDate(dateElement));
            dateGrid.appendChild(dateElement);
        });
    }

    function selectDate(dateElement) {
        if (selectedDateElement) {
            selectedDateElement.classList.remove('border-blue-500');
        }
        dateElement.classList.add('border-blue-500');
        selectedDateElement = dateElement;
    }

    function updateDates(direction) {
        const screenWidth = window.innerWidth;
        const daysToAdd = screenWidth < 640 ? 5 : 6;

        if (direction === 'next') {
            currentDate.setDate(currentDate.getDate() + daysToAdd);
        } else if (direction === 'prev') {
            currentDate.setDate(currentDate.getDate() - daysToAdd);
        }
        const dates = getDates(currentDate, daysToAdd);
        renderDates(dates);
    }

    prevBtn.addEventListener('click', () => updateDates('prev'));
    nextBtn.addEventListener('click', () => updateDates('next'));

    // Initial render
    const initialDates = getDates(currentDate, window.innerWidth < 400 ? 5 : 6);
    renderDates(initialDates);

    // Adjust the number of date grids based on screen size
    function adjustDateGrids() {
        const screenWidth = window.innerWidth;
        const daysToAdd = screenWidth <  400 ? 5 : 6;
        const dates = getDates(currentDate, daysToAdd);
        renderDates(dates);
    }

    window.addEventListener('resize', adjustDateGrids);
    adjustDateGrids();
}

createDateGrid('dateContainer1', 'prev-button-1', 'next-button-1');
createDateGrid('dateContainer2', 'prev-button-2', 'next-button-2');
});