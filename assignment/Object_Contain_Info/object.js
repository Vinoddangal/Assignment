var obj = {    
    name: 'Vinod',    
    address: 'Thali',
    email: 'vinod@gmail.com',
    interes: 'cricket',
    education: 'BIT'
};
var keys = Object.keys(obj);
for (var i = 0; i < keys.length; i++)
{    
    var key = keys[i];    
    var value = obj[key];
    console.log(key, value);
}
