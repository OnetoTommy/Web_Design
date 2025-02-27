// document.addEventListener("DOMContentLoaded", () => {
//     const addButton = document.querySelector(".btn-add");
//     const removeButton = document.querySelector(".btn-remove");
//     const list = document.querySelector('ul[role="list"]');

//     addButton.addEventListener("click", () => {
//         const newItem = document.createElement("li");
//         list.appendChild(newItem);
//     });

//     removeButton.addEventListener("click", () => {
//         if (list.lastElementChild) {
//             list.lastElementChild.classList.add("removing");
//             setTimeout(() => {
//                 list.removeChild(list.lastElementChild);
//             }, 200);
//         }
//     });
// });


// // Section_1
// document.addEventListener("DOMContentLoaded", () => {
//     const addBotton = document.querySelector(".btn-add");
//     const removeButton = document.querySelector(".btn-remove");
//     const list = document.querySelector('ul[role="list"]');

//     addBotton.addEventListener("click", () => {
//         const newItem = document.createElement('li');
//         list.appendChild(newItem);
//     })

//     removeButton.addEventListener("click", () => {
//         if (list.lastElementChild) {
//             list.lastElementChild.classList.add('removing')
//             setTimeout(() => {
//                     list.removeChild(list.lastElementChild)
//                 }, 300

//             )

//         }
//     })
// })


// //Section_2
// document.addEventListener("DOMContentLoaded", () => {
//     const addButton = document.querySelector(".btn-add");
//     const removeButton = document.querySelector(".btn-remove");
//     const listItems = document.querySelectorAll('ul[role="list"] li');

//     let activeCount = 0;

//     addButton.addEventListener("click", () => {
//         if (activeCount < listItems.length) {
//             listItems[activeCount].classList.remove("hidden");
//             activeCount++;
//         }
//     });

//     removeButton.addEventListener("click", () => {
//         if (activeCount > 0) {
//             activeCount--;
//             listItems[activeCount].classList.add("hidden");
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.querySelector(".btn-add");
    const removeButton = document.querySelector(".btn-remove");
    const listItems = document.querySelectorAll('ul[role="list"] li');

    let activeCount = 0;

    addButton.addEventListener("click", () => {
        if (activeCount < listItems.length) {
            listItems[activeCount].classList.remove("hidden");
            activeCount++;
        }
    });

    removeButton.addEventListener("click", () => {
        if (activeCount > 0) {
            activeCount--;
            listItems[activeCount].classList.add("hidden");
        }
    });
});