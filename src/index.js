import b from './test.js';
import css from "./style.scss";
import axios from "axios";

axios.get("https://hexschool.github.io/ajaxHomework/data.json").then
(function(response){
  console.log(response);  
})


b++;