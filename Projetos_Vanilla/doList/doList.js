

function done(id) {

 item = document.getElementById(id).classList.toggle("feito")




function save(item) {
    var checkStatusStorage = localStorage.getItem(item);
      if (checkStatusStorage == 'true'){
                document.getElementById(item).checked = true ;
                }else{
                document.getElementById(item).checked = false ;
      }
    }

    
    return item


}



// function save(){


    
 
//     let segunda1 = document.getElementById("segunda1").value
//     let segunda2 = document.getElementById("segunda2").value
//     let segunda3 = document.getElementById("segunda3").value
   
//     localStorage.segunda1 = segunda1;
//     localStorage.segunda2 = segunda2;
//     localStorage.segunda3 = segunda3;


 
//    } 

// save()