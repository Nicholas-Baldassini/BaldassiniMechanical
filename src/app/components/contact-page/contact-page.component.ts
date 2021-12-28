import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})

export class ContactPageComponent implements OnInit {
  sendEmail() {
    const email = <HTMLInputElement>document.getElementById('emailInput');
    const phoneNumber = <HTMLInputElement>(
      document.getElementById('phonenumber')
    );
    const name = <HTMLInputElement>document.getElementById('name');
    const information = <HTMLInputElement>(
      document.getElementById('informationArea')
    );

    const localBackend: string = 'http://localhost:3000/sendMail';
    const liveBackend: string = "https://baldassini-mechanical-backend.herokuapp.com/sendMail";

    // CHANGE TO 1 WHEN LIVE
    const URL: string = [localBackend, liveBackend][1];

    const data = {
      email: email.value,
      name: name.value,
      number: phoneNumber.value,
      text: information.value,
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch(URL, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('Fetch Error:', error);
      });
  }
  constructor() {}

  ngOnInit(): void {}
}
