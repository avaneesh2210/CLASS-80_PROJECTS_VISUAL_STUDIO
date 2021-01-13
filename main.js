paragraph_array = [];

function paragraph_button(){
    for (var n = 1; i <=5 ; 1++);
    {
        paragraph_array.push(document.getElementById("1st_input" + n).value);
        paragraph_array.push(document.getElementById("2st_input" + n).value);
        paragraph_array.push(document.getElementById("3st_input" + n).value);
        paragraph_array.push(document.getElementById("4st_input" + n).value);
        paragraph_array.push(document.getElementById("5st_input" + n).value);
    }
    paragraph_array.join(". ");
    document.getElementById("show_paragraph").innerHTML = paragraph_array.join(". ");
}