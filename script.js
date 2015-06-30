$(document).ready(function() {
	console.log("working js");

	var $form = $("#new_todo_list");
	var $List = $("#todo_list");
	
	var $itemName = $("#item-name");
	var $itemDesc = $("#item-desc");

	$form.on("submit",
		function(event) {
			event.preventDefault();
			console.log($itemName.val());
			$List.append("<li>" + $itemName.val() + ": " + $itemDesc.val() +  "</li>");


		}
	)
	var $allLis = $("li");

	$List.on("click", "li",
		function() {
			// alert('clicked');
			$(this).addClass("done");
		}
	)


})

