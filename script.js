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
            flexContainer.append(description);
            let btnBuy = document.createElement("button");
            btnBuy.className = "btn-buy";
            btnBuy.innerHTML = "Buy Book";
            flexContainer.append(btnBuy);
            fragmentContainer.append(flexContainer);
        }
        document.body.append(fragmentContainer);
    }

let container = document.createElement("div");
let wrapper = document.createElement("div");
let paragraph = document.createElement("p");
container.className = "main-container";
wrapper.className="wrapper";
paragraph.className = "main-text";
container.innerHTML = "hello everyone";
wrapper.innerHTML = "Welcome!";
paragraph.innerHTML = "this is my bookshop";
wrapper.appendChild(paragraph);
container.appendChild(wrapper);
document.body.append(container);

