// Event listener for order button click
document.getElementById("orderBtn").addEventListener("click", function(event) {
  event.preventDefault();

  // Retrieve selected flavor
  const flavor = document.getElementById("flavor").value;
  // Retrieve selected size
  const size = document.getElementById("size").value;
  // Retrieve selected extras
  const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(input => input.value);

  // Create Smoothie object
  const smoothie = new Smoothie(flavor, size, extras);
  // Display smoothie details
  const output = document.getElementById("smoothieOutput");
  output.style.display = "block";
  output.innerText = smoothie.getDescription();
});

// Smoothie class constructor
class Smoothie {
  constructor(flavor, size, extras) {
      this.flavor = flavor;
      this.size = size;
      this.extras = extras;
  }

  // Method to generate smoothie description
  getDescription() {
      let description = `You ordered a ${this.size} ${this.flavor} smoothie`;
      if (this.extras.length > 0) {
          description += ` with ${this.extras.join(", ")}`;
      }
      return description;
  }
}
