* Create your own resume data in JSON Format.


let myResume={
    "basics": {
      "name": "VINOD G",
      "email": "vinodvinu26803@.com",
      "phone": 1234567899,
      "degree": "BCA",
      "location": {
        "address": "OMR",
        "postalCode": 603103,
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "https://www.linkedin.com/in/vinod-t-685958219/",
          "github":"https://github.com/VINNOODD"
        }
      ]
    },
    "work": [
      {
        "company": "BIG BASKET",
        "position": "DELIVERY Executive",
        "startDate": "2020-01-10",
        
        "summary": "i am the delivery executive",
      },
    ],
    "education": [
      {
        "institution": "ALAGAPPA UNIVRTSITY",
        "department": "BCA",
        "studyType": "KARAS DRGREE",
        "batch start year": 2022,
        "batch end year": 2025,
       
      }
    ],
    "skills": [
      {
        "name": "javascript",
        "level": "beginer",
        
      }
    ],
    
    "interests": [
      {
        "name": "READING BOOK",
      }
    ]
  }
  console.log(myResume);



  * FOR THE ABOVE JSON ITERATE OVER ALL FOR LOOP (FOR IN FOR OF)


  var json = [{
    "id" : "vinod", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of)",
    "task" : "zen portal task",
    "mail": "vinodvinu26803@gmail.com"
},
{
    "id" : "vinod2", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of)",
    "task" : "zen portal task",
    "mail": "vinodvinu2680@gmail.com"
}];

for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);


    