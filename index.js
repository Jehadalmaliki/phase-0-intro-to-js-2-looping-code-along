  
function writeCards(names) {
    // create an empty array to store the thank you messages
    let messages = [];
  
    // iterate over the names array
    for (let i = 0; i < names.length; i++) {
      // add a thank you message for each name to the messages array
      messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
  
    // return the array of thank you messages
    return messages;
  }

  function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
  