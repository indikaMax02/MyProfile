function Item(id,name,qty,price,discount) {
    var id=id;
    var name=name;
    var qty=qty;
    var price=price;
    var discount=discount;


    this.setDiscount=function (itemDiscount) {
        discount=itemDiscount;
    }

    this.getDiscount=function () {
        return discount;
    }

    this.setId=function(ItemId){
        id=ItemId;
    }

    this.getId=function () {
        return id;
    }

    this.setName=function (ItemName) {
        name=ItemName;
    }

    this.getName=function () {
        return name;
    }

    this.setQty=function (ItemQty) {
        qty=ItemQty;
    }

    this.getQty=function () {
        return qty;
    }

    this.setPrice=function (ItemPrice) {
        price=ItemPrice;
    }

    this.getPrice=function () {
        return price;
    }
}