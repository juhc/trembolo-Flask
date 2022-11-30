$(document).ready(function () {
    $(".address").suggestions({
        token: "769af09233b6a876d49ff4d46a81778823647a36",
        type: "ADDRESS",
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function (suggestion) {
            console.log(suggestion);
        }
    });
});

jQuery(function ($) {
    $("#phone").mask("+7 (999) 999-9999");
});

function increment_product(product_id) {
    document.getElementById(product_id + "-count").innerHTML++
    fetch('/increase-product', {
        method: 'POST',
        body: JSON.stringify({ productId: product_id })
    })
}

function decrement_product(product_id) {
    if (document.getElementById(product_id + "-count").innerHTML > 1) {
        document.getElementById(product_id + "-count").innerHTML--
        fetch('/decrease-product', {
            method: 'POST',
            body: JSON.stringify({ productId: product_id })
        })
    }
    else {
        fetch('/delete-product', {
            method: 'POST',
            body: JSON.stringify({productId: product_id})
        }).then((_res) => {
            window.location.href = '/';
        });
    }
}
