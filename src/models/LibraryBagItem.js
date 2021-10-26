<<<<<<< HEAD
export default function LibraryBagItem(libraryItem, removeMethod){
    this.libraryItem = libraryItem;

    this.checkout = () => this.libraryItem.checkOut();

    this.remove = removeMethod || function(){};
=======
export default function BagItem (libraryItem, removeMethod){
this.libraryItem = libraryItem;

this.checkOut = () => this.libraryItem.checkOut();

this.getTitle = () => this.libraryItem.title;




this.remove = removeMethod || function(){};

>>>>>>> 7167610770c84b041b6f64728b19ac3f754ca4be
}