let todo=[];
let req=prompt("please  enter your request");

while(true){
    if(req=="quit")
    {
        console.log("quitting the app");

        break;
    }

    if(req=="list"){
        console.log("-------------------");
        for(let i=0; i<todo.length; i++){
            console.log(i,todo[i]);
        }
        console.log("--------------------");
    }
    else if(req=="add"){
        let task=prompt("plese enter the task you want");
        todo.push(task);
        console.log("task added");
    }else if(req=="delete"){
        let idx=prompt("plese enter the task index ypu want to delete");
        todo.splice(idx,1);
        console.log("task deleted");
    }
    else{
      console.log("wrong choice");
    }
    
      req=prompt("please  enter your request");

}