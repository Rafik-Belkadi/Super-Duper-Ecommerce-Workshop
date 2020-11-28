var names = ["chocolat", "cheese", "kda mena", "Zetla", "kinder pingui", "Zitoune", "Mechoui f chbab", "Kebch", "Rolex"]
var prices = [12, 8, 7, 5, 15, 300, 4, 2, 1000]
var products = []
var cart = []
var productsGridHtml = ""
var productsCheckoutHtml = ""
for (let index = 0; index < names.length; index++) {
    const name = names[index];
    const price = prices[index];
    var product = {
        id: index,
        name: name,
        price: price,
        quantity: 1
    }
    products.push(product);
    productsGridHtml += `<div class="col-md-4">
                        <div class="card mb-4 box-shadow">
                            <img class="card-img-top"
                                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;"
                                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17609e8b5a0%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17609e8b5a0%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                data-holder-rendered="true">
                            <div class="card-body">
                                <h4 class="card-title">${name}</h4>
                                <p class="card-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto et quos vel temporibus asperiores aliquam doloremque excepturi quam, reiciendis labore?</p>
                                <div class="d-flex justify-content-between align-items-center">

                                    <button onclick="addToCart(${index})" type="button" class="btn  btn-primary">Add to cart</button>

                                    <p class="font-weight-bold">${price}.00 $</p>
                                </div>
                            </div>
                        </div>
                    </div>`
}
document.getElementById("products").innerHTML = productsGridHtml;
document.getElementById("quantite").innerHTML = cart.length;


const addToCart = (index) => {
    var currentProduct = products[index]
    const found = cart.find(element => element.id == currentProduct.id);
    if (found) {
        cart.forEach(element => {
            if (element.id == found.id) {
                element.quantity++
                document.getElementById("prod-"+element.id).innerHTML = element.quantity
            }
        });
    } else {
        cart.push(currentProduct)
        productsCheckoutHtml += `
                            <tr>
                                <th scope="row">${currentProduct.id}</th>
                                <td>${currentProduct.name}</td>
                                <td id="prod-${currentProduct.id}">${currentProduct.quantity}</td>
                                <td>${currentProduct.price}</td>
                                <td>
                                    <div class="btn btn-danger">Delete</div>
                                </td>
                            </tr>`
        document.getElementById("quantite").innerHTML = cart.length;
        document.getElementById("cartItems").innerHTML = productsCheckoutHtml;

    }

}
