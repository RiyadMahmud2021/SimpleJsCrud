let form = document.getElementById("form");
let input = document.getElementById("text_area");
let msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
     e.preventDefault();
     console.log('Button Clicked');
     formValidation();
});

function formValidation(){
     if (input.value == "") {
          msg.innerHTML = "Post cannot be blank";
          
          setTimeout(vanish, 2000);
          function vanish() {
               msg.innerHTML = "";
          }

          console.log("failure");
     }
     else {
          console.log("success");

          msg.innerHTML = "Inserted";
          setTimeout(vanish, 1000);
          function vanish() {
               msg.innerHTML = "";
          }  
          acceptData();     
     }
}

// let data = {}; // data object declare for storing data in object
let data = []; // array declare for storing data in array firstly 

let acceptData = () => {
     data["text"] = input.value; // taking data in array element 
     console.log(data);
     addPost();
};

let addPost = () => {
     // data appending below by innerHTML  // '+='  for adding new parpass 
     posts.innerHTML += ` 

     <div> 
          <p>${data["text"]}</p>    <! --  as like as  https://stackoverflow.com/questions/35835362/what-does-dollar-sign-and-curly-braces-mean-in-a-string-in-javascript --> 
          <span class="options">
               <i onClick="editPost(this)" class="fas fa-edit"></i>
               <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
          </span>
     </div>
     
     `;
     input.value = ""; // took field value null // form reset 
}


let deletePost = (e) => {
     e.parentElement.parentElement.remove();   // number of parentElement is more than one : it counts before's event element  (here,  before's <i> : <span>, <p> )
}

let editPost = (e) => {
     if(input.value = e.parentElement.previousElementSibling.innerHTML ){
          e.parentElement.parentElement.remove();
     } 
     // no need new page for edit, event took us to the unput field  
     // it updates new edited post 
     // it deletes past post 
}
