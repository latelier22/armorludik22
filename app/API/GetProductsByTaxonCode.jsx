// GetTaxons.js
import axios from "axios";

const API_URL_PRODUCTS = "http://test.pascal-chantrel.fr/api/v2/shop/products";

async function GetProductsBytaxonCode(taxonCode) {
  try {
    const API_URL = API_URL_PRODUCTS + "?productTaxons.taxon.code=" + taxonCode
    const response = await axios.get(API_URL);
    return response.data['hydra:member'];
  } catch (error) {
    console.error("Error fetching taxons:", error);
    throw error;
  }
}

export default GetProductsBytaxonCode;
