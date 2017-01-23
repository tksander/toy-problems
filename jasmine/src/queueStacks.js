/**
 * @see https://www.interviewcake.com/question/python/queue-two-stacks
 *
 * Implement a queue ↴ with 2 stacks ↴ .
 *
 * Your queue should have an enqueue and a dequeue function and it should be
 * "first in first out" (FIFO).
 * Optimize for the time cost of mm function calls on your queue.
 * These can be any mix of enqueue and dequeue calls.
 *
 * Assume you already have a stack implementation and it gives O(1)O(1) time push and pop.
 */

/**
 * stackQueue constructor function
 * @method stackQueue
 */
var stackQueue = function() {
  this.inbox = [];
  this.outbox = [];
};

/**
 * Enqueues item
 * @method enqueue
 * @returns {undefined}
 */
stackQueue.prototype.enqueue = function(val) {
  this.inbox.push(val);
};

/**
 * Dequeues item
 * @method dequeue
 * @returns {any}
 */
stackQueue.prototype.dequeue = function() {
  // if outbox is empty, move all elements from inbox
  if (this.outbox.length === 0) {
     while (this.inbox.length !== 0) {
        this.outbox.push(this.inbox.pop());
     }
  }
  return this.outbox.pop();
};
