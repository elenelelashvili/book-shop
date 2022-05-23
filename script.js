fetch('./books.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(function(data) {
            showMe(data);
        });

        function showMe(data){
            
            
            
            let fragmentContainer = new DocumentFragment();
            fragmentContainer.className = "fragment-container";
            const showButtons =[];
            const rememberDescription=[];

            for(let i = 0; i < data.length; i++){
            let flexContainer = document.createElement("div");
            flexContainer.className = "flex-container";
            let photo = document.createElement("img");
            photo.className = "book-image";
            photo.src=data[i].imageLink;
            flexContainer.append(photo);
            let title = document.createElement("p");
            title.className = "titles";
            title.innerHTML = data[i].title;
            flexContainer.append(title);
            let author = document.createElement("p");
            author.className = "authors";
            author.innerHTML = data[i].author;
            flexContainer.append(author);
            let cost = document.createElement("p");
            cost.className = "prices";
            cost.innerHTML = data[i].price + "$";
            flexContainer.append(cost);
            let description = document.createElement("p");
            description.className="descriptions";
            description.innerText=data[i].description;
            rememberDescription.push(description);
            flexContainer.append(description);
            console.log(rememberDescription);
            let btnShow = document.createElement("button");
            btnShow.className = "btn-show";
            showButtons.push(btnShow);
            btnShow.innerHTML = "Show More";
            flexContainer.append(btnShow);
            

            let btnBuy = document.createElement("button");
            btnBuy.className = "btn-buy";
            btnBuy.innerHTML = "Buy Book";
            flexContainer.append(btnBuy);
            fragmentContainer.append(flexContainer);

            btnBuy.onclick = () => {
                // BasketContent.innerHTML = "textBasket";
                let book = document.createElement("div");
                book.className = "cart-book";
                let titleMini = document.createElement("p");
                titleMini.innerHTML = data[i].title;
                book.append(titleMini);

                let authorMini = document.createElement("p");
                authorMini.innerHTML = data[i].author;
                book.append(authorMini);

                let costMini = document.createElement("p");
                costMini.innerHTML = cost.innerText;
                allMoney+= data[i].price;
                Money.innerText = "Total Cost: " + allMoney + "$";
                book.append(costMini);
                



                let btnRemoveBook = document.createElement("button");
                btnRemoveBook.className = "remove-book";
                btnRemoveBook.innerText = "remove";
                btnRemoveBook.onclick = () => {
                    allMoney-= data[i].price;
                    Money.innerText = "Total Cost: " + allMoney + "$";
                    book.remove();

                }
                book.append(btnRemoveBook);
                


                BasketContent.append(book);
            }

            btnShow.onclick = function () {
                // for (let i = 0; i < showButtons.length; i++) {
                //     if (showButtons[i].clicked === true) {
                //         if (rememberDescription[i].style.display === "none") {
                //             rememberDescription[i].style.display = "block";
                //         } else {
                //             rememberDescription[i].style.display = "none";
                //         }
                //         break;
                //     }
                // }
                if(description.style.display === "none"){
                    description.style.display = "block";
                    btnShow.innerHTML = "Show less";
                }else{
                    description.style.display = "none";
                    btnShow.innerHTML = "Show More";
                }
            };
        }
        document.body.append(fragmentContainer);
    }

let container = document.createElement("div");
let wrapper = document.createElement("div");
let paragraph = document.createElement("p");



//nav end

//cart start
let cartDiv = document.createElement("div");
cartDiv.className="cart-div";
let cart = document.createElement("img");
cart.className="cart";
let shoppingCart = document.createElement("i");
shoppingCart.className="fa fa-shopping-cart";
cart.src="cart.png";
let numberOfItems = document.createElement("div");
numberOfItems.className="number-of-items";
numberOfItems.innerHTML="0";
//cart end
    let BasketContent = document.createElement("div");
    BasketContent.className="basket-content";
    BasketContent.innerHTML="i am basket";

    let allMoney = 0;

    let Money = document.createElement("p");
    

    BasketContent.append(Money);


container.className = "main-container";
wrapper.className="wrapper";
paragraph.className = "main-text";
container.innerHTML = "hello everyone";
wrapper.innerHTML = "Welcome!";
paragraph.innerHTML = "this is my bookshop";
wrapper.appendChild(paragraph);
container.appendChild(wrapper);
cartDiv.appendChild(cart);
cartDiv.appendChild(numberOfItems);
let orderBtn = document.createElement("button");
orderBtn.className = "order-btn";
orderBtn.innerHTML = "Confirm order";
orderBtn.onclick = () =>{
    location.href = "order.html";
}
BasketContent.appendChild(orderBtn);

cartDiv.appendChild(BasketContent);


cart.onclick = ()=>{
    if(BasketContent.style.display === "none"){
        BasketContent.style.display = "block";
    }else{
        BasketContent.style.display = "none";
    }
}


document.body.append(cartDiv);
document.body.append(container);