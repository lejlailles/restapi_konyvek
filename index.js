$(function () {
  const myajax = new MyAjax();
  let apivegpont = "http://localhost:3000/konyvek";
  const szuloelem = $(".megjelenit");
  let rendezes = "?_sort=ar&_order=desc";
  // apivegpont+=szuro;
  console.log(apivegpont);
  const ab = [];
  $("#rendezes").on("click", () => {
    apivegpont += rendezes;
    myajax.adatotBeolvas(apivegpont, ab, megjelenit);
  });
  $("#kereses").on("keyup", () => {
    let apivegpont = "http://localhost:3000/konyvek";
    apivegpont += "?q=" + $("#kereses").val();
    myajax.adatotBeolvas(apivegpont, ab, megjelenit);
  });

  myajax.adatotBeolvas(apivegpont, ab, megjelenit);

  /*Adatok beillesztése*/

  $("#ujadat").on("click", () => {
    let ujAdat = {
      szerzo: $("#szerzo").val(),
      cim: $("#cim").val(),
      ar: $("#ar").val(),
      tipus: $("#tipus").val(),
    };
    myajax.postAdat(apivegpont, ujAdat);
  });


  $("#torol").on("click", () => {
    
    myajax.deleteAdat(apivegpont,1);
  });

  $("#modosit").on("click", () => {
    let ujadat = {
       szerzo: "Delia Owens",
        cim: "Ahol a folyami rákok énekelnek",
        ar: 2000,
        tipus: "regény"
    };
    myajax.putAdat(apivegpont, ujadat,2);
  });

  function megjelenit(tomb) {
    let sablon = "";
    tomb.forEach((elem) => {
      sablon += `
        <div><h3>${elem.szerzo}</h3><br>
        <h4 class="cim">${elem.cim}</h4><br>
        <span class="ar">${elem.ar}</p>
        <br>
        <p>${elem.tipus}</p><br><br>
        </div>
        
  `;
    });


    szuloelem.html(sablon);
  }
});
