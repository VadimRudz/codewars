const object = {
    "amount": "<long>", "currencyCode": "<string>", "beneficiary": {"id": "<string>","name": "<string>",
        "iban": "<string>",
        "bic": "<string>",
        "accountNumber": "<string>",
        "sortCode": "<string>",
        "type": "<string>",
        "address": {
            "house": "<string>",
            "address1": "<string>",
            "address2": "<string>",
            "city": "<string>",
            "county": "<string>",
            "postalCode": "<string>",
            "countryCode": "<string>"
        },
        "currencyCode": "<string>"
    },
    "reason": "<string>",
    "note": "<string>",
    "reference": "<string>"
};


//   function test(amount_2, obj){
//     const copy2 = {...obj, [amount_2]: 150 };
//     console.log(copy2);
//   }

//   test('amount', object);



// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 };
console.log(copy);

const copy2 = {...original, c: 2 };
console.log(copy2);

const copy3 = {...original, ['c']: 3 };
console.log(copy3);

