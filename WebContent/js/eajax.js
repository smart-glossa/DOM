$(window).on('load', function() {
  $(document).on('click', '#butt', function() {
    var name=$('#name').val();
    var  age=$('#age').val();
    var gender=$('#gender').val();
    var favColor=$('#favColor').val();
    var dob=$('#dob').val();
    var url="/rd/hi?operation=add&name="+name+"&age="+age+"&gender="+gender+"&favColor="+favColor+"&dob="+dob
$.ajax(url)
.done(function(result){
 console.log();
  //  alert(result);
  }).
  fail(function(result){
   console.log();
  // alert(result);
  })
  });
});
