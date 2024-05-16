# Assignment 1: Ticket Resale Module

## Setting Up

## Usage

<code>
//required to run the module
const tickets = require('./JiaRui_TicketResale.js');

// returns all available tickets and purchases the ticket based on the index displayed from showAllAvailableTickets
console.log(tickets.showAllAvailableTickets());
console.log(tickets.buyTicketByIndex(2));
console.log("========================================");

// adds 100 to the balance
console.log(tickets.addBalance(100));
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
</code>

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
- showPurchasedTickets()<br />
returns a list of tickets from <code>purchasedTickets</code>

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.
