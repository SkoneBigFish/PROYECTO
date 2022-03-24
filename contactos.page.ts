import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

usuario = {
  email: "",
  comentario: ""
};




  constructor() { }

  ngOnInit() {
  }
  onSubmitTemplate() {
    console.log("Form submit");
    console.log(this.usuario);




  }


}
