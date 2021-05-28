
$(document).ready(
  function(){
    $('#getdata').click(function(){
              let number = $('#number').val();
              $.get(
                  "http://numbersapi.com/"+number,
                  function(view){
                   $('#data').text(view);
                   console.log("number",view);
              })          
      }
    )
  }
  ) 

  $(document).ready(
      function(){
        $('#getmath').click(function(){
                  let math = $('#math').val();
                  $.get(
                      "http://numbersapi.com/"+math,
                      function(view){
                       $('#data').text(view);
                       console.log("math",view);
                  })          
          }
        )
      }
      ) 


      $(document).ready(
          function(){
            $('#getdate').click(function(){
                      let date = $('#date').val();
                      $.get(
                          "http://numbersapi.com/"+date,
                          function(view){
                           $('#data').text(view);
                           console.log("date",view);
                      })          
              }
            )
          }
          ) 

            $(document).ready(
          function(){
            $('#getmonth').click(function(){
                      let month = $('#month').val();
                      $.get(
                          "http://numbersapi.com/"+month,
                          function(view){
                           $('#data').text(view);
                           console.log("date",view);
                      })          
              }
            )
          }
          ) 