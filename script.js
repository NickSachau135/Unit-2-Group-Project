let dec = Number(prompt(`Enter a decimal number between 0 and 255.`));
let decforbinary = dec;


let bin1 = 0;
let bin2 = 0;
let bin3 = 0;
let bin4 = 0;
let bin5 = 0;
let bin6 = 0
let bin7 = 0;
let bin8 = 0;
if(decforbinary >= 128)
{
    decforbinary -= 128;
    bin1=1;    
}
if(decforbinary >= 64)
{
    decforbinary -= 64;
    bin2 = 1;
}
if(decforbinary >= 32)
{
    decforbinary -= 32;
    bin3 = 1;
}
if(decforbinary >= 16)
{
    decforbinary -= 16;
    bin4 = 1;
}
if(decforbinary >= 8)
{
    decforbinary -= 8;
    bin5 = 1;
}
if(decforbinary >= 4)
{
    decforbinary -= 4;
    bin6 = 1;
}
if(decforbinary >= 2)
{
    decforbinary -= 2;
    bin7 = 1
}
if(decforbinary >= 1)
{
    decforbinary -= 1;
    bin8 = 1;
}
console.log(`The binary of ${dec} is ${bin1}${bin2}${bin3}${bin4} ${bin5}${bin6}${bin7}${bin8}`);