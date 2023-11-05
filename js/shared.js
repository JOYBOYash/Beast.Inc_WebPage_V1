window.addEventListener("load", function() {
    const form = document.getElementById('Gform');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Successfully Submitted!, You'll recieve Mail from us Soon..");
      })
    });
  });
  