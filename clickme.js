function incrementButton() {
    // var element = document.getElementById('incrementText');
    let element = document.querySelector('#incrementText span')
    var value = element.innerHTML;
    ++value;
    console.log(value);
    element.innerHTML = value;
}
