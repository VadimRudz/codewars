const object = {
    "amount": "<long>",
    "currencyCode": "<string>",
    "beneficiary": {
        "id": "<string>",
        "name": "<string>",
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
  
const clientAccountsBody = [
    {
        id: 'fe411951464d45f396989577f9575a2f',
        totalBalance: 100,
        availableBalance: 100,
        iban: 'GB24BKEN10000031510604',
        bic: 'FDFIGB22XXX',
        accountName: 'Stock purchase account',
        colour: 'red',
        icon: 'car',
        favourite: false,
        currencyCode: 'EUR',
        status: 'active',
    },
    {
        id: '4eb249695b584e6dbcb0355799011e15',
        totalBalance: 300,
        availableBalance: 300,
        accountNumber: '31510604',
        sortCode: '100000',
        accountName: 'Staff salary account',
        colour: 'green',
        icon: 'car',
        favourite: false,
        currencyCode: 'GBP',
        status: 'pending',
    },
];

//   function recLookup(obj, path) {
//     let parts = path.split(".");
//     if (parts.length==1){
//         return obj[parts[0]];
//     }
//     return recLookup(obj[parts[0]], parts.slice(1).join("."));
// }

//   function recLookup(obj, path){
//     let copy;
//     for (var i=0, path=path.split('.'), len=path.length; i<len; i++){ 
//       obj = obj[path[i]];
//     };
//     // console.log(obj);
//     return copy;
// };

// function recLookup(obj, path) {
//   let current=obj; 
//   path.split('.').forEach(function(p){ current = current[p]; });
//   // console.log(current); 
//   return current;
// }

// function recLookup(obj, path) {
//   var paths = path.split('.')
//     , current = obj
//     , i;

//   for (i = 0; i < paths.length; ++i) {
//     if (current[paths[i]] == undefined) {
//       return undefined;
//     } else {
//       current = current[paths[i]];
//     }
//   }
//   return current;
// }

// function recLookup(obj, path) {
//   var parts = path.split('.'),
//       rv,
//       index;
//   for (rv = obj, index = 0; rv && index < parts.length; ++index) {
//       rv = rv[parts[index]];
//   }
//   return rv;
// }
  
//   const getPath = (currPath, item) => {
//     let i = recLookup(object, currPath);
//     console.log(i);
//     if (Array.isArray(item)) {
//       item.forEach((el, idx) => getPath(`${currPath}.${idx}`, el));
//     } else if (typeof item == "object") {
//       Object.entries(item).forEach(([key, value]) => {
//         getPath(`${currPath}.${key}`, value);
//       });
//     }
//   };
  
//   Object.entries(object).forEach(([key, value]) => {
//     getPath(key, value);
//   });
