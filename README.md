# Assignment 1: Ticket Resale Module
This Node.js module allows its users to browse, buy and search event tickets, and allows the user to manage their balance by checking, adding, and removing amounts.

## Setting Up
1. If you don't already have Node.js, you can install it from https://nodejs.org/
2. Save JiaRui_TicketResale.js to your project directory 
3. Create a new file named app.js
4. In app.js, import the module using <code>const tickets = require('./JiaRui_TicketResale.js');</code>
5. To run the module, run <code>node app.js</code> in the terminal

## Usage

The following code is a sample for how the functions can be used:
```javascript
// required to run the module
const tickets = require('./JiaRui_TicketResale.js');

// returns all available tickets and purchases the ticket based on the index displayed from showAllAvailableTickets
console.log(tickets.showAllAvailableTickets());
console.log(tickets.buyTicketByIndex(2));
console.log("========================================");

// adds 100 to the balance
console.log(tickets.addBalance(100));
console.log("========================================");

// subtracts 200 from the balance
console.log(tickets.subtractBalance(200));
console.log("========================================");

// checks the current balance
console.log(tickets.checkBalance());
console.log("========================================");

// searches for any tickets that matches "conan"
console.log(tickets.searchTickets("conan"));
console.log("========================================");

// returns a list of all tickets purchased
console.log(tickets.showPurchasedTickets());
console.log("========================================");
```

## Functions

- showCurrentEvents()<br />
returns a list of all the current events from <code>currentEvents</code>
- showAllAvailableTickets()<br />
returns a list of all tickets available for purchasing from <code>eventTickets</code>
- searchTickets(search)<br />
performs a case-insensitive search of <code>eventTickets</code> based on <code>search</code> and returns a list of tickets (if any)
- buyTicketByIndex(index)<br />
allows the user to buy tickets by its index from <code>eventTickets</code>
- checkBalance()<br />
returns the user's <code>balance</code><br />
- addBalance(amount)<br />
adds to the user's <code>balance</code> based on the <code>amount</code><br />
- subtractBalance(amount)<br />
subtracts from the user's <code>balance</code> based on the <code>amount</code><br />
- showPurchasedTickets()<br />
returns a list of tickets from <code>purchasedTickets</code>

## Notes
- initial balance can be changed directly in <code>balance</code>
- events can be changed directly in <code>currentEvents</code>
- available tickets can be changed directly in <code>eventTickets</code>