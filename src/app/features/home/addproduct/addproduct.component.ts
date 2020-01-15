import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { NgForm } from '@angular/forms';
import { GenericService } from 'src/app/core/services/generic.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {


  @ViewChild('myForm', {static: false}) myForm: NgForm;

  listProduct: Product[] = [];
  fileToUpload: File = null;
  imageUrl: string = "../../../assets/images/noimage.png";

  constructor(private genericService: GenericService) { }

  ngOnInit() {
  }

    // this method allow and display selected file
    handleFileInput(file: FileList) {
      this.fileToUpload = file.item(0);
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(this.fileToUpload);
    }
  
    //this method allow to get all the product
    getListProduct() {
      this.genericService.getGenericList('/product/all').subscribe(
        data => {
          this.listProduct = data;
        }
      )
    }
  
    // this method allow to create product
    addProduct(image,name,price,description,provider,addProductForm: NgForm) {
      console.log("test latif");
      this.genericService.createGeneric('/product', name.value, price.value, description.value, provider.value , this.fileToUpload).subscribe(data => {
        addProductForm.reset();
      });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your product has been created',
        showConfirmButton: false,
        timer: 1500
      })
    }
  

}
