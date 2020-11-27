import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/singup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignUpService } from './signup/signup.service';

@NgModule({
    declarations: [ HomeComponent, SigninComponent, SignUpComponent ],
    imports: [  CommonModule, 
                FormsModule,
                ReactiveFormsModule, 
                VMessageModule,
                RouterModule,
                HomeRoutingModule
            ],
    providers: [
        SignUpService
    ]
})
export class HomeModule {

}