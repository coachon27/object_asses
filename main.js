
let coin = {
    state: 0,
    flip: function() {
        if (Math.random() > .5) {
            this.state = 1;
        } else {
            this.state = 0;
        }
    },

    toString: function() {
        let div = document.createElement('div')
        document.body.appendChild(div)
        if (this.state === 1) {
            return div.append("Heads");
        } else {
            return div.append("Tails");
        }
    },

    toHTML: function() {
        let image = document.createElement('img');
        document.body.appendChild(image);
        if (this.state === 1) {
            image.src = "images/silverDollar_heads.jpg", width = 20, height = 20;
            document.write("<br>");
        } else {
            image.src = "images/silverDollar_tails.jpg", width = "100px", height = "100px";
            document.write("<br>")
        }
    },
}
function display20Flips() {
    for (let i = 0; i < 20; i++) {
        coin.flip();
        coin.toString();
    }
}

function display20Images() {
    for (let i = 0; i < 20; i++) {
        coin.flip();
        coin.toHTML();
    }
}
display20Flips();
display20Images();
    // console.log(coin.state)
    // coin.flip();
    // coin.toString();
    // console.log(coin["state"])