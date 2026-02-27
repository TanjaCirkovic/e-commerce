const VALID_COUPONS = ["SAVE10", "SAVE15", "FREESHIP"];   

function normalizeCoupon(code) {
    return code.trim().toUpperCase();
}

function isValidCoupon (code){
    code = normalizeCoupon(code);
    return VALID_COUPONS.includes(code)
}

function validateAndNotify() {
    const INPUT = document.getElementById("promo_code").value;
    const NORMALIZED_CODE = normalizeCoupon(INPUT);
    if (isValidCoupon(NORMALIZED_CODE)){
        alert("Uneti kod je validan.")
        if (NORMALIZED_CODE === "SAVE10"){
            alert ("Vaš kupon donosi 10% popusta.")
        }else if (NORMALIZED_CODE === "SAVE15"){
            alert ("Vaš kupon donosi 15% popusta.")
        }else if (NORMALIZED_CODE === "FREESHIP"){
            alert ("Vaš kupon donosi besplatnu dostavu.")
        }
    }else{
        alert("Uneti kod nije validan.")};
    }
