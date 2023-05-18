const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here

let n = 100;

let singleList = new LinkedList(),
    doubleList = new DoublyLinkedList();

let start,
    end;


// single LinkedList
// has a constant time complexity of visiting each method O(1)
// ==========================================================================
start = new Date();
for (let i = 0; i < n * 30; i++) {
    singleList.addToHead(i);
}
end = new Date();

console.log(`singleLinked.addToHead(${n * 30})times`, end - start + 'ms');

start = new Date();
for (let i = 0; i < n * 40; i++) {
    singleList.addToHead(i);
}
end = new Date();

console.log(`singleLinked.addToHead(${n * 40})times`, end - start + 'ms');

start = new Date();
for (let i = 0; i < n * 50; i++) {
    singleList.addToHead(i);
}
end = new Date();

console.log(`singleLinked.addToHead(${n * 50})times`, end - start + 'ms');

// ADD_TO_HEAD
// singleLinked.addToHead(3000)times 1ms
// singleLinked.addToHead(4000)times 2ms
// singleLinked.addToHead(5000)times 2ms

// single addToHead has a time complexty of O(1), constant
// space complexity of O(n) since
// adding to end 3000 times last 0ms, super fast;


console.log('\n--------------------------------\n');

//-------------------------------------
// single LinkedList addToTail
start = new Date();
for (let i = 0; i < n * 30; i++) {
    singleList.addToTail(i);
}
end = new Date();
console.log(`singleLinked.addToTail(${n * 30})times`, end - start + 'ms');
// -------------
start = new Date();
for (let i = 0; i < n * 40; i++) {
    singleList.addToTail(i);
}
end = new Date();
console.log(`singleLinked.addToTail(${n * 40})times`, end - start + 'ms');

// ----------------
start = new Date();
for (let i = 0; i < n * 50; i++) {
    singleList.addToTail(i);
}
end = new Date();
console.log(`singleLinked.addToTail(${n * 50})times`, end - start + 'ms \n');
// -------------
// ADD_TO_TAIL

// singleLinked.addToTail(3000)times 186ms
// singleLinked.addToTail(4000)times 298ms
// singleLinked.addToTail(5000)times 465ms

// time coplexity of addToTail is O(n), where n is the number of nodes in the list
 // sice we need to visit each node to the last node
// space complexity is O(n)
// ================================================================

//Optize add to with Double Linked List

// DoubleLinkedList
// has a constant time complexity of visiting each method O(1)
// a space complexity of O(n) for varibles
// ==========================================================================
// AFTER OPTIMIZATING WITH DOUBLE LINKED LIST

// ADD_TO_TAIL
// DoubleLinked.addToTail(3000)times 2ms
// DoubleLinked.addToHead(4000)times 8ms
// DoubleLinked.addToTail(5000)times 1ms

start = new Date();
for (let i = 0; i < n * 30; i++) {
    doubleList.addToHead(i);
}
end = new Date();

console.log(`DoubleLinked.addToHead(${n * 30})times`, end - start + 'ms');

start = new Date();
for (let i = 0; i < n * 40; i++) {
    doubleList.addToHead(i);
}
end = new Date();

console.log(`DoubleLinked.addToHead(${n * 40})times`, end - start + 'ms');

start = new Date();
for (let i = 0; i < n * 50; i++) {
    doubleList.addToHead(i);
}
end = new Date();

console.log(`DoubleLinked.addToHead(${n * 50})times`, end - start + 'ms');


console.log('\n--------------------------------\n');

console.log('After optimization addToTail');
start = new Date();
for (let i = 0; i < n * 30; i++) {
    doubleList.addToTail(i);
}
end = new Date();

console.log(`DoubleLinked.addToTail(${n * 30})times`, end - start + 'ms');

start = new Date();
for (let i = 0; i < n * 40; i++) {
    doubleList.addToTail(i);
}
end = new Date();

console.log(`DoubleLinked.addToHead(${n * 40})times`, end - start + 'ms');

start = new Date();
for (let i = 0; i < n * 50; i++) {
    doubleList.addToTail(i);
}
end = new Date();

console.log(`DoubleLinked.addToTail(${n * 50})times`, end - start + 'ms');
