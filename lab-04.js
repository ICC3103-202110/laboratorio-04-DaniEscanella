 
 const functionView = counter => `Count: ${counter}`;

 const functionUpdate = (msg, counter) => {
     if (msg=="+"){
        return counter
     } else{
         return counter*-1
     }
 }

 console.log(functionView(3));
 console.log(functionUpdate("-" , 3));

