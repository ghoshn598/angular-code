import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-code',
  templateUrl: './test-code.component.html',
  styleUrls: ['./test-code.component.css']
})
export class TestCodeComponent implements OnInit {
  //Q1 - used when
  //let is used to declare variables whose scope is only inside a block it is declared
  let_example(){
    var words = ["AA","BB", "AA"];
    let unique = [new Set(words)];
  }
  //used when
  //'This' is used to point to an object that is calling a particular method.
  // So its scope depends on the context in which it is used
  this_example(string){
      return string.split(' ').map(function(word) { 
          return word.split('').reverse().join(''); 
      }).join(' ');
      console.log(this.this_example(''));
  }
  //Q2
    display_count_str(str){
      let counter = str => {
        return str.split('').reduce((total, letter) => {
          total[letter] ? total[letter]++ : total[letter] = 1;
          return total;
        }, {});
      };
     console.log(counter);
  }
  //Q3
  display_keys(){
    var object = { 0: 'x', 1: 'y', 2: 'z' };
        console.log(Object.keys(object));
  }
  //Q4
   ReverseStr(string){
      return string.split(' ').map(function(word) { 
          return word.split('').reverse().join(''); 
      }).join(' ');
      console.log(this.ReverseStr(''));
  }
  //Q5
  display_duplicate_words(){
    const names = ['Tony', 'Tony', 'Peter', 'Peter', 'Malinda',' Malinda', 'Johny'];

    let unique = [new Set(names)];
    console.log(unique); 
  }
  constructor() { }

  ngOnInit() {
  }

}