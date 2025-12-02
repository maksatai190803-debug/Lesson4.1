// TAB SLIDER
const tabs = document.querySelectorAll('.tab_content_item');
const tabsContent = document.querySelectorAll('.tab_content_block');

let currentTab = 0;

// функция активации таба
function activateTab(i) {
    tabsContent.forEach(block => block.style.display = 'none');
    tabs.forEach(tab => tab.classList.remove('tab_content_item_active'));

    tabsContent[i].style.display = 'flex';
    tabs[i].classList.add('tab_content_item_active');
}

// стартовое отображение
activateTab(0);

// переключение по клику
tabs.forEach((tab, index) => {
    tab.onclick = () => {
        currentTab = index;
        activateTab(index);
    };
});

// АВТОМАТИЧЕСКОЕ ПЕРЕКЛЮЧЕНИЕ
setInterval(() => {
    currentTab++;
    if (currentTab >= tabs.length) currentTab = 0;
    activateTab(currentTab);
}, 3000);
