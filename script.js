let books = ["The Great Gatspy", "Sons and Lovers", "To KIll a Mockingbrid", "Pride and Prejudice", "1984", "Lord of the Flies"]
// document.getElementById('display').innerHTML = `<h3>Front of shelf</h3>`+ books.join('<br>') + `<h3>End of shelf</h3>`;

//q1 .unshift
function question1() {
   let textarea = document.getElementById('userText').value.trim();
   books.unshift(textarea);
   displayBooks();
};

//q2 .push
function question2() {
   let textsarea = document.getElementById('userText').value.trim();
   books.push(textsarea);
   displayBooks();
};

//q3 .shift
function question3() {
    books.shift();
    displayBooks();
};

//q4 .pop
function question4() {
    books.pop();
    displayBooks();
};

//display books
function displayBooks(){
   if(books.length == 0){
      document.getElementById('display').innerHTML = `<h3>no books on self</h3>`;
   }else{
      let html = `<h3>Front of shelf</h3><ol>`
         for (let i = 0; i < books.length; i++) {
            html += `<li>${books[i]}</li>`;
        }
        html += `</ol><h3>End of shelf</h3>`;
        document.getElementById("display").innerHTML = html;
    }
};

displayBooks()