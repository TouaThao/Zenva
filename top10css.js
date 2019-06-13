//top ten css question.
//what is box model?
//it's a model that wrap element in HTML in a box.
//This include content,padding,boarder,margin
//////////////////////
//what is specificiy?
// i.e
//div background red
//div background blue
//it will pick the last one. so it will be blue.
//but if it's div.name vs div. the div.name will have the color
// div class=name 
// div
// but if it's ID. Then we will take the ID instead. i.e
//dive class=name vs div Id=myId
// another way around this is to force by using !important
//////////////////////
//how do you align a block element inside a element
//create two div.
//outter div and inner div.
//both div should have width, height.
//outter div should have a position of relative 
//inner div should have a postion of absolute. 50% top, 50% left. transform:translate (-50%,-50%) 
//////////////////////
//what the difference between static,relative,absolute and fixed position.
// if we don't put a position. it will be static
// relative position is when you adjust the box from it original position.Other 
// content will not be adjusted to fit into any gap left by the element.
// absolute position act like a fixed position. but relative to the nearest positioned parent.
// if no parent then, it will use the body.
// fixed position is like what the name imply.
// it's in a fixed position, so if a box have it. it will follow you even if you
// scroll up or down.
//////////////////////
//what's the difference between hidden and display:none
// hidden is like what the name imply. But it will still show in the DOM, but just not show it.
// i.e
//A - hidden. 
//B
//A is hidden and it will still take a space. while display:none it hide it and won't take a space.