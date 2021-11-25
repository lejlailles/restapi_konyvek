class MyAjax {
  constructor() {}

  adatotBeolvas(apivegpont, tomb, myCallback) {
    tomb.splice(0, tomb.length);
    $.ajax({
      url: apivegpont,
      type: "GET",
      success: function (result) {
        result.forEach((elem) => {
          tomb.push(elem);
        });

        myCallback(tomb);
      },
    });
  }

  postAdat(apivegpont, adat) {
    $.ajax({
      url: apivegpont,
      type: "POST",
      data: adat,
      success: function (result) {
        console.log(result);
      },
    });
  }

  deleteAdat(apivegpont, id) {
    $.ajax({
      url: apivegpont + "/" + id,
      type: "DELETE",

      success: function (result) {},
    });
  }

  putAdat(apivegpont, adat, id) {
    $.ajax({
      url: apivegpont + "/" + id,
      type: "PUT",
      data: adat,
      success: function (result) {},
    });
  }


  
}
