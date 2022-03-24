import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'imagenes',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },

  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule) },
    {
    path: 'imagenes',
    loadChildren: () => import('./imagenes/imagenes.module').then( m => m.ImagenesPageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'descripcion',
    loadChildren: () => import('./descripcion/descripcion.module').then( m => m.DescripcionPageModule)
  },
  {
    path: 'tbltrabajo',
    loadChildren: () => import('./tbltrabajo/tbltrabajo.module').then( m => m.TbltrabajoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
