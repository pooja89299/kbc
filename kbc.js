var question_list = [
    "How many continents are there?",              //pehla question
    "What is the capital of India?",            //doosra question
    "NG mei kaun se course padhaya jaata hai?"    // teesra question
]
var options_list = [
    //pehle question ke liye options
    ["Four", "Nine", "Seven", "Eight"],
    //second question ke liye options
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    //third question ke liye options
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
]
// har ek question ke liye, uski solution key (yeh index nahi hai)
var solution_list = [3, 4, 1] 
var answer_list=[
    ["(1)four","(3)seven"],
    ["(2)Bhopal","(4)Delhi"],
    ["(1)Software Engineering","(4)Agriculture"]
]
console.log("KON BANEGA COROREPATI***")
var i=0;
var s=0;
var count=0;
while(i<question_list.length){
    console.log(question_list[i])
    var a=0;
    var b=i;
    while(a<options_list[i].length){
        var k=options_list[b][a]
        console.log(a+1,k)
        a=a+1
    }
    const r=require("readline-sync")
    var lifeline=r.question("you want life line :")
    if (lifeline=="yes"){
        console.log("50 50 life line ")
        if (count==0){
            console.log(answer_list[b])
            var answer1=r.questionInt("enter your answer1")
            if (answer1==solution_list[i]){
                s=s+10000
                console.log("Your answer is correct")
                console.log("you won Rs/",s)
                count++;
            }else{
                console.log("your answer is wrong ")
                console.log("you won zero")
                break;
                // count++;
            }
            // break;
        }else{
            console.log("you already use life line:")
            var answer2=r.question("enter your second chance answer ")
            if(answer2==solution_list[i]){
                console.log("your answer is correct")
                console.log(s=s+10000,"you won Rs/:")
            }else{
                console.log("your anser is wrong")
                console.log("you win Rs/:",s)
                break;
            }
        }//break;
    }else{
        var answer3=r.question("enter your amswer3:")
        if(answer3==solution_list[i]){
            console.log("your anser is correct")
            s=s+10000
            console.log("you win Rs/:",s)
        }else{
            console.log("your anser is wrong ")
            console.log("you won Rs/:")
        }//i++;
    }i++

}console.log("congratulation you are a part of _KON BANEGA COROREPATI")
console.log("you win Rs/",s)
console.log("THANK YOU BEING PART OF KBC")