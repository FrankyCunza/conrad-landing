import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  
  private lheaders = new HttpHeaders().set('authorization', 'Basic a0ca60628a35ebdcf4743210da53ed0a-us17');
  // private lheaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
  // private lheaders = new HttpHeaders();
  // https://us17.api.mailchimp.com/2.0/lists/subscribe.json?apikey=a0ca60628a35ebdcf4743210da53ed0a-us17&id=33d7e5750f&email[email]=conrad7@gmail.com&merge_vars[MMERGE3]=65555555&merge_vars[FNAME]=John&merge_vars[LNAME]=Doe&double_optin=false&send_welcome=false
  submit(e) {
    e.preventDefault();
    // this.lheaders.append('Content-Type', 'application/json');
    // this.lheaders.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
    // this.lheaders.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    // this.lheaders.append('authorization', 'Basic a0ca60628a35ebdcf4743210da53ed0a-us17');
    console.log(this.lheaders)
    console.log("cargando")
    // lheaders.set('Access-Control-Allow-Origin', '*',)
    // lheaders.set('authorization', 'Basic a0ca60628a35ebdcf4743210da53ed0a-us17')
    // lheaders.set('Content-Type', 'application/json',)
    const data = {
      "email_address":"laptop@gmail.com",
      "email_type":"text",
      "status":"subscribed",
      "merge_fields":{},
      "interests":{},
      "language":"",
      "vip":false,
      "location":
      {
        "latitude":0,
        "longitude":0
      },
      "marketing_permissions":[],
      "ip_signup":"",
      "timestamp_signup":"",
      "ip_opt":"",
      "timestamp_opt":"",
      "tags":[]
    }

    this.http.post('https://us17.api.mailchimp.com/3.0/lists/33d7e5750f/members?skip_merge_validation=true', JSON.stringify(data), {headers: this.lheaders}).subscribe(res => {
      console.log(res);
    })
  }

}
