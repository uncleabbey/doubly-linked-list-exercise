class Node {
    constructor(value) {
        this.val = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    pop() {
        if(this.head) {
            let removed = this.tail;
            this.tail = this.tail.prev;
            this.length--;
            return removed.val;
        }
       return undefined;
    }
    shift() {
        if(this.head) {
            let remove = this.head;
            this.head = this.head.next;
            this.length--;
            return remove.val;
        }
        return undefined;
    }
    push (value) {
        this.length++;
     let node = new Node(value);
     if(this.head) {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
     } else {
        this.head = node;
        this.tail = node;
     }
     return this;
    }
  
     insert(node,value) {
        let presentHead = this.head;
        let index = 0;
        while(presentHead !== null) {
            if(index === node) {
                this.length++;
                let newNode = new Node(value);
                let prevNode = presentHead.prev;
                prevNode.next = newNode;
                newNode.prev = prevNode;
                newNode.next = presentHead;
                presentHead.prev = newNode;
                return this.length;
            }
            index++;
            presentHead = presentHead.next;
        }
    }
    unshift(value) {
        this.length++;
        let node = new Node(value);
        if(this.head) {
            let presentHead = this.head;
            this.head.prev = node;
            this.head = node;
            node.next = presentHead;
        }else {
            this.head = node;
            this.tail = node;
        }
        return this;
    }
    set(node,value) {
        let presentTail = this.tail;
        let index = this.length-1;
        while(presentTail !== null) {
            if(index === node) {
                presentTail.val = value;
                return true;
            }
            index--;
            presentTail = presentTail.prev;
        }
        return undefined;
    }
    get(node) {
        let presentTail = this.tail;
        let index = this.length-1;
        while(presentTail !== null) {
            if(index === node) {
                return presentTail.val;
            }
            index--;
            presentTail = presentTail.prev;
        }
        return null;
    }
   
    
    reverse() {
        let presentNode = this.head;
        let prevNode = null;
        while(presentNode !== null) {
            prevNode = presentNode.prev;
            presentNode.prev = presentNode.next;
            presentNode.next = prevNode;
            presentNode = presentNode.prev;
        }
        if(prevNode !== null) {
            this.head = prevNode.prev;
        }
        return this;
    }
    remove(node) {
        let presentTail = this.tail;
        let index = this.length-1;
        while(presentTail !== null) {
            if(index === node) {
                this.length--;
                presentTail.prev.next = presentTail.next;
                presentTail.next.prev = presentTail.prev;
                return presentTail;
            }
            index--;
            presentTail = presentTail.prev;
        }
        return null;
    }
}