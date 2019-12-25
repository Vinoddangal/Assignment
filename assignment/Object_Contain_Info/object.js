var obj = {    
    name: 'Vinod',    
    address: 'Thali',
    email: 'vinod@gmail.com',
    interest: 'cricket',
    education : {name: ["Aakash Deep","SANN","KIST"], enrolled: [2070,2073,2074] }
};
console.log(obj.name);
console.log(obj.address);
console.log(obj.email);
console.log(obj.interest);

for(i=0; i<obj.education.name.length; i++)
{
    console.log(obj.education.name[i],":");
    console.log(obj.education.enrolled[i]);
}
