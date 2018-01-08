class Layout {
    render() {
        document.getElementsByTagName('body')[0].innerHTML += "<h1>TEST</h1>";
        $(document.body).load("./src/layout/layout.html")
    }
}

module.exports = new Layout();
