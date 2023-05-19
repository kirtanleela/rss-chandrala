import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrabandhakListComponent } from './prabandhak-list/prabandhak-list.component';

const routes: Routes = [
    {
        path: '',
        component: PrabandhakListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrabandhakRoutingModule { }
