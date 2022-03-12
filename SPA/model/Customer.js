function Customer(id,name,tp,address) {
    var id=id;
    var name=name;
    var tp=tp;
    var address=address;
    var customerOrder=new Array();


    this.getCustomerOrder=function (){
        return customerOrder;
    }


    this.setId=function(cusId){
        id=cusId;
    }

    this.getId=function () {
        return id;
    }

    this.setName=function (cusName) {
        name=cusName;
    }

    this.getName=function () {
        return name;
    }

    this.setAddress=function (cusAddress) {
        address=cusAddress;
    }

    this.getAddress=function () {
        return address;
    }

    this.setTp=function (cusTp) {
        tp=cusTp;
    }

    this.getTp=function () {
        return tp;
    }
}