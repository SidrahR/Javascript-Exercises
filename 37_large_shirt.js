// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript.Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(text, size = "large"){
    console.log(text, "will be printed on", size ,"size T-shirt");
  }

make_shirt("'I love JavaScript'");
make_shirt("'I love JavaScript'", "medium");
make_shirt("'I love JavaScript'", "small");