function anagrama(arr1, arr2){
  var arr1Ord = [];
  var arr2Ord = [];
  for(let i in arr1){
    var ord = arr1[i].split('').sort().join('');
    arr1Ord.push(ord);
     var ord2 = arr2[i].split('').sort().join('');
    arr2Ord.push(ord2);
  }

  for(let i in arr1Ord){
    for(let j in arr2Ord){
    console.log(arr1Ord[i]);
     console.log(arr2Ord[j]);
    
    if(arr1Ord[i] !== arr2Ord[j]){
      return 'no es anagrama';
    }else{
      
    }
    
    
    }
  }
    console.log(arr1Ord);
    console.log(arr2Ord);
}

anagrama (["amor","monja","esponja"],["roma", "jamon","japones"]);