function sum(a,b) {
    return a +b;
}
var addTwoNumbers = function(l1, l2) {
        if(l1.length === l2.length) {
            
        }
    console.log(l1, l2)
};
function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
 }
 let v1 = new ListNode(2, 4); 
 let v2 = new ListNode(4, 3);
 let v3 = new ListNode(3)
 let firstLL = [v1,v2,v3];
let secondLL = [new ListNode(5, 6), new ListNode(6, 4),new ListNode(4) ]


addTwoNumbers(firstLL,secondLL)
module.exports = sum;