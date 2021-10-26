export default function BagItem (libraryItem, removeMethod){
this.libraryItem = libraryItem;

this.checkOut = () => this.libraryItem.checkOut();

this.getTitle = () => this.libraryItem.title;




this.remove = removeMethod || function(){};

}