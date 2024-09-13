//Synchronous = execute line by line consecutive in a sequential manner code that waits for an operation to complete .
// Asynchronous = Allows multiple operation to be performed concurrently without waiting Doesn't block the execution of flow and allows the program to continue 
// I/O operation , network requests, fetching data )
// handled with : callbacks , promises , Async/ Await 


function func1(callback){
    setTimeout(()=>{console.log("Task 1");
        callback()
    },3000)

}
function func2(){
    console.log("Task2");
    console.log("Task3");
    console.log("Task4");
}
func1(func2);