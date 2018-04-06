import { CategoriesService } from './categories.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: ShoppingcartComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    ShoppingcartComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
