let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }

  let pname = prompt("What is your name?");

  if(pname in guestList){
      console.log("Hi! I'm " + pname + ", and I'm from " + guestList[pname] +".");
  }

  else{
      console.log("Hi! I'm a guest.");
  }