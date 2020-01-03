var i , j;
function pattern(pattern)
{
    //outer loop
for(i=pattern; i>=1; i--)
{
    //inner loop
    for(j=1; j<=i; j++)
    {
        console.log("*".repeat(i));
    }
}
}
pattern(5);