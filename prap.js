var person = function(firstname,lastname){
this.firstname = firstname;
this.lastname = lastname;
};

function logit()
{
    
    var sumit = new person('sumit','kumar');
    console.log(sumit);
}

logit();