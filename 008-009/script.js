//get-obyektagi infoni oqish un xizmat lekn xech narsani ozratirish bermaydi
const product = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        calories: 100,
        get Summ() {
            return this.amount * this.price
        },
        get totalCalories() {
            return  this.amount * this.calories
        }

    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        calories: 200,
        get Summ() {
            return this.amount * this.price
        },
        get totalCalories() {
            return this.amount * this.calories
        }

    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        calories: 300,
        get Summ() {
            return this.amount * this.price
        },
        get totalCalories() {
            return this.amount * this.calories
        }

    }
}

const btnPlusOrMinus = document.querySelectorAll('.main__product-btn')
const receipt = document.querySelector('.receipt')
const receiptWindow = document.querySelector('.receipt__window')
const addCart = document.querySelector('.addCart')

for (let i = 0; i < btnPlusOrMinus.length; i++) {
    btnPlusOrMinus[i].addEventListener("click", function () {

        plusOrMinus(this)

    })
}
function plusOrMinus(element) {
    console.log(element);
    // closest-eng yaqin elememtga ulanib beradi(elementni o'zi)
    //  getAttribute (qandaydir br attributga) ulanadi
    const parent = element.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        out = parent.querySelector('.main__product-num'),
        cal = parent.querySelector('.main__product-kcall'),
        price = parent.querySelector('.main__product-price span');
    elementData = element.getAttribute('data-symbol')
    if (elementData == '+' && product[parentId].amount < 10) {
        product[parentId].amount++;
    } else if (elementData === "-" && product[parentId].amount > 0) {
        product[parentId].amount--;
    }

    out.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].Summ
    cal.innerHTML = product[parentId].totalCalories


    console.log(parent, parentId, out, price, elementData, product, totalCalories);
}

addCart.addEventListener("click", function () {
    receipt.style.display = 'flex'
    setTimeout(function () {
        receipt.style.opacity = '1'

    }, 500)
    setTimeout(function () {
        receiptWindow.style.top = '10%'

    }, 600)

    document.body.style.overflow = "hidden"



})