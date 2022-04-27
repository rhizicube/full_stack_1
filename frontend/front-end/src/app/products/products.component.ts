import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  filteredData: any;
  filterData: boolean = false;
  loading: boolean = true;
  isDataAvailable: boolean = false;
  error: boolean = false;
  noDataFound: boolean = false;
  products: any;

  constructor(private service: ProductServiceService) {}
  // products = [
  //   {
  //     name: 'Harry',
  //     type: 'Movie',
  //     releaseDate: '2001-08-09',
  //     imgUrl: 'https://i.ytimg.com/vi/dvtovlDe1NM/maxresdefault.jpg',
  //     descriptio: 'Hollywood',
  //   },
  //   {
  //     name: 'Rocky',
  //     type: 'Movie',
  //     releaseDate: '2001-08-09',
  //     imgUrl: 'https://i.ytimg.com/vi/dvtovlDe1NM/maxresdefault.jpg',
  //     descriptio: 'Hollywood',
  //   },
  //   {
  //     name: 'Rockstar',
  //     type: 'Movie',
  //     releaseDate: '2001-08-09',
  //     imgUrl: 'https://i.ytimg.com/vi/dvtovlDe1NM/maxresdefault.jpg',
  //     descriptio: 'Hollywood',
  //   },
  //   {
  //     name: 'Harraa',
  //     type: 'Movie',
  //     releaseDate: '2001-08-09',
  //     imgUrl: 'https://i.ytimg.com/vi/dvtovlDe1NM/maxresdefault.jpg',
  //     descriptio: 'Hollywood',
  //   },
  //   {
  //     name: 'Billy',
  //     type: 'Movie',
  //     releaseDate: '2001-08-09',
  //     imgUrl: 'https://i.ytimg.com/vi/dvtovlDe1NM/maxresdefault.jpg',
  //     descriptio: 'Hollywood',
  //   },
  //   {
  //     name: 'Billall',
  //     type: 'Movie',
  //     releaseDate: '2001-08-09',
  //     imgUrl: 'https://i.ytimg.com/vi/dvtovlDe1NM/maxresdefault.jpg',
  //     descriptio: 'Hollywood',
  //   },
  //   {
  //     name: 'None',
  //     type: 'Movie',
  //     releaseDate: '2001-08-09',
  //     imgUrl: 'https://i.ytimg.com/vi/dvtovlDe1NM/maxresdefault.jpg',
  //     descriptio: 'Hollywood',
  //   },
  //   {
  //     name: 'Orphan',
  //     type: 'Movie',
  //     releaseDate: '2001-08-09',
  //     imgUrl: 'https://i.ytimg.com/vi/dvtovlDe1NM/maxresdefault.jpg',
  //     descriptio: 'Hollywood',
  //   },
  //   {
  //     name: 'Orphanage',
  //     type: 'Movie',
  //     releaseDate: '2001-08-09',
  //     imgUrl: 'https://i.ytimg.com/vi/dvtovlDe1NM/maxresdefault.jpg',
  //     descriptio: 'Hollywood',
  //   },
  // ];

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    //this.loading = true;
    this.service.getProductList().subscribe((resp: any) => {
      console.log(resp.data, resp.data.status, resp.code);
      if (resp.data) {
        this.loading = false;
        this.noDataFound = false;
        var respVal;
        respVal = resp;
        console.log(respVal.data);
        this.products = respVal.data;
        console.log(this.products);
      } else {
        this.loading = false;
        this.error = true;
      }
      //return;
      if (respVal.length == 0) {
        this.noDataFound = true;
      }
    });
  }

  onSearch(searchData: any) {
    let found = false;
    this.filteredData = [];
    //console.log(searchData.target.value);
    if (searchData.target.value.length > 3) {
      //console.log(searchData.target.value);
      this.filterData = true;
      for (let val in this.products) {
        // console.log(this.products[val]);
        if (
          this.products[val].name
            .toLowerCase()
            .includes(searchData.target.value.toLowerCase())
        ) {
          found = true;
          this.filterData = true;
          //this.noDataFound = false;

          this.filteredData = [...this.filteredData, this.products[val]];

          for (let d of this.filteredData) {
          }
        }
      }
    }
    if (searchData.target.value === '' || searchData.target.value.length <= 3) {
      this.filterData = false;
      //this.noDataFound = false;
    }
  }

  onBackendSearch(searchData: any) {
    let data = searchData.target.value;
    if (data.length > 3) {
      this.filterData = true;
      this.service.getSearchedData(data).subscribe((resp: any) => {
        var respVal;
        respVal = resp;

        this.filteredData = respVal.data;

        return;
      });
    }
    if (searchData.target.value === '' || searchData.target.value.length <= 3) {
      this.filterData = false;
      //this.noDataFound = false;
    }
  }
}
