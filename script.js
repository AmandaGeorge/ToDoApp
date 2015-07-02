$(document).ready(function() {
	console.log("working js");

	var $form = $("#todo_list_form");
	var $List = $("#todo_list");
	
	var $itemName = $("#item-name");
	var $itemDesc = $("#item-desc");

	// to compile the template
	var _todoTemplate = _.template($("#toDo-template").html());

	//test data
	var testToDos = [
		{name: "homework", desc: "wdi modules"},
		{name: "walk dog", desc: "30 minutes"},
		{name: "cook dinner", desc: "pasta sauce"}
	];

	//append existing todo's from testToDos to '$List'
	// _.each(testToDos, function(todo, index) {
	// 	var $toDo = $(todoTemplate(todo));
	// 	$toDo.attr("data-index", index); //save object's index in array to an HTML data attribute so we can delete elements from DOM
	// 	$List.append($toDo);
	// });

	//constructor function
	function ToDo(name, desc) {
		this.name = name;
		this.desc = desc;
	};

	ToDo.all_todos = [];

	ToDo.prototype.save = function() {
		ToDo.all_todos.push(this);
	}

	ToDo.prototype.render = function() {
		var $toDo = $(_todoTemplate(this));
		//$toDo.attr("data-index", index); //save object's index in array to an HTML data attribute so we can delete elements from DOM
		$List.append($toDo);
	}
	

	$form.on("submit",
		function(event) {
			event.preventDefault();
			// var todoData = {
			// 	name: $itemName.val(), 
			// 	desc: $itemDesc.val()
			// }; // creates empty object; but no longer needed b/c ToDo constructor will do this for us
			//var $newToDo = $(todoTemplate(todoData));
			//$List.append($newToDo);

			var myTodo = new ToDo($itemName.val(), $itemDesc.val());
			myTodo.save();
			myTodo.render();
		
			$form[0].reset();
			$("#item-name").focus();
		}
	);

	

	var $allLis = $("li");

	$List.on("click", "li",
		function() {
			// alert('clicked');
			$(this).addClass("done");
		}
	);


})

