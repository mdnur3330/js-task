/***
task 4

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// let myMarks = 3;
// let fMarks = 3;

// if(myMarks>=80 && fMarks >= 80){
//     console.log('we will go to the chg for lanc');
    
// }else{
//     if(myMarks<80){
//         console.log('going to caf for eating prohebeted for me');
        
//     }else{
//         if(fMarks>=60 && fMarks<80){
//             console.log('good luck next time jabo');
            
//         }else{
//             if(fMarks>= 40 && fMarks< 60){
//                 console.log('his massege will be unsend');
                
//             }else{
//                 if(fMarks<40){
//                     console.log('he will be blockd from my facebook');
                    
//                 }
//             }
//         }
//     }
// }

/***
task 5

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let psengar = 'children';
let cost = 800;

if(psengar=='children'){
    console.log('full free');
    
}else{
    if(psengar == 'student'){
        let discount = cost * 50 / 100
        console.log(cost - discount);
        
    }else{
       if( psengar == 'senior citizens'){
        let discount = cost * 15 / 100
        console.log(cost - discount);
       }else{
        console.log('you have to pay regular vara 800 tk');
        
       }
    }
}