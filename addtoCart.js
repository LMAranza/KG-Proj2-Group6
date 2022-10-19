var addItemId = 0

// ADD ITEM FUNCTION
function addToCart(item){
    addItemId += 1;

    // GETS THE PROPERTIES OF THE SELECTED ITEMS
    var imgSource = item[0].children[0].children[0].src; // IMAGE SOURCE GRABBER  
    // console.log(imgSource)
   
    var productText = item[1].innerText // PRODUCT NAME GRABBER
    // console.log(productText)

//     THIS CODE BLOCK LINE 15-16 WAS NOT IMPLEMENTED
//     var productQuantity = item[0].children[1].children[3].children[0].children[0].children[0].value // QUANTITY GRABER
    // console.log(productQuantity)

    var productPrice = item[0].children[1].children[1].children[0].children[0].innerText // PRICE GRABBER
    // console.log(productPrice)

    // CREATE THE ELEMENTS OF THE SELECTED ITEMS UPON ADDING TO CART
        var cartRow = document.createElement('div')
        cartRow.classList.add('my-4', 'cart-row')
        cartRow.setAttribute('id', addItemId)
        // console.log(cartRow)

        var cartRowChild = document.createElement('div')
        // console.log(cartRowChild)
        cartRowChild.classList.add('cart-item', 'cart-column')
        cartRow.appendChild(cartRowChild)

        var cartRowImage = document.createElement('img')
        cartRowImage.classList.add('cart-item-image')
        cartRowImage.setAttribute('src', imgSource)
        cartRowImage.setAttribute('width', 100)
        cartRowImage.setAttribute('height', 100)
        console.log(cartRowImage)

        var cartProductName = document.createElement('span')
        cartProductName.classList.add('cart-item-title')
        cartProductName.innerHTML = productText
        console.log(cartProductName)

        var cartPrice = document.createElement('span')
        cartPrice.classList.add('cart-price', 'cart-column')
        cartPrice.innerHTML = "₱" + productPrice

        var cartQuantityColumn = document.createElement('div')
        cartQuantityColumn.classList.add('cart-quantity', 'cart-column')

                // DELETE BUTTON
                var delButton = document.createElement('button')
                delButton.classList.add('btn', 'btn-danger')
                delButton.setAttribute('type', 'button')
                delButton.setAttribute('onclick', 'removeFromCart('+addItemId+')')
                delButton.innerHTML = 'remove'
                cartQuantityColumn.append(delButton)

        var cartItems = document.getElementById('cartCanvas')
        cartRowChild.append(cartRowImage)
        cartRowChild.append(cartProductName)
        cartRow.append(cartRowChild)
        cartRow.append(cartPrice)
        cartRow.append(cartQuantityColumn)
        cartItems.append(cartRow)

//         console.log(cartRowChild)
//         cartRow.appendChild(cartRowChild)
        
        // console.log(cartRow)
        
        // UPDATE TOTAL PRICE 
        var totalPrice = document.getElementById('totalPrice').innerHTML
        var totalAmount = document.getElementById('totalPrice')
        
        // TOTALS THE PRODUCT ADDED IN THE CART
        totalAmount.innerHTML = parseInt(totalPrice) + parseInt(productPrice)
}

// REMOVE ITEM FUNCTION
function removeFromCart(item) {
        var totalPrice = document.getElementById('totalPrice').innerHTML
        var totalAmount = document.getElementById('totalPrice')
        var productItem = document.getElementById(item)
        var priceSubstring = productItem.children[1].innerHTML
        var result = parseInt(priceSubstring.substring(1))

        // SUBTRACTS REMOVED ITEM FROM THE TOTAL
        totalAmount.innerHTML = parseInt(totalPrice) - parseInt(result)

        document.getElementById(item).remove() // REMOVES THE PRODUCT/HTML_ELEMENT FROM THE CART
}
