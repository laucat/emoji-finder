// Search Script
(() => {
  const inputField = document.getElementsByTagName('input')[0];
  let typeTimeout;
  const TYPE_INTERVAL = 10000;

  // Event Listener: Input
    // 1. Get value of input
    // 2. Reset timeout
    // 3. Send value onward and set a timeout
    inputField.addEventListener("input", (event) => {
      const value = event.target.value;
      if(typeTimeout) window.clearTimeout(typeTimeout);
      if(value) { 
        typeTimeout = delay(matchKeyword(value), TYPE_INTERVAL);
      }
    },false);
    
  const matchKeyword = (value) => {
    // 1. Compare value against emojis
    // 2. Verify that we got emojis based off the value
    // 3. Add matched emojis to matched Emojis
    
    let matchedEmojiTitles = [];
    
    const matchedObjects = 
    EMOJIS.filter(filterByKeyword.bin(this, value));
     
     if (matchedObjects.length == 0) return;
     matchedObjects.map((obj)=> {
       matchedEmojiTitles.push(obj.keywords[0]);
     });
    
    
  }
  
  const filterByKeyword = (value, obj) => {
    console.log(value, obj);
    return obj.keywords.some((keyword) => {
      return value === keyword;
      
    });
  }

  const delay = (func, delay) => {
    window.setTimeout(func, delay);
  }
})();





// FOR REFERENCE: Please don't just copy and paste. How are you going to learn anything then? ;)
// inputField.addEventListener("input", (event) => {
  // const value = event.target.value;
  // if (typeTimeout) window.clearTimeout(typeTimeout);

  // if (value) {
  //   typeTimeout = delay(matchKeyword(value), TYPE_INTERVAL);
  // }
// }, false);
