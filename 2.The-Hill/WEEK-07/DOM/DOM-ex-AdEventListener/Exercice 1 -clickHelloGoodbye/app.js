  const hello = document.querySelector("button:first-of-type");
  hello.addEventListener("click", () => {
    alert('Oh my God ! You again !!!');
  });

  const goodbye = document.querySelector("button:last-of-type");
  goodbye.addEventListener("click", () => {
    alert('Thank God ! I thought you\'d never leave !');
  });
