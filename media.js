class Media {
    constructor(title) {
      this._title = title;
      this._ratings = [];
      this._isCheckedOut = false;
    }
    get title(){
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this.ratings;
    }
    set isCheckedOut(newVal) {
      this._isCheckedOut = newVal;
    }
    toggleCheckOutStatus () {
      this._isCheckOut = !this._isCheckOut;
    }
    getAverageRating() {
      let sumRatings = this._ratings.reduce((curr, rate) => curr + rate, 0);
      return sumRatings/this._ratings.length;
  
    }
    addRating(newRating) {
      this._ratings.push(newRating);
    }
  
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._pages = pages;
      this._author = author;
    }
  
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor (director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
  
  // main code below:
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  
  
  
  