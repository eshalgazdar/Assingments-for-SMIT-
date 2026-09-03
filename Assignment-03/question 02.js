let heading = document.getElementById("title");


let paragraph = document.getElementById("message");


let button = document.getElementById("showBtn");

button.onclick = function() {

    alert(heading.textContent);

   
    console.log(paragraph.textContent);
};

document.write("<p>This message was created using document.</p>");