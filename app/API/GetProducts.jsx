// GetTaxons.js
import axios from "axios";

const API_URL = "http://sylius.latelier22.fr/api/v2/shop/products?page=1&itemsPerPage=30";

async function GetProducts() {
  try {
    const response = await axios.get(API_URL);
    return response.data['hydra:member'];
  } catch (error) {
    console.error("Error fetching taxons:", error);
    throw error;
  }
}

export default GetProducts;
