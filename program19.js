function CheckEvenOdd(no)
{
    if((no%2) == 0)
    {
        console.log("Number is Even")
    }
    else
    {
        console.log("Number is Odd");
    }
}
function main()
{
   let iValue = 11;
   CheckEvenOdd(iValue); 
}
main();