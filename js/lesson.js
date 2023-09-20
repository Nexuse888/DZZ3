// IPHONE WALADATOOOOOORRRR
const phoneInput = document.querySelector('#phone_input')
const phoneButtom = document.querySelector('#phone_button')
const phoneResault = document.querySelector('#phone_result')
const regEXP = /^\+996 [5792]\d{2} \d{2}-\d{2}-\d{2}$/
phoneButtom.onclick=() => {
 if (regEXP.test(phoneInput.value)) {
     phoneResault.innerHTML  = 'OK'
     phoneResault.style.color = 'green'
 }
 else {
     phoneResault.innerHTML  = 'NOT OK'
     phoneResault.style.color = 'red'
 }
}


const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabsItems = document.querySelectorAll('.tab_content_item');
const parentTabs = document.querySelector('.tab_content_items');
let currentIndex = 0;
let intervalId;

const hideTapContent = () => {
    tabContentBlocks.forEach((tabContentBlock) => {
        tabContentBlock.style.display = 'none';
    });
    tabsItems.forEach((tabItem) => {
        tabItem.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (indexElement = 0) => {
    tabContentBlocks[indexElement].style.display = 'block';
    tabsItems[indexElement].classList.add('tab_content_item_active');
};

const startAutoSlide = () => {
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % tabsItems.length;
        hideTapContent();
        showTabContent(currentIndex);
    }, 3000);
};

const stopAutoSlide = () => {
    clearInterval(intervalId);
};

hideTapContent();
showTabContent(0);
startAutoSlide();

parentTabs.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabsItems.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem) {
                currentIndex = tabIndex;
                hideTapContent();
                showTabContent(tabIndex);
                stopAutoSlide();
                startAutoSlide();
            }
        });
    }
};
