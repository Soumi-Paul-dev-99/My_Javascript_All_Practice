/* 
Write a JavaScript program to display the current day and time in the following format.

output = Today is : Tuesday.
Current time is : 10 PM: 30 : 38 */

 var today = new Date()
 var day = today.getDay();
 var daylist = ["Sunday" , "Monday", "Tuesday" , "Wednesday" , "Thursday" , "Friday", "Saturday"]
 console.log("today is: "+ daylist[day]+"." );
 var hour = today.getHours();
 var minute = today.getMinutes();
 var second = today.getSeconds();
 var prepand = ()