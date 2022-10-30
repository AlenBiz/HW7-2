class but {
    constructor(width, height, type, color) {
      this.width = width;
      this.height = height;
      this.type = type;
      this.color = color;
      this.props = [this.width, this.height, this.type, this.color]
    }
    
    oneClick() {
      console.log(this.props);
    }
  }
  
  let myBut = new but(57, 45, "button", "green");
  
  
  myBut.oneClick();
  
  
  function testButton(but, testWidth, testHeight, testType, testColor) {
    return but.width === testWidth && but.height === testHeight && but.type === testType && but.color === testColor;
  }
  
  console.log(but, 57, 45, "button", "green"); // true