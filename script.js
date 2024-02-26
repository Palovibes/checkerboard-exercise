//create the div container 
const container = document.createElement("div");
//set the styles
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "800px";
container.style.height = "800px";
container.style.borderStyle = "solid";
container.style.borderWidth = "5px";
container.style.backgroundColor = "white";

//add the container to the body
document.body.appendChild(container);

//create tile and alternate color loop
for (let i = 1; i <= 8; i++) {
    //nested loop to create columns 
    console.log(`THIS IS I ${i}`);
    for (let j = 1; j <= 8; j++) {
        //j is odd and black
        console.log(`THIS IS J ${j}`);
        //create tile and add it to the container
        const tile = document.createElement('div');
        //style the tiles using css selector
        tile.style.height = "12.5%";
        tile.style.width = "12.5%";
        //conditional to check if i is even make it red, or else if j is odd make it black
        if (i % 2 === 0 + j % 2){
            console.log(`this is ${i} inside if`)
            tile.style.backgroundColor = "red";
        } else {
            tile.style.backgroundColor = "black";
            console.log(`this is ${j} inside if`);
        }
        //append tile to the container
        container.appendChild(tile);
    }
}
