import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { GenericService } from 'src/app/core/services/generic.service';
import Swal from 'sweetalert2'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.css']
})
export class ProductlistingComponent implements OnInit {

  @ViewChild('myForm', {static: false}) myForm: NgForm;

  listProduct: Product[] = [];
  fileToUpload: File = null;
  imageUrl: string = "../../../assets/images/noimage.png";

  constructor(private genericService: GenericService) {  }

  ngOnInit() {
    this.getListProduct();
  }

  //this method allow to reload data after actions like delete, update ...
  reloadData() {
    this.getListProduct();
  }


  //this method allow to get all the product
  getListProduct() {
    this.genericService.getGenericList('/product/all').subscribe(
      data => {
        this.listProduct = data;
      }
    )
  }

  // this method allow to delete product by id 
  deleteProduct(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.genericService.deleteGeneric('/product', id).subscribe(data => {
          this.reloadData();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        })
      }
    })
  }

}