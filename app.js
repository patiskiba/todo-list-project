const createCategoryButton = document.getElementById("createCategoryButton");
console.log(createCategoryButton);

//! Create tasks

//? Define create task buttons
let createTaskButtons = document.querySelector(".createTaskInCategory-btn");
console.log(createTaskButtons);
//? Define list containers
let categoryLists = document.querySelector(".categoryList ul");
console.log(categoryLists);

//? Start of 
let checkboxes = document.querySelectorAll(".checkbox");
console.log(checkboxes);

//? Event listener for each create task button

    createTaskButtons.addEventListener("click", () => {
        console.log("Clicked");
        let newListItem = document.createElement("li");
        
        categoryLists.appendChild(newListItem);
        
        let newListItemInner = `<input type="checkbox" class="checkbox"> <input type="text" placeholder="Task list item" class="listText">`;

        newListItem.innerHTML = newListItemInner;
        
        checkboxes = document.querySelectorAll(".checkbox");
        console.log(checkboxes);
        
        for (box of checkboxes) {
        box.addEventListener("change", () => {
            if (box.checked) {
                console.log("Checked.");
                newListItem.remove();
                
            }
        })
}
    })

createCategoryButton.addEventListener("click", () => {
    
})