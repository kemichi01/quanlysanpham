let product = new Array("Sony Experia","samsung galaxy");
function showProDuct() {
    let content = "";
    for (let i = 0; i < product.length; i++) {
        content += '<tr>\n' +
            '            <td>'+(i+1)+'</td>\n' +
            '            <td>'+ product[i] +'</td>\n' +
            '            <td><button onclick="editProduct('+i+')">Edit</button></td>\n' +
            '            <td><button onclick="deleteProduct()">Delete</button></td>\n' +
            '        </tr>'
    }
    document.getElementById("list").innerHTML = content;
}
function addProduct() {
    let input = document.getElementById("input").value
    product.push(input);
    showProDuct();
    document.getElementById("input").value = "";
}
function editProduct() {
    let a = prompt("input product");
    product[index] = a;
    showProDuct();
}
function deleteProduct() {
    product.splice(index,1);
}