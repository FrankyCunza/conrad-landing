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
  
  // https://us17.api.mailchimp.com/2.0/lists/subscribe.json?apikey=a0ca60628a35ebdcf4743210da53ed0a-us17&id=33d7e5750f&email[email]=conrad7@gmail.com&merge_vars[MMERGE3]=65555555&merge_vars[FNAME]=John&merge_vars[LNAME]=Doe&double_optin=false&send_welcome=false
  submit(e) {
    // const data = {
    //   "email_address":"laptop@gmail.com",
    //   "email_type":"text",
    //   "status":"subscribed",
    //   "merge_fields":{},
    //   "interests":{},
    //   "language":"",
    //   "vip":false,
    //   "location":
    //   {
    //     "latitude":0,
    //     "longitude":0
    //   },
    //   "marketing_permissions":[],
    //   "ip_signup":"",
    //   "timestamp_signup":"",
    //   "ip_opt":"",
    //   "timestamp_opt":"",
    //   "tags":[]
    // }
    // console.log(JSON.stringify(data))
    // let lheaders = new HttpHeaders();
    // lheaders.set('Authorization', 'auth a0ca60628a35ebdcf4743210da53ed0a-us17')
    // let options = {
    //   headers: lheaders
    // }
    // // https://us17.api.mailchimp.com/3.0/lists/33d7e5750f/members?skip_merge_validation=true
    // this.http.post('https://us17.api.mailchimp.com/3.0/lists/33d7e5750f/members', JSON.stringify(data), options).subscribe(res => {
    //   console.log(res);
    // })
    e.preventDefault();
  // 
    this.http.get(`https://us17.api.mailchimp.com/2.0/lists/subscribe.json?apikey=a0ca60628a35ebdcf4743210da53ed0a-us17&id=33d7e5750f&email[email]=conrad9@gmail.com&merge_vars[MMERGE3]=65555555&merge_vars[FNAME]=John&merge_vars[LNAME]=Doe&double_optin=false&send_welcome=false`).subscribe(res => {
      console.log(res)
      if(res['email']){
        console.log(true)
      }
    })
  }

}
