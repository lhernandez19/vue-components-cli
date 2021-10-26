export default function LibraryBagItem(libraryItem, removeMethod){
    this.libraryItem = libraryItem;

    this.checkout = () => this.libraryItem.checkOut();

    this.remove = removeMethod || function(){};
}