// Function to replace "Loading..." with the actual data values
function updateOrderData(orderNumber) {
    const root = document.querySelector(`[data-key="order${orderNumber}"]`);
    const biscuits = root.getAttribute("data-biscuits");
    const donuts = root.getAttribute("data-donuts");
    const pancakes = root.getAttribute("data-pancakes");
    const status = root.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending";
  
    const biscuitsElement = root.querySelector(".biscuits .count");
    const donutsElement = root.querySelector(".donuts .count");
    const pancakesElement = root.querySelector(".pancakes .count");
    const statusElement = root.querySelector(".status dd");
  
    biscuitsElement.textContent = biscuits;
    donutsElement.textContent = donuts;
    pancakesElement.textContent = pancakes;
    statusElement.textContent = status;
  }
  
  // Call the function for each order
  updateOrderData(1);
  updateOrderData(2);
  updateOrderData(3);