import LibraryBagItem from "./LibraryBagItem";

export default function LibraryBagModel(){
    let arr = [];

    arr.addItem = function(item){
        this.push(
            new LibraryBagItem(
                item,
                ((collection) => function(){
                    collection.removeItem(this)
                })(this)));

        // allows for chaining
        // return this;
    }

    arr.removeItem = function(item){
        this.splice(this.indexOf(item), 1);

        // allows for chaining
        return this;
    }

    arr.checkout = function(){
        this.forEach((libraryBagItem) => {
            libraryBagItem.checkout();
        });

        this.splice(0);
    }

    return arr;

}
