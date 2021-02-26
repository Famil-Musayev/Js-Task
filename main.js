monStrings=["Ayten","Ayshen","Pervin","Anar","Ismayil","Orxan","Elvin","Cavid","Ismail","Famil"];
  var arr=[];
  for (let index = 0; index < monStrings.length; index++) {
  arr[index]=0;
  } 
  function SimiliarName(humanName){   
  for (let i=0; i < monStrings.length; i++) {  
      for (let index = 0; index <humanName.length; index++) {  
          if(monStrings[i].toLowerCase().includes(humanName[index].toLowerCase())){
      arr[i]+=1;
          }  
      } 
        console.log(arr[i]) 
      } 
    resultIndex= arr.indexOf(Math.max(...arr));
    alert("The most similiar name is: " + monStrings[resultIndex]);
  }


  SimiliarName("ml");