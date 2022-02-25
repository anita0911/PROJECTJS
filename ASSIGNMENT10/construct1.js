class Product{
    constructor(Itemname,Price,Discount,ProductCode)
    {
        this.Itemname= Itemname;
        this.Price   = Price;
        this.Discount= Discount;
        this.ProductCode= ProductCode;
    }
}
let pen=new Product('pencil',20,2,'P10');
console.log(pen);