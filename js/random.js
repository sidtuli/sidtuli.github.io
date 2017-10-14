pages = {
    "d10,000 Tavern Name Generator":"assets/random/tavernname.html",
    "D&D Point Buy Checker":"assets/random/pointbuy.html",
    "Basic Flag Quiz":"assets/random/flagquiz.html",
    "Hue O'Clock Version 1":"assets/random/hue1.html",
    "Hue O'Clock Version 2":"assets/random/hue2.html",
    "Random Unicode Character":"assets/random/randuni.html"
}

page_names = Object.keys(pages)

Array.prototype.randval = function(){
    var ri = Math.floor(Math.random() * this.length);
    var val = this[ri];
    return val;
}

function switch_random() {
    page_name = page_names.randval()
    page_html_link = pages[page_name]
    document.getElementById("random-html").innerHTML = '<object type="text/html" data="'+page_html_link+'" ></object>'
    document.getElementById("random-title").innerHTML = page_name
}

window.onload = function() {
    switch_random()
}
