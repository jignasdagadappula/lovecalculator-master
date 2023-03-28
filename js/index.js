function randomNum(){
    var n = Math.random();
    n = n * 100;
    n = Math.floor(n + 1);
    document.getElementById("1").innerHTML =(n + "%");

  }
