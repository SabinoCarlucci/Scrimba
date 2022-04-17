const washBtn = document.querySelector("#wash-btn");
const mowBtn = document.querySelector("#mow-btn");
const pullBtn = document.querySelector("#pull-btn");
const sendBtn = document.querySelector("#send-btn");
const serv = document.querySelector(".servizi");
const prez = document.querySelector(".prezzi");
const notes = document.querySelector("#notes");
const total = document.querySelector("#total");
let invoices = [];

document.addEventListener( "click", delInvoice ); //click event for deleting single invoices
function delInvoice(event){
    var element = event.target;
    if(element.tagName == 'DIV' && element.classList.contains("deleteMe")){
        let text = element.parentElement.textContent;
        findText(text);
        delInvoiceFromArray(newText);
        element.parentElement.remove();
        sum();
    }
}

function findText(text) { //extrapolates invoice's name for deleting
        index = text.length;
        index -=6;
        newText = text.substr(0, index);
        return newText;
};

function delInvoiceFromArray(text) { //deletes invoice from array
    let ind = invoices.findIndex(o => o.service === text)
    let costToRemove = invoices[ind].cost;
    document.querySelector(`#p${costToRemove}`).remove();
    invoices.splice(ind, 1);
};

washBtn.addEventListener("click", function() {
    addInvoice("Wash car", 10);
});

mowBtn.addEventListener("click", function() {
    addInvoice("Mow lawn", 20);
});

pullBtn.addEventListener("click", function() {
    addInvoice("Pull weeds", 30);
});

sendBtn.addEventListener("click", function() {
    invoices = [];
    serv.innerHTML = ``;
    prez.innerHTML = ``;
    sum()
    notes.innerHTML = ``
});

function addInvoice(name, cost) {
    if (invoices.length) {
        if (!invoices.find(caso => caso.service == name)) {
        invoices.push({service: name, cost: cost});
        serv.innerHTML += `<li>${name}<div class="deleteMe">delete</div></li>`;
        prez.innerHTML += `<li id="p${cost}">$${cost}</li>`;
        sum();
       }
    } else {
       invoices.push({service: name, cost: cost});
       serv.innerHTML += `<li>${name}<div class="deleteMe">delete</div></li>`;
        prez.innerHTML += `<li id="p${cost}">$${cost}</li>`;
        sum()
    }  
};

function sum() {
    let totalCost = 0;
    for (let i=0; i < invoices.length; i++) {
        totalCost += invoices[i].cost
    };
    total.innerHTML = `$${totalCost}`
    if (totalCost > 0) {
        notes.innerHTML = `We accept cash, credit card or PayPal`
    } else {
        notes.innerHTML = ""
    }
}