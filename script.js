const fs = require('fs');

// Read the JSON file
const data = fs.readFileSync('generated.json');

// Parse the JSON data
const customers = JSON.parse(data);

// Iterate over each customer object
customers.forEach(customer => {
  // Convert zip to string
  customer.Zip = customer.Zip.toString();

  // Prefix the taxId with the country code
  customer.TaxId = customer.Country + customer.TaxId;

  // Update the country name based on the country code
  switch (customer.Country) {
    case 'DE':
      customer.Country = 'Germany';
      break;
    case 'GR':
      customer.Country = 'Greece';
      break;
    case 'UK':
      customer.Country = 'United Kingdom';
      break;
    case 'FR':
      customer.Country = 'France';
      break;
    case 'ES':
      customer.Country = 'Spain';
      break;
    default:
      break;
  }
});

// Write the updated data back to the file
fs.writeFileSync('output.json', JSON.stringify(customers, null, 2));