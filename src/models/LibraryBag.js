import LibraryBagItem from "./LibraryBagItem";

export default function LibraryBag(){
    let arr = [];

    arr.addItem = function(item){
        this.push(
            new LibraryBagItem(
                item,
<<<<<<< HEAD
                ((collection) => function(){
                    collection.removeItem(this)
                })(this)));
=======

                ((collection) => function(){
                    collection.removeItem(this)
                })(this),

                ((collection) => function(){
                    collection.addItem(this)
                })(this),
            )
        );
>>>>>>> 7167610770c84b041b6f64728b19ac3f754ca4be

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

<<<<<<< HEAD
}
=======
export default LibraryBagCollection;


>>>>>>> 7167610770c84b041b6f64728b19ac3f754ca4be
