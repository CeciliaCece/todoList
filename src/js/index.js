//import b from './test';
import "../scss/style.scss";

//import axios from "axios";


  /*axios.get("https://hexschool.github.io/ajaxHomework/data.json").then
    (function (response) {
      console.log(response);
    })*/

if ("production" === "production") {
  console.log("production");
}
if ("production" === "development") {
  console.log("development");
}

  //b++;
  //console.log(process.env.DB_HOST);

  //module.hot.accept();
  if (module.hot) {
    module.hot.accept();
  }


