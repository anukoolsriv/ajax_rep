import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajax-comm',
  templateUrl: './ajax-comm.component.html',
  styleUrls: ['./ajax-comm.component.css']
})
export class AjaxCommComponent implements OnInit {

  url:string = "https://api.github.com/users/";
  username:string;
  result:any;
  constructor() { }

  ngOnInit() {
  }
  getGithubData():void{
    // alert(this.username);
    this.url += this.username;

    // create XMLHTTPRequest for ajax

    let xhr = new XMLHttpRequest();
    xhr.open("GET", this.url, true);
    xhr.responseType = "text";
    xhr.send();

    xhr.onload = function(){
      if(xhr.status === 200){
        document.getElementById("result").innerHTML = xhr.responseText;
      }
      else{
        document.getElementById("result").innerHTML = "Username not found";
      }
    }
    // alert(this.url);
  }

}
