 var myFirebaseRef = new Firebase("https://popping-torch-8324.firebaseIO.com/");
 var flats = new Firebase("https://popping-torch-8324.firebaseIO.com/flats");
function renderFlats(data){
	var $results = $('.results');
	
	$results.html('');
  		for(key in data){
  			$('<div data-id="'+key+'"></div>').appendTo('.results');
			var container = $('[data-id='+key+']');
			if(data[key][0]){
				$('<h1>Price:'+data[key][0].value+'</h1>').appendTo(container);
			}
			if(data[key][1]){
				$('<p>Area:'+data[key][1].value+'</>').appendTo(container);
			}

  		}
}
$(document).ready(function () {
	$('#addFlat').on('submit', function(e){
		e.preventDefault();

		var $form = $(e.target);

		flats.push($form.serializeArray());

	});

	flats.on("value", function(snapshot) {
  		var data = (snapshot.val());
  		console.log(data);
  		renderFlats(data);
  		
	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});


	// Retrieve new posts as they are added to our database
	flats.on("child_added", function(snapshot, prevChildKey) {
	  var newPost = snapshot.val();

	  renderFlats(newPost);
	});
});