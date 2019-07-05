function merge(almA, almB) {
    var mergeArray = [];
    var norep = 0;
    var arrsum = [];
    var sum = 0;
    for (let i = 0; i < almA.length; i++) {
        if (almA[i].id == almB[i].id) {
            console.log('id: ' + almA[i].id + 'c ' + almA[i].quantity)
            sum = almA[i].quantity + almB[i].quantity;
            arrsum.push(sum)
            console.log('arrsum' + arrsum);
            norep = { id: almA[i].id, quantity: sum }
            mergeArray.push(norep);
        } else {
            mergeArray.push(almA[i]);
            mergeArray.push(almB[i]);
        }
    }
    return mergeArray;
}


var almA= [
    {
      id: '1224',
      quantity: 22
    },
    {
      id: '1343',
      quantity: 35
    },
    {
      id: '152',
      quantity: 199
    },
    {
      id: '1342',
      quantity: 88
    }
  ];

var almB= [
    {
      id: '1223',
      quantity: 22
    },
    {
      id: '1343',
      quantity: 35
    },
    {
      id: '1523',
      quantity: 199
    },
    {
      id: '1342',
      quantity: 100
    }
  ];