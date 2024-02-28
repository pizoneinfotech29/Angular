import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from './book';
import { BookService } from './service3/book.service';
//import { FirstserviceService } from './service1/firstservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

 title = 'self_pra';
  softBooks: Book[] = [];

constructor(private bookservice :BookService){}

getsofBooks(){
  this.bookservice.getBookFromStore().subscribe(books => this.softBooks= books);
}


ngOnInit()
 {
  this.getsofBooks();

}





// constructor (private router: Router){}
// student(){
//   this.router.navigate(['/student']);
// }
}




  // mydate : string = "22-feb-2012";
 // _msg: string = "";
// mydate: any;
  // constructor(private _firstserviceService: FirstserviceService){
  //  this._msg = _firstserviceService.getmessage ()
  // }

  // getmessage (){
  //   this._msg = this._firstserviceService.getmessage();
  // }

