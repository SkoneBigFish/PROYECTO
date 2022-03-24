import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Contacto', url: '/contactos', icon: 'people-circle' },
    { title: 'Descripcion', url: '/descripcion', icon: 'receipt' },
    { title: 'Tabla de Trabajo', url: '/tbltrabajo', icon: 'clipboard' },
    
  ];

}
