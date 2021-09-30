    let ballTop = 5;
    let ballLeft = 5;
    document.addEventListener("keydown", (event) => {
      let keyName = event.key;
      if (keyName === "ArrowUp") {
        document.getElementById("ball").style.backgroundImage = "url('/deidara2.gif')";
        ballTop -= 10;
      } else if (keyName === "ArrowRight") {
        document.getElementById("ball").style.backgroundImage = "url('/deidara1.gif')";
        ballLeft += 10;
      } else if (keyName === "ArrowDown") {
        document.getElementById("ball").style.backgroundImage = "url('/deidara.gif')"
        ballTop += 10;
      } else if (keyName === "ArrowLeft") {
        ballLeft -= 10;
        document.getElementById("ball").style.backgroundImage = "url('/deidara3.gif')";
      } else {
        return alert("USE AS SETAAAS!!");
      }
      document.getElementById("ball").style.top = ballTop + "px";
      document.getElementById("ball").style.left = ballLeft + "px";
    });