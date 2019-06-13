//////////////////////
//what is data Structure?
// is how we store data and retrieve them.
//////////////////////
//what is algorithms?
// it is how we use the data make the program run them effectively.
//////////////////////
//How is data structure us?
// data structure handle four main function for us
//Inputting,Processing,Maintaining,Retrieving
//Inputting: 
//////////////////////
//type of data structure?
//Stack,queue, circular queue, linked list, 
//Stack: is like a stack of card. New card on top. And remove top card only. pop and push. check if full/empty
// and what's the peak.

//queue: is like a line. First one line up get to go first. front and rear

//Circular queue: it's like a line. And if there is space/a element been dequeue.  
//i.e [0,1,2,3,4] max array is 5 or 6 number. i.e like this [0,1,2,3,4,5].
//we have an head and tail. Head start at 0 and tail start when we add number to the array. i.e
//[0(head),1(tail)]... [0(head),1,2,3,4,5(tail)]
//Tail = Tail +1. But if Tail +1 become 6, we want tail to be at 0.
//We could do a if statement. There is a faster way.
//We do division remainder. Tail = (Tail + 1)% 7
//We could check if it's full, if full we remove the head, which is at 0. so array become [1,2,3,4,5]
//Then we could 

//linked list
//Like a treasure hunt. You start at somewhere(head) address. Then you move to the next Node.
//Node have A data item and An address of another node. state -node - node - node - null
//Null is use to end the linked