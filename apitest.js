var request=require("request");
var token="";
var padr="https://uswitchsuppliers.eu.auth0.com/oauth/token/";

request.post(padr,{json:{"client_id":"TIugFdCMsBVR66pLNVteDIGZ1dDGaO0P",
"grant_type":"client_credentials",
"client_secret":"S1j80cH6FvJ3pFxd2zR2JrQVcPdU036dCNo-4Ix4DfUAf5ELy_Yuz-ToTAJ5aTRL",
"audience":"https://broadband-customer-api-staging.external.usw.co/"
}},
function(error,res,body){
if(!error ){
console.log("This is token generated paste it after Bearer and run the script :   ");
console.log(res.body.access_token);

token = res.body.access_token

}
});

var options= {
url: "https://broadband-customer-api-staging.external.usw.co/customer/mock?shared_journey_id=000001", 
json:true,
method: 'GET',

headers: {

'Content-Type': 'application/json',
'Accept':'text/plain',
'Authorization':'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik16VXlOek5DTXpSRVF6SXpOakZGTkVJNFJrRkZPVFEzTnpaRE9EVTBRVUZGTWpaQlFUUTBSQSJ9.eyJpc3MiOiJodHRwczovL3Vzd2l0Y2hzdXBwbGllcnMuZXUuYXV0aDAuY29tLyIsInN1YiI6IlRJdWdGZENNc0JWUjY2cExOVnRlRElHWjFkREdhTzBQQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2Jyb2FkYmFuZC1jdXN0b21lci1hcGktc3RhZ2luZy5leHRlcm5hbC51c3cuY28vIiwiaWF0IjoxNjMyMTI2MzIyLCJleHAiOjE2MzIyMTI3MjIsImF6cCI6IlRJdWdGZENNc0JWUjY2cExOVnRlRElHWjFkREdhTzBQIiwic2NvcGUiOiJnZXQtY3VzdG9tZXItaW5mbyBicm9hZGJhbmQtcHJvdmlkZXIta2V5OnNreSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.go11RmTO1GEYPZbWfZC3z-L24pZPz35m-rOvvAc7qq9DIBsIclVZowXzwtmWuRziRTcDgfkZAG4oFGVN9BcsHalLtUu9C9cCskZfh-rFJYpoE47Lj2nhSTzRiRFucZ6iUh-iBc1ni3_lmDbBWHHKnVNIoLItqDpU1Kh3odluhRDkzzMPtX06DIdxPn65HBpydUyc0JwugV4GOnsX4r_vfntLxxHEA92v4orRq91CBEWeAh9rjC0VmvtmGKtFFABnBIOXq70ipbOdJPTRVAaceWussoZKAfN0uU1VUecZXv_hX3Jy-f7YJ9XBxlCbqtROte3BNL3ykvIqd_PW2E3bHA',
//'shared_journey_id' : '000001',

},
rejectedUnauthorized:false

};

var callback=(error,response)=>{
console.log(response.body);
}

request(options,callback);



