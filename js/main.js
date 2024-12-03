$('#dodajForm').submit(function(){
  event.preventDefault();
  const $form = $(this);
  //const $inputs = $form.find('input,select,button,textarea');
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


$('#izmeniForm').submit(function(){
  event.preventDefault();
  const $form = $(this);
  //const $inputs = $form.find('input,select,button,textarea');
  const $serijalizacija = $form.serialize();
  console.log($serijalizacija);

  request = $.ajax(
    {url:'handler/update.php',
      type:'post',
      data:$serijalizacija
    }
  );
  request.done(function(response,textStatus,jqXHR) {
    console.log(response);
    if(response === "Success"){
      alert("Kolokvijum je izmenjen");
      location.reload(true);
    }
    else alert("Nije izmenjen");
  })

  request.fail(function(jqXHR,textStatus,error){
    console.error("Greskaa"+textStatus);
  })
})