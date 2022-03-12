


genarateCustomerId();



$("#btnSaveOrUpdate").click(function () {
      let id = $("#txtCusId").val();
      let name = $("#txtCusName").val();
      let tp = $("#txtCusTp").val();
      let address = $("#txtCusAddress").val();


      customerDB.push(new Customer(id,name,tp,address));
      alert("Customer Added Completed..");
      clearCustomerText();
      genarateCustomerId();
      loadAllCustomer();

});

function clearCustomerText() {
    $("#txtCusId").val("");
    $("#txtCusName").val("");
     $("#txtCusTp").val("");
   $("#txtCusAddress").val("");
}


function loadAllCustomer(){
    $("#customerTable").empty();
    customerDB.forEach(function (i) {
        let row = `<tr><td>${i.getId()}</td><td>${i.getName()}</td><td>${i.getTp()}</td><td>${i.getAddress()}</td></tr>`;
        $("#customerTable").append(row);
    });
}



function genarateCustomerId() {
    if (customerDB.length!=0) {

        let lastrecord = customerDB[customerDB.length - 1].getId();
        let split = lastrecord.split("-");
        let splitElement = ++split[1];
        if (splitElement < 10 && splitElement > 0) {
            $("#txtCusId").val("C00-" + "00" + splitElement);
        } else if (splitElement > 99) {
            $("#txtCusId").val("C00-" + splitElement);

        } else {
            $("#txtCusId").val("C00-001");
        }
    }else{
        $("#txtCusId").val("C00-001");
    }
}
