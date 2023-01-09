
// Iterating using FOR Loop
    var Resume = 
    [{
    "Name" : "Hariharan L",
    "Age" : "25",
    "DOB" : " 11/05/1997"
    }]
    for(let i = 0; i < Resume.length; i++)
    {
      console.log(Resume[i]);
    }
    
// Iterating JSON using FOR in Loop
    
    var Resume = 
    {
    "Name" : "Hariharan L",
    "Age" : "25",
    "DOB" : " 11/05/1997"
    }
    
    for(var i in Resume)
    {
     console.log(i, Resume[i]);
    }










