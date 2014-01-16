// JavaScript Document

// Glenn O'Dell 1-16-2014 expresions_worksheet

var originalPrice = 75.00;

var discount = 25;

var Item = "video game";

var tax = 7;

var off = originalPrice / discount;

var discountPrice = originalPrice - off;

var taxAmount = discountPrice / tax;

var WOtax = discountPrice;

var wTax = discountPrice + taxAmount;

console.log("Your " + Item + " was originally $" + originalPrice + ", but after a " + discount + "% discount, it is now $" + WOtax + " without tax, and $" + wTax + " with tax.");
