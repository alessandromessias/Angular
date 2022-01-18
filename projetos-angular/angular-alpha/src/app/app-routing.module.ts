import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// vamos importar os componentes aqui
import { HomeComponent } from './componentes/home/home.component';
import {InterpolationComponent} from './componentes/interpolation/interpolation.component';
import { PropertyBindingComponent } from './componentes/property-binding/property-binding.component';
import { EventBindingComponent } from './componentes/event-binding/event-binding.component';
import { TwoWayComponent } from './componentes/two-way/two-way.component';
import { InputComponent } from './componentes/input/input.component';
import { PrimarioComponent } from './componentes/primario/primario.component';
import { OutputComponent } from './componentes/output/output.component';
import { NgIfComponent } from './componentes/ng-if/ng-if.component';
import { NgForComponent } from './componentes/ng-for/ng-for.component';
import { NgClassComponent } from './componentes/ng-class/ng-class.component';
import { NgStyleComponent } from './componentes/ng-style/ng-style.component';
import { NgCustomDirComponent } from './componentes/ng-custom-dir/ng-custom-dir.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'interpolation', component:InterpolationComponent},
  {path:'propbinding', component:PropertyBindingComponent},
  {path:'evento', component:EventBindingComponent},
  {path:'two-way', component:TwoWayComponent},
  {path:'primario', component:PrimarioComponent},
  {path:'ng-if', component:NgIfComponent},
  {path:'ng-for', component:NgForComponent},
  {path:'ng-class', component:NgClassComponent},
  {path:'ng-style', component:NgStyleComponent},
  {path:'custom-dir', component:NgCustomDirComponent},
  {path:'formulario', component:FormularioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
    
  })
export class AppRoutingModule { }

export const CentralDeComps = [
    HomeComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayComponent,
    InputComponent,
    PrimarioComponent,
    OutputComponent,
    NgIfComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    NgCustomDirComponent,
    FormularioComponent
]