const data = [
    {
        id: "1" ,
        question: "What is hoisting in JavaScript?",
        answer: "Raises variation and function declarations to the top of the scope.",
    },

    {
        id: "2",
        question: "What is the difference between == and ===?",
        answer: "== compare value; === compares value and type.",
    },
    
    {
        id: "3",
        question: "What is a callback function?", 
        answer: "Function passed as an argument and performed later.",
    },
    
    {
        id: "4", 
        question: "How does the concept of closure work in JavaScript?" ,
        answer: "Internal functions access variations of external functions.",
    },

];


const accordionWrapper = document.querySelector(".accordion");

function createAccorionData() {
    accordionWrapper.innerHTML = data.map(
        (dataItem) => 
        `
            <div class="accordion-item">
                <div class="accordion-title">
                    <h3>${dataItem.question}</h3>
                    <i class="fa-solid fa-arrow-down"></i>
                </div>
                <div class="accordion-content">
                    <p>${dataItem.answer}</p>
                </div>
            </div>
        ` 
    ).join(" ");
}


createAccorionData();


const getAccordionTitle = document.querySelectorAll(".accordion-title");

getAccordionTitle.forEach(currentItem => {
    currentItem.addEventListener("click", () => {
        if(currentItem.classList.contains("active")){
            currentItem.classList.remove("active");
        }else {
            let getAreadyActive = document.querySelectorAll(".active");
            
            getAreadyActive.forEach((currentActiveItem) => {
                currentActiveItem.classList.remove("active");
            })

            currentItem.classList.add("active");
        }
    })
});
