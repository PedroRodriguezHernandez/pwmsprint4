import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AddUpdateProductComponent } from 'src/app/shared/components/add-update-product/add-update-product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firebaseService = inject(FirebaseService);
  utilsService = inject(UtilsService);
  

  ngOnInit() {
  }

  sigOut(){
    this.firebaseService.signOut();
  }

  addUpdateProduct(){
    this.utilsService.presentModal({
      component: AddUpdateProductComponent,
      cssClass: 'add-update-modal'
    })
  }
}