// Code here handles queries for specific characters in the database
// In this case, the user submits a character's name... we then pass that character's name as a
// URL parameter. Our server then performs the search to grab that character from the Database.

// when user hits the search-btn
console.log("js connected")


var refresh = function() {
  freshDiv =  $("#freshBurgers");
   ateDiv = $("#ateBurgers");
   freshDiv.empty();
   ateDiv.empty();
  console.log("ready func works")
  $.get('/api/burgers')
  .done(function(data){
    console.log(data)
   for (i in data) {
    if (data[i].devoured === false) {
      li = $('<li>').html(data[i].burger_name)
   btn = $('<button class="btn btn-primary">').attr('data-id', data[i].id)
   btn.html("eat it")
   freshDiv.append(li)
   freshDiv.append(btn)

      
    }
    else {
      li = $('<li>').html(data[i].burger_name)
   btn = $('<button class="btn btn-danger">').attr('data-id', data[i].id);
   btn.html("make it again");
   ateDiv.append(li)
   ateDiv.append(btn)

    }
   }
  });
}

$(document).ready(function() {
  refresh()
});

$(document).on("click", ".btn-primary", function() {
  id = $(this).data('id')
  $.get('/eat/'+id)
  .done(function() {
    refresh()
  })
})

$(document).on("click", ".btn-danger", function() {
  id = $(this).data('id')
  $.get('/make/'+id)
  .done(function() {
    refresh()
  })
})
// $("#newBurger").on("click", function(){
//   newOb = {
//     burger_name: $("#")
//   }
// })