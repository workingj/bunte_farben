import { handle } from "./errorHandle.js";

let articles = document.getElementsByTagName("article");

try {
  for (let i = 0; i < articles.length; i++) {
    articles[i].onclick = function (a) {
      trigger(a);
    };
  }
} catch (error) {
  handle(error);
}

function trigger(elm) {
  for (let i = 0; i < articles.length; i++) {
    articles[i].setAttribute("class", "");
  }
  elm.currentTarget.setAttribute("class", "clicked");
}
