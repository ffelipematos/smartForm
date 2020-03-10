function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

$(document).ready(function(){
    $("button").click(function(){
      //var form = JSON.stringify($("form").serializeArray());

     var form = getFormData($("form")); 

      $.each(form, (function(key, val){
          console.log(key,val);
      }))
      
      console.log(form);
    });

    $('#inputCPF').mask('000.000.000-00');
    $('#inputCEP').mask('00000-000');
  
  });