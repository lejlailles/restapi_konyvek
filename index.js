$(function () {

  /*ajax js példányosítás*/
  const myajax = new MyAjax();

  /*elérési út*/
  let apivegpont = "http://localhost:3000/konyvek";
  const szuloelem = $(".megjelenit");
 
  // apivegpont+=szuro;
  console.log(apivegpont);

  /*Tömb*/
  const ab = [];

  /*rendezés*/
  let rendezes = "?_sort=ar&_order=desc";
  $("#rendezes").on("click", () => {
    apivegpont += rendezes;
    myajax.adatotBeolvas(apivegpont, ab, megjelenit);
  });

  /*Keresés*/
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


  /* Adat törlés */
  $("#torol").on("click", () => {
    
    myajax.deleteAdat(apivegpont,1);
  });

  /*Adat módosítás*/

  $("#modosit").on("click", () => {
    let ujadat = {
       szerzo: "Delia Owens",
        cim: "Ahol a folyami rákok énekelnek",
        ar: 2000,
        tipus: "regény"
    };
    myajax.putAdat(apivegpont, ujadat,2);
  });

  /*Select*/
  function select(){
    const szulElem=$("#selectSzulo");
    const opcio=$("#selectOpcio");
    ab.forEach((elem,index)=>{
      const hozzAd = opcio.clone().appndTo(szulElem);
      myajax.adatotBeolvas(apivegpont,ab,megjelenit);
    });
    opcio.remove();


  }

  /*Adatok kiírása*/

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
