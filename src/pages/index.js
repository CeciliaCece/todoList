import b from '../js/test';
import "../../scss/style.scss";
import axios from "axios";
import 'bootstrap';
import * as bootstrap from 'bootstrap';

axios.get("https://hexschool.github.io/ajaxHomework/data.json").then
(function(response){
  console.log(response);  
})

b++;
//console.log(process.env.DB_HOST);