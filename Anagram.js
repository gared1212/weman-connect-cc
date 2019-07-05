function anagram(arr1,arr2){
    var newArr1=[]
    var newArr2=[]
      for(let i=0;i<arr1.length;i++){
        var sort1 = arr1[i].split('').sort().join('')
        var sort2 = arr2[i].split('').sort().join('')
        newArr1.push(sort1)
        newArr2.push(sort2)
      }
      for(let i=0;i<newArr1.length;i++){
        if(newArr1[i] != newArr2[i]){
          return false
        }
      }
      return true
  }

  anagram(['AMOR','MONJA','ESPONJA'],['ROMA','JAMON','JAPONES'])