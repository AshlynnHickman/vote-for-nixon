let popUps = {
    pop1: function(){ 
        alert("Please fix any mistakes below");
    },
    pop2: function(){ 
        document.getElementById("popUp").innerHTML = 
        "WARNING! Please fix any options you have mischosen";
    },
    pop3: function(){ 
        alert("Please fix any mistakes below");
    },
    pop4: function(){ 
        alert("Please fix any mistakes below");
    }, 
    pop5: function(){ 
        alert("Please fix any mistakes below");
    },
    pop6: function(){ 
        alert("Please fix any mistakes below");
    }
};

function randomPop() {
  var randomNumber = Math.floor(Math.random() * (popUps.length));

  document.getElementById("popUp").innerHTML = popUps[randomNumber];
  document.getElementById("popUp").innerHTML = "test";  
}