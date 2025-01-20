// Validate form input and navigate to the next page
function navigateToNextPage(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const fixedValues = {
        box1: "Dhaka",
        box2: "Shariatpur",
        box3: "Bhedorgonj",
        box4: "Shakhipur"
    };

    for (let key in fixedValues) {
        const input = document.getElementById(key);
        if (input.value !== fixedValues[key]) {
            alert(`Please enter the correct text for ${input.placeholder}`);
            return false;
        }
    }

    // Navigate to the second page
    window.location.href = "page2.html";
    return true;
}
