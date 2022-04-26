import { Component, OnInit } from '@angular/core';

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

  constructor() {}
  products = [
    {
      name: 'Harry',
      type: 'Movie',
      releaseDate: '2001-08-09',
      imgUrl: 'https://i.ytimg.com/vi/dvtovlDe1NM/maxresdefault.jpg',
      descriptio: 'Hollywood',
    },
    {
      name: 'Rocky',
      type: 'Movie',
      releaseDate: '2001-08-09',
      imgUrl: 'https://i.ytimg.com/vi/dvtovlDe1NM/maxresdefault.jpg',
      descriptio: 'Hollywood',
    },
    {
      name: 'Rockstar',
      type: 'Movie',
      releaseDate: '2001-08-09',
      imgUrl: 'https://i.ytimg.com/vi/dvtovlDe1NM/maxresdefault.jpg',
      descriptio: 'Hollywood',
    },
    {
      name: 'Harraa',
      type: 'Movie',
      releaseDate: '2001-08-09',
      imgUrl: 'https://i.ytimg.com/vi/dvtovlDe1NM/maxresdefault.jpg',
      descriptio: 'Hollywood',
    },
    {
      name: 'Billy',
      type: 'Movie',
      releaseDate: '2001-08-09',
      imgUrl: 'https://i.ytimg.com/vi/dvtovlDe1NM/maxresdefault.jpg',
      descriptio: 'Hollywood',
    },
    {
      name: 'Billall',
      type: 'Movie',
      releaseDate: '2001-08-09',
      imgUrl: 'https://i.ytimg.com/vi/dvtovlDe1NM/maxresdefault.jpg',
      descriptio: 'Hollywood',
    },
    {
      name: 'None',
      type: 'Movie',
      releaseDate: '2001-08-09',
      imgUrl: 'https://i.ytimg.com/vi/dvtovlDe1NM/maxresdefault.jpg',
      descriptio: 'Hollywood',
    },
    {
      name: 'Orphan',
      type: 'Movie',
      releaseDate: '2001-08-09',
      imgUrl: 'https://i.ytimg.com/vi/dvtovlDe1NM/maxresdefault.jpg',
      descriptio: 'Hollywood',
    },
    {
      name: 'Orphanage',
      type: 'Movie',
      releaseDate: '2001-08-09',
      imgUrl: 'https://i.ytimg.com/vi/dvtovlDe1NM/maxresdefault.jpg',
      descriptio: 'Hollywood',
    },
  ];
  ngOnInit(): void {}

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
          console.log(val);
          found = true;
          this.filterData = true;
          //this.noDataFound = false;
          //this.filterData = true;
          //this.Data = filter[val];
          this.filteredData = [...this.filteredData, this.products[val]];
          console.log(this.filteredData);
          for (let d of this.filteredData) {
            console.log(d);
            // for(let k of d){
            //   console.log(k);
            // }
          }
        }
      }
    }
    if (searchData.target.value === '' || searchData.target.value.length <= 3) {
      this.filterData = false;
      //this.noDataFound = false;
    }
  }
}
