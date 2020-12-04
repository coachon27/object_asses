
let coin = {
    state: 0,
    flip: function() {
        //shortcut>>  this.state = Math.round(Math.random())
        if (Math.random() > .5) {
            this.state = 1;
        } else {
            this.state = 0;
        }
    },

    toString: function() {
//shortcut>>>  return (this.state === 0) ? "Heads" : "Tails";
        //let div = document.createElement('div')
       // document.body.appendChild(div)
        if (this.state === 1) {
            return "Heads";
        } else {
            return "Tails";
        }
        //return div
    },
    toHTML: function() {
        let image = document.createElement('img');
       // document.body.appendChild(image);
        if (this.state === 1) {
            image.src = "images/silverDollar_heads.jpg";
            image.style.width = "100px";
            image.style.height = "100px";      
           // document.write("<br>");
        } else {
            image.src = "images/silverDollar_tails.jpg";
            image.style.width = "150px";
            image.style.height = "100px";
      
           // document.write("<br>")
        }
    return image
    },
}
function display20Flips() {
    for (let i = 0; i < 20; i++) {
        coin.flip();
        //console.log(coin.toString());
let li = document.createElement('li'); 
li.innerHTML = coin.toString(); 
document.body.append(li);
//document.body.append(coin.toString());
    }
}

function display20Images() {
    for (let i = 0; i < 20; i++) {
        coin.flip();
        document.body.append(coin.toHTML());
    }
}
display20Flips();
display20Images();
    // console.log(coin.state)
    // coin.flip();
    // coin.toString();
    // console.log(coin["state"])