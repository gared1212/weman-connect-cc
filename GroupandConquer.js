// Group and Conquer
// Level: Entry
// Time: 15-25 min

// The content of 2 warehouses (A & B) have been moved to a bigger warehouse (C).

// Warehouse A and B are represented by a list of items each item has 2 attributes: first is the
// item Identifier which is a String of length > 0 < 30 and quantity which is an Integer > 0 < 200
// The result of this action is that we may have repeated items that we need to count as a single
// item for that we need to merge both warehouses eliminating repeated items but summarizing
// quantities.

// Input:

// List1:
// 1224,22
// 1343,35
// 152,199
// 1342,88

// List2:
// 1223,22
// 1343,35
// 1523,199
// 1342,100


// Output:
// Result List:
// 1223,22
// 1224,22
// 1344,70
// 1523,199
// 1342,188

var fullList = [
    {
        id: 1224, 
        quantity: 22
    },
    {
        id: 1343, 
        quantity: 35
    },
    {
        id: 152, 
        quantity: 199
    },
    {
        id: 1342, 
        quantity: 88
    },
    {
        id: 1223, 
        quantity: 22
    },
    {
        id: 1343, 
        quantity: 35
    },
    {
        id: 1523, 
        quantity: 199
    },
    {
        id: 1342, 
        quantity: 100
    }

]

var wareHouseA = [
    {1224:22},
    {1343:35},
    {152:199},
    {1342:88}
];
var wareHouseB = [
    {1223:22},
    {1343:35},
    {1523:199},
    {1342:100}
];

function wareHouseMerge(list1, list2){
    console.log("function starts");
    list3=[];
    for(var i=0; i<list1.length; i++){

        var tmpAmount=list1[i][Object.keys(list1[i])[0]];

        for(var j=0; j<list2.length;j++){
            
            list3.push();
            console.log("list1 item " + i +" " + list2[i][Object.keys(list1[i])[0] ] );
        }
        
    }
    console.log("end of function");
    return list2;
}
JSON.stringify( wareHouseMerge(wareHouseA, wareHouseB) );




// console.log("La lista integrada es", fullList );

// var nuevaLista= fullList.filter((va, ia, arr) => {
//     return arr.findIndex(va => JSON.stringify(va === JSON.stringify(va)) === ia)
    
// });

// console.log("Ahora es:", nuevaLista);


// List2:
// 1223,22
// 1343,35
// 1523,199
// 1342,100