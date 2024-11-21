// ALBUM : Write a function called make_album that build a object describe music_album. 
//The function should take in artist_name and album_tiltle it sholud return a object cotaining these two pieces of  Information.
//use the function to make three dictionary represent different albmum .print each value to show that object are storng the album information correctly.
//And an optional paramter to make album that allows to use to store the number of track an album.if the calling line include a value for the number of track 
//add that the value to the object make at least on new function call that niclude that the number of track album/.

function make_Album (artist:string, title:string, tracks?:number){

   const album : {artist:string, title:string, tracks?:number} =  {

    artist:artist,
    title:title,

   }

if (tracks !== undefined)
album.tracks = tracks;

return album;

}

const album1 = make_Album ('Artist 1','Album Title 1');
console.log(album1);

const album2 = make_Album ('Artist 2','Album Title 2');
console.log(album2);

const album3 = make_Album ('Artist 3','Album Title 3');
console.log(album3);