let balance = 1000; // Initial balance

// Array of current events
let currentEvents = [
    "aespa LIVE TOUR - SYNK : PARALLEL LINE",
    "BABYMONSTER PRESENTS : SEE YOU THERE",
    "Olivia Rodrigo - GUTS world tour",
    "CONAN GRAY - Found Heaven On Tour"
];

// Array of available event tickets
let eventTickets = [
    { eventName: "Olivia Rodrigo - GUTS world tour", price: 400, category: "VIP" },
    { eventName: "Olivia Rodrigo - GUTS world tour", price: 400, category: "VIP" },
    { eventName: "Olivia Rodrigo - GUTS world tour", price: 250, category: "CAT 5" },
    { eventName: "Olivia Rodrigo - GUTS world tour", price: 200, category: "CAT 6" },
    { eventName: "CONAN GRAY - Found Heaven On Tour", price: 500, category: "VIP" }
];

// Array of purchased tickets
let purchasedTickets = [];

module.exports = {
    // Displays all current events
    showCurrentEvents() {
        return currentEvents;
    },

    // Shows all available tickets with event name, price, and category
    showAllAvailableTickets() {
        if (eventTickets.length > 0) {
            return `List of available tickets:\n` + eventTickets.map((ticket, index) => `Index: ${index}, Event: ${ticket.eventName}, Price: $${ticket.price}, Category: ${ticket.category}`).join('\n');
        } else {
            return 'No tickets available.';
        }
    },

    // Case-insensitive function to search for tickets
    searchTickets(search) {
        const lowerCaseSearch = search.toLowerCase();
        const foundTickets = eventTickets.filter(ticket => ticket.eventName.toLowerCase().includes(lowerCaseSearch));

        if (foundTickets.length > 0) {
            return `Your search for "${search}" returned:\n` + foundTickets.map(ticket => `Event: ${ticket.eventName}, Price: $${ticket.price}, Category: ${ticket.category}`).join('\n');
        } else {
            return `No tickets found matching "${search}".`;
        }
    },

    // Buy a ticket by its index based on eventTickets 
    buyTicketByIndex(index) {
        if (index >= 0 && index < eventTickets.length) { 
            const ticket = eventTickets[index];
            if (balance >= ticket.price) { // Check if balance is sufficient
                balance -= ticket.price; // Deduct ticket price from balance
                eventTickets.splice(index, 1); // Remove ticket from available tickets
                purchasedTickets.push(ticket); // Add ticket to purchased tickets
                return `You have successfully bought a ticket to ${ticket.eventName} for $${ticket.price} in ${ticket.category}.\nRemaining balance: $${balance}`;
            } else {
                return 'Insufficient balance to buy this ticket.';
            }
        } else {
            return 'Invalid index. Please select a valid ticket index.';
        }
    },

    // Checks the current balance
    checkBalance() {
        return `Current balance: $${balance}`;
    },

    // Adds amount to current balance
    addBalance(amount) {
        if (amount > 0) { 
            balance += amount;
            return `Successfully added $${amount} to your balance.\nNew balance: $${balance}`;
        } else {
            return 'Amount to be added should be greater than zero.';
        }
    },

    // Show purchased tickets
    showPurchasedTickets() {
        if (purchasedTickets.length > 0) {
            return `Purchased Tickets:\n` + purchasedTickets.map(ticket => `Event: ${ticket.eventName}, Price: $${ticket.price}, Category: ${ticket.category}`).join('\n');
        } else {
            return 'No tickets have been purchased.';
        }
    }
};