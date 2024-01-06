// MyPage.js
import { Suspense } from 'react';
import GetTaxons from '../API/GetTaxons';
import GetProducts from '../API/GetProducts';

const API_URL_BASE = "http://sylius.latelier22.fr";

async function Taxons ()  {
 

        const taxons = await GetTaxons();
        const products = await GetProducts();

        console.log(taxons[0],products[0])
  
  return (
    <Suspense>
      <div>
        CATEGORIES:
        {taxons.map((taxon) => (
          <div key={taxon["@id"]}>
            {/* Render taxon data appropriately */}
            
            {/* Render taxon data as a link */}
            <a href={`categorie/${taxon.slug}`} key={taxon.code}>
              {taxon.name}
            </a>
            
          </div>
        ))}
      </div>
      <div>
        PRODUITS:
        {products.map((product) => (
          <div key={product["@id"]}>
            {/* Render taxon data appropriately */}
            {product.name}
            <img src={`${API_URL_BASE}/media/cache/sylius_shop_product_thumbnail/39/f2/da6ca6f9831185cf9e246b110d85.png`} /> 
          </div>
        ))}
        <img src={`${API_URL_BASE}/media/cache/sylius_shop_product_large_thumbnail/39/f2/da6ca6f9831185cf9e246b110d85.png`} />
      </div>
    </Suspense>
  );
};

export default Taxons;
