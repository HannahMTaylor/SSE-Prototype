//index.html scripts
document.addEventListener("DOMContentLoaded", function() {
    const viewForm = document.getElementById("viewButton");

    viewForm.addEventListener("click", function() {
        //redirect to view form page
        window.location.href = "viewForm.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const editForm = document.getElementById("editButton");

    editForm.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit1.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const editForm = document.getElementById("altEditButton");

    editForm.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "editForm.html";
    });
});





//Shared scripts
document.addEventListener("DOMContentLoaded", function() {
    const printButton = document.getElementById("printButton");

    printButton.addEventListener("click", function() {
      // Print the current page
      window.print();
    });
  });

//   document.addEventListener("DOMContentLoaded", function() {
//     const redirectButton = document.getElementById("toggleButton");
  
//     redirectButton.addEventListener("click", function() {
//       // Redirect to another HTML page
//       window.location.href = "indexAnotherLanguage.html";
//     });
//   });


//viewForm scripts
document.addEventListener("DOMContentLoaded", function() {
    const viewBack = document.getElementById("view");

    viewBack.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "index.html";
    });
});


//editForm scripts
//
//this one not used -- not working correctly yet
function enableTextBox (checkboxID, txtboxID) {
    if(document.getElementById(checkboxID).checked == true)
        document.getElementById(txtboxID).disabled = false;
    else
        document.getElementById(txtboxID).disabled = true;
}




//back button flows
document.addEventListener("DOMContentLoaded", function() {
    const back1 = document.getElementById("b1");

    back1.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "index.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const back2 = document.getElementById("b2");

    back2.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit1.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const back3 = document.getElementById("b3");

    back3.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit2.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const back4 = document.getElementById("b4");

    back4.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit3.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const back5 = document.getElementById("b5");

    back5.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit4.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const back6 = document.getElementById("b6");

    back6.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit5.html";
    });
}); 
document.addEventListener("DOMContentLoaded", function() {
    const back7 = document.getElementById("b7");

    back7.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit6.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const back8 = document.getElementById("b8");

    back8.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit7.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const back9 = document.getElementById("b9");

    back9.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit8.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const back10 = document.getElementById("b10");

    back10.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit9.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const back11 = document.getElementById("b11");

    back11.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit10.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const back12 = document.getElementById("b12");

    back12.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit11.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const back13 = document.getElementById("b13");

    back13.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit12.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const back14 = document.getElementById("b14");

    back14.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit13.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const back15 = document.getElementById("b15");

    back15.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit14.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const back16 = document.getElementById("b16");

    back16.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit15.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const back17 = document.getElementById("b17");

    back17.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit16.html";
    });
});












//continue button flows
document.addEventListener("DOMContentLoaded", function() {
    const cont1 = document.getElementById("c1");

    cont1.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit2.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cont2 = document.getElementById("c2");

    cont2.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit3.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cont3 = document.getElementById("c3");

    cont3.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit4.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cont4 = document.getElementById("c4");

    cont4.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit5.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cont5 = document.getElementById("c5");

    cont5.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit6.html";
    });
});//pick up here with 6!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
document.addEventListener("DOMContentLoaded", function() {
    const cont6 = document.getElementById("c6");

    cont6.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit7.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cont7 = document.getElementById("c7");

    cont7.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit8.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cont8 = document.getElementById("c8");

    cont8.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit9.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cont9 = document.getElementById("c9");

    cont9.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit10.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cont10 = document.getElementById("c10");

    cont10.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit11.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cont11 = document.getElementById("c11");

    cont11.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit12.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cont12 = document.getElementById("c12");

    cont12.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit13.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cont13 = document.getElementById("c13");

    cont13.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit14.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cont14 = document.getElementById("c14");

    cont14.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit15.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cont15 = document.getElementById("c15");

    cont15.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit16.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cont16 = document.getElementById("c16");

    cont16.addEventListener("click", function() {
        //redirect to edit form page
        window.location.href = "altEdit17.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cont17 = document.getElementById("c17");

    cont17.addEventListener("click", function() {
        //redirect to edit form page
        //alert("Form Submitted Successfully");

        // save popup
       
        var banner = document.getElementById('saveBanner');
        banner.style.display = 'block';

        setTimeout(function() {
            banner.style.display = 'none';
        }, 2000);
        
        setTimeout(function() {
            window.location.href = "index.html";
        }, 2050);
        
    });
});



