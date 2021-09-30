let ballTop = 5;
    let ballLeft = 5;
    document.addEventListener("keydown", (event) => {
      let keyName = event.key;
      if (keyName === "ArrowUp") {
        document.getElementById("ball").style.backgroundColor = "red";
        ballTop -= 10;
      } else if (keyName === "ArrowRight") {
        ballLeft += 10;
        document.getElementById("ball").style.backgroundColor = "green";
      } else if (keyName === "ArrowDown") {
        ballTop += 10;
        document.getElementById("ball").style.backgroundColor = "yellow";
      } else if (keyName === "ArrowLeft") {
        ballLeft -= 10;
        document.getElementById("ball").style.backgroundColor = "blue";
      } else {
        return alert("USE AS SETAAAS!!");
      }
      document.getElementById("ball").style.top = ballTop + "px";
      document.getElementById("ball").style.left = ballLeft + "px";
    });