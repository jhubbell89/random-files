
// submit button
function addLi() {
    var skilliInput = document.getElementById('skillinput').value,
        listNode = document.getElementById('skillset'),
        liNode = document.createElement('li'),
        txtNode = document.createTextNode(skilliInput);
  
    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);
  }
  
  const myForm = document.querySelector('#addskillbtn');
  myForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
  });

//delete function
  

