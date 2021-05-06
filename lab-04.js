 var prompt = require('prompt-sync')({sigint:true});

 const functionView = counter => `Count: ${counter}`;

 const functionUpdate = (msg, counter) => {
     if (msg=="+"){
        return counter+1
     } else{
         return counter-1
     }
 };

 const functionApp = (counter) =>{
    const currentView = functionView(counter);
    console.clear();
    console.log(currentView);
    console.log();
    console.log ('(+) (-)');
    console.log();
    console.log('(q) for quit');
    const msg = prompt("What would you do? ")
    if (msg=='q'){
        return counter
    } else {
        counter = (functionUpdate(msg , counter));
        functionApp(counter);
     }
 };
 
 functionApp(0);


