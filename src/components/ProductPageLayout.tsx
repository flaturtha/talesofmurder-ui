import React from 'react';
import Hero from './Hero';
import ProductDescription from './ProductDescription';
import Reviews from './Reviews';
import RelatedBooks from './RelatedBooks';
import ProductDetails from './ProductDetails';
import Shoutout from './Shoutout';
// import FullText from './FullText';  // Comment this out

// Add proper type definitions for the product data
interface ProductData {
  title?: string;
  author?: string;
  description?: string;
  reviews?: any[];
  relatedBooks?: any[];
  shoutout?: any;
  // Add other fields as needed
}

const ProductPageLayout: React.FC<{ product: ProductData }> = ({ product }) => {
  console.log("Product data passed to layout:", product);

  return (
    <div className="flex flex-col min-h-[100vh]">
      <main className="flex-1">
        {/* Pass props directly instead of bundling them in 'data' */}
        <Hero 
          title={product.title} 
          author={product.author} 
        />
        <div className="w-screen bg-gray-100">
          <div className="container mx-auto px-4 lg:px-8 xl:px-16 py-8 lg:flex lg:gap-8">
            <div className="w-full lg:w-1/2">
              <ProductDescription 
                description={product.description}
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-start">
              <div>
                <ProductDetails 
                  {...product} // Pass all product props 
                />
              </div>
              <div>
                {product.shoutout && (
                  <Shoutout text={product.shoutout} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          {product.reviews && (
            <Reviews items={product.reviews} />
          )}
        </div>
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          {product.relatedBooks && (
            <RelatedBooks items={product.relatedBooks} />
          )}
        </div>
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          {/* Comment out this section or create a FullText component
          <FullText
            title={product.title}
            author={product.author}
            content={product.content}
            copyright={product.copyright}
            ebook={product.ebook}
            o_publishedAt={product.o_publishedAt} 
            o_publishedBy={product.o_publishedBy}
            o_volnum={product.o_volnum}
            tagline={product.tagline}
          />
          */}
        </div>
      </main>
    </div>
  );
};

export default ProductPageLayout;
