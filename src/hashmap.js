// PREVIEW AND TEST CODE AT: https://codepen.io/ArielBarkan/pen/qBEqjbY?editors=0012&fbclid=IwAR3X-YaTtG-6MNKcZ89hhG5jhxtXEGEOwNXu37bX8HbZpBDQrE_IsFUh1Ow
// HASH TABLE
const hash = (key, size) =>{
    var hashedKey   = 0;

    for(let i = 0; i < key.length; i++){
        hashedKey   += key.charCodeAt(i);
    }
    let hashResult  = hashedKey % size;
    return  hashResult;
};

class HashTable{
    constructor(){
        this.size       = 20;
        this.buckets    = Array(this.size);

        for(let i = 0; i < this.buckets.length; i++){
            this.buckets[i] = new Map();
        }
    }

    //  METHODS:

    //  - INSERT
    insert(key, value){
        let idx = hash(key, this.size);
        this.buckets[idx].set(key, value);
    };

    //  - REMOVE
    remove(key){
        let idx     = hash(key, this.size);
        let deleted = this.buckets[idx].get(key);
        this.buckets[idx].delete(key);
        return deleted;
        
    };

    //  - SEARCH
    search(key){
        let idx     = hash(key, this.size);
        let result  = this.buckets[idx].get(key);
        return result || {error:'not found', path:key};
    };
}

const hashTable = new HashTable();

hashTable.insert(
    'home',{
    folders : ['music'],
    files   : ['readme.md']
});

hashTable.insert(
    'home/music',{
    folders : ['rock', 'pop'],
    files   : ['coolmusic.mp3','ringtone.wav']
});

hashTable.insert(
    'home/music/rock',{
    folders : ['progressive'],
    files   : [],
});

hashTable.insert(
    'home/music/rock/progressive',{
    folders : [],
    files   : ['prog1.mp3','prog2.mp3']
});

hashTable.insert(
    'home/music/pop',{
    folders : ['uk','us'],
    files   : ['pop_notes.pdf']
});

hashTable.insert(
    'home/music/pop/uk',{
    folders : [],
    files   : ['uk_song1.mp3','uk_song2.mp3']
});

hashTable.insert(
    'home/music/pop/us',{
    folders : [],
    files   : ['us_song1.mp3','us_song2.mp3','us_song3.mp3']
});
console.clear();
console.log("------------------------");
console.log("1 - displaying hashTable");
console.log("------------------------");
console.log(hashTable);


console.log("------------------------------------------------------");
console.log("2 - search in  hashTable the dir : 'home'");
console.log(hashTable.search('home'));


console.log("------------------------------------------------------");
console.log("3 - search in  hashTable the dir : 'home/music'");
console.log(hashTable.search('home/music'));

console.log("------------------------------------------------------");
console.log("4 - search in  hashTable the dir : 'home/music/pop'");
console.log(hashTable.search('home/music/pop'));


console.log("------------------------------------------------------");
console.log("5 - search in  hashTable the dir : 'home/music/pop/uk'");
console.log(hashTable.search('home/music/pop/uk'));


console.log("------------------------------------------------------");
console.log("6 - search in  hashTable the dir : 'home/music/pop/us'");
console.log(hashTable.search('home/music/pop/us'));


console.log("------------------------------------------------------");
console.log("7 - search in  hashTable a non existing dir : 'home/videos'");
console.log(hashTable.search('home/videos'));
