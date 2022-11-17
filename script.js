

window.addEventListener('load', () => {
    const contentOne = document.querySelector("#content1");
    const contentTwo = document.querySelector("#content2");
    const contentThree = document.querySelector("#content3");
    const item = document.querySelector(".item");


    form.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const item = input.value;
    
        if (!item) {
            alert("Your Savings");
            return;
        // } else {
        //     console.log("Submitted");
        };
        const item_el = document.createElement("div");
        item_el.classList.add("item");

        const item_contentOne_el = document.createElement("div");
        task_contentOne_el.classList.add("content1");
