// src/app/shop/page.tsx
import React from 'react';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { id: 1, name: 'حجابات', image: '/images/cat1.jpg' },
  { id: 2, name: 'أحذية', image: '/images/cat2.jpg' },
  { id: 3, name: 'نظارة شمسية', image: '/images/cat3.jpg' },
  { id: 4, name: 'ماكياج', image: '/images/cat4.jpg' },
];

const products = [
  {
    id: 1,
    name: 'حجاب فضفاض',
    image: '/images/product1.jpg',
    price: 3200,
    oldPrice: 4500,
    sale: 11,
    rate: 5,
  },
  {
    id: 2,
    name: 'Talon',
    image: '/images/product2.jpg',
    price: 5000,
    offers: '3 عروض', 
    sale: 20,
    rate: 5,
  },
  {
    id: 3,
    name: 'Ray-Ban',
    image: '/images/product3.jpg',
    price: 4000,
    oldPrice: 5500,
    rate: 4, // Added rate to avoid undefined
  },
  {
    id: 4,
    name: 'Rouge à Lèvres',
    image: '/images/product4.jpg',
    price: 2500,
    oldPrice: 3500,
    sale: 10,
    rate: 5,
  },
];

const ShopPage: React.FC = () => {
  return (
    <div dir="rtl" className="px-6 py-12 max-w-7xl mx-auto space-y-16">
      {/* Categories Section */}
      <section>
        <h1 className="text-4xl font-bold mb-2 text-right">التصنيفات</h1>
        <p className="text-lg text-gray-500 mb-8 text-right">
          اكتشف جميع تصنيفات منتجاتنا
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={300}
                height={256}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="flex flex-col gap-3">
                  <span className="font-semibold pr-1 text-lg text-white text-right">{category.name}</span>
                  
                  <button className="w-full flex items-center justify-center gap-2 bg-[#D63384] text-white px-4 py-3 rounded-lg hover:bg-[#C2185B] transition-colors font-medium">
                    اطلاع
                    <span>&larr;</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section>
        <h1 className="text-4xl font-bold mb-2 text-right">مرحبا بك❤️ </h1>
        <p className="text-lg text-gray-500 mb-8 text-right">
        اكتشف افضل المنتجات بافضل الاسعار 🔥</p>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
  {products.map((product) => (
   <Link
  key={product.id}
  href={`/product/${product.id}`}
  className="relative bg-white rounded-lg overflow-hidden flex flex-col h-full"
>
      <div className="w-full relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={280}
          className="w-full rounded-xl h-70 object-cover transition-transform duration-300 hover:scale-105"
        />
        {product.sale && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold w-12 h-12 flex items-center justify-center rounded-full">
            -{product.sale}%
          </div>
        )}
      </div>
    <div className="p-4 flex flex-col items-center gap-3 text-center flex-grow">
  <h3 className="font-semibold text-lg">{product.name}</h3>
  
  {/* Only render rating section if rate exists */}
  {product.rate && (
    <div className="flex items-center gap-1 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <FaStar 
          key={i} 
          className={i < Math.floor(product.rate!) ? 'fill-current' : 'text-gray-300'}
          size={16}
        />
      ))}
      <span className="text-gray-600 text-sm mr-1">({product.rate})</span>
    </div>
  )}
  
  <div className="flex items-center gap-2 flex-wrap justify-center">
    <span className="font-bold text-lg">{product.price} د.ج</span>
    {product.oldPrice && (
      <span className="text-gray-400 line-through decoration-red-500">
  {product.oldPrice} د.ج
</span>
    )}
    {product.offers && (
      <span className="text-gray-600 font-medium bg-gray-50 px-3 py-1 rounded-full text-sm border border-gray-200">
        + {product.offers}
      </span>
    )}
  </div>
  
  <button className="w-full border-2 border-[#D63384] text-[#D63384] bg-transparent px-4 py-2 rounded hover:bg-[#D63384] hover:text-white transition mt-auto">
    اطلب
  </button>
</div>
    </Link>
  ))}
</div>
      </section>
    </div>
  );
};

export default ShopPage;