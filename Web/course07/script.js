// function init() {
//     const mylist = document.getElementById("my-list");
//     console.log(mylist);

// }

// window.addEventListener("DOMContentLoaded", init);


// const anArray = [];
// anArray.push[1];
// anArray.pop();
// anArray.length;


function init() {
    const mylist = document.getElementById("my-list");

    const item = ["hello", "Tom"]

    for (i = 0; i < item.length; i++) {
        const li = document.createElement('li');
        mylist.appendChild(li);
        li.append(item[i]);
    }

    const template = 'go to ${item[0]}'
    console.log(template);

}


const a = [1, 2, 4, , 5, 5, 6]
for (const b of a) {
    console.log(b);

}

function init() {
    const mylist = document.querySelector("#my-list");

    const item = ["hello", "Tom"]

    for (i = 0; i < item.length; i++) {
        const li = document.createElement('li');
        mylist.appendChild(li);
        li.append(item[i]);
    }
}