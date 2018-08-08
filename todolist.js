// var todos = [];
 
// // Due to Chrome console querk/bug occurrence, wait 3 seconds before popup loop begins.
// // Open Chrome console BEFORE the popup loop begins to potentially prevent recurrence.
// window.setTimeout(function() {
 
//   var input = prompt("What would you like to do?");
 
//   while (input !== "quit")
//   {
//     if (input === "list")
//     {
//       // For-each loop to print out each to-do on a new line (in user-friendly manner)
//       console.log("************************");
//       todos.forEach(function(toDo, indexValue)
//       {
//         var toDoNumber = indexValue + 1;
//         console.log("#" + toDoNumber + ": " + toDo);
//        });
//        console.log("************************");
//      }
//      else if (input === "new")
//      {
//        var item = prompt("Type the to-do item you want to add.");
//        todos.push(item)
//      }
//      // Else If "delete" is inputted, remove specific item from list based on further input
//      else if (input === "delete")
//      {
//        // Prompt user to provide list value number (which is not the correct index value)
//        var itemNumber = prompt("Enter item number to remove the item from list.");
 
//        // Initialize variable to store the correct index value of the item to remove
//        var itemIndex = itemNumber - 1;
 
//        // Remove the item from list
//        todos.splice(itemIndex, 1)
//       }
      
//      input = prompt("What would you like to do?");
//    }
 
//   console.log("App has quit.");
 
// }, 300);

window.setTimeout(function() {

var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	//handle input
	if (input === "list") {
		console.log("**********")
		todos.forEach(function(todo, i){
			var todoNumber = i + 1;
          console.log("#" + todoNumber + ": " + todo);
		});
		console.log("**********")
	}   else if (input === "new") {
		//ask for new todo
		var newTodo = prompt("Enter new date");
		//add to todos array
		todos.push(newTodo);
	}   else if (input === "delete") {
		//ask for index of todo to be deleted
		var index = prompt("Enter index of todo to delete");
		//delete that todo
		//splice()
		todos.splice(index, 1);
	}
	//ask again for new input
	input = prompt("What would you like to do?");
}
console.log("OK,YOU QUIT THE APP");

}, 500);













