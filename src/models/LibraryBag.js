import {LibraryItem} from "@/models/LibraryItems";
//import {LibraryItem} from "./LibraryItems";

// export default function LibraryCollection(){
function LibraryBagCollection(){
    let arr = [];

    arr.addItem = function(item){
        this.push(
            new LibraryItem(
                item,

                ((collection) => function(){
                    collection.removeItem(this)
                })(this),

                ((collection) => function(){
                    collection.addItem(this)
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


