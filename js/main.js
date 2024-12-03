$('#dodajForm').submit(function(){
  event.preventDefault();
  const $form = $(this);
  const $inputs = $form.find('input,select,button,textarea');
  const $serijalizacija = $form.serialize();

  request = $.ajax(
    {url:'handler/add.php',
      type:'post',
      data:$serijalizacija
    }
  );
  request.done(function(response,textStatus,jqXHR) {
    
    if(response === "Success"){
      alert("Kolokvijum je zakazan");
      location.reload(true);
    }
    else alert("Nije zakazan");
  })

  request.fail(function(jqXHR,textStatus,error){
    console.error("Greskaa"+textStatus);
  })
})