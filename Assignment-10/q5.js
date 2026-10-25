const tickets = {
    "T101": { id: "T101", customer: "Sara Majid", status: "Open" },
    "T102": { id: "T102", customer: "Anne Hathaway", status: "In Progress" },
    "T103": { id: "T103", customer: "Miles Bonsignore", status: "Resolved" }
};

function fetchTicket(ticketId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const upperId = ticketId.trim().toUpperCase();
            if (tickets[upperId]) {
                resolve(tickets[upperId]);
            } else {
                reject("Error: Ticket ID '" + ticketId + "' does not exist in our system.");
            }
        }, 2000);
    });
}

document.getElementById("checkBtn").addEventListener("click", async () => {
    const inputVal = document.getElementById("ticketIdInput").value;
    const resultDiv = document.getElementById("statusResult");

    if (!inputVal) {
        resultDiv.style.color = "red";
        resultDiv.textContent = "Please enter a valid ticket ID.";
        return;
    }

    resultDiv.style.color = "blue";
    resultDiv.textContent = "Loading ticket status...";

    try {
        const ticket = await fetchTicket(inputVal);
        resultDiv.style.color = "green";
        resultDiv.textContent = "Ticket Found -> ID: " + ticket.id + " | Customer: " + ticket.customer + " | Status: " + ticket.status;
    } catch (error) {
        resultDiv.style.color = "red";
        resultDiv.textContent = error;
    }
});