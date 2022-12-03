const element = ["navbar-name", "navbar-namehidden", "item", "contact", "projects-carousel", "itemcontent", "contactme"]
const sizes = ["cm", "%", "px"]


  var i = 0
  function setColor() {
    setTimeout(function() {
      const rand1 = Math.floor(Math.random() * element.length);
      const rand2 = Math.floor(Math.random() * 10) + 1;
      const randSize = Math.floor(Math.random() * sizes.length);
      var randFont = rand2 + sizes[randSize];
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      document.getElementById(element[rand1]).style.color = "#" + randomColor;
      document.getElementById(element[rand1]).style.fontSize = randFont;
      i++;
      if (i == 1) {
        alert("Chaos!");
        setColor();
      }
      else if (i < 50) {
        setColor();
      }
    }, 250)

  }

