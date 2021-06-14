$("#date").text(new Date().toLocaleDateString());

$.getJSON(
  "https://www.nbrb.by/api/exrates/rates?periodicity=0",

  function (result) {
    console.log(result);
    $.each(result, function (i, field) {
      console.log("field", field);
      var tr =
        "<td>" +
        field.Cur_Name +
        "</td><td>" +
        field.Cur_Scale +
        "  " +
        field.Cur_Abbreviation +
        "</td><td>" +
        field.Cur_OfficialRate +
        "</td>";
      $("#currencyTable tbody").append("<tr>" + tr + "</tr>");
    });
  }
);
