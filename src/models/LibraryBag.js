import {LibraryItem} from "@/models/LibraryItems";
//import {LibraryItem} from "./LibraryItems";

// export default function LibraryCollection(){
function LibraryBagCollection(){
    let arr = [];

    arr.addItem = function(item){
        this.push(
            new LibraryItem(
                item,
                // option 1
                // "this" refers to the array
                // "item" is an argument that will be passed in by the libraryItem
                // (item) => this.removeItem(item)
                // option 2
                ((collection) => function(){
                    // the library item will call this function
                    collection.removeItem(this) // "this" is the LibraryItem
                })(this),  // "this" is the array/collection
                // option 2.1
                // (function(collection){
                //     return function() {
                //         // the library item will call this function
                //         collection.removeItem(this) // "this" is the LibraryItem
                //     }
                // })(this) // "this" is the array/collection
                ((collection) => function(){
                    // the library item will call this function
                    collection.addItem(this) // "this" is the LibraryItem
                })(this),
            )
        );

        // allows for chaining
        return this;
    }

    arr.checkedOutItems = function(){
        return this.filter(function(item){
            return !item.isAvailable();
        })
    }

    arr.removeItem = function(item){
        this.splice(this.indexOf(item), 1);

        // allows for chaining
        return this;
    }


    return arr;
}

export default LibraryBagCollection;