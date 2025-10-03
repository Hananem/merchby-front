// src/app/shop/product/[id].tsx
"use client";
import React, { useState } from "react";
import { GoTag } from "react-icons/go";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";
import { useParams } from 'next/navigation';
const productData = {
  id: 1,
  name: "حجاب عباءة",
  title: "عباءة مصممة بعناية لتجمع بين الراحة والاحتشام 🌸، بخامة خفيفة وناعمة تمنحك شعورًا بالانسيابية 👗✨، مثالية للاستخدام اليومي أو المناسبات 🕊️ وتضفي لمسة فخامة وبساطة 💫.",
  price: 3500,
  oldPrice: 5500,
  sale: 11,
  colors: [
    { hex: "#96650f", name: "بني" },
    { hex: "#007BFF", name: "أزرق" },
  ],
  images: [
    "/images/product1.jpg",
    "/images/product1-2.jpg",
    "/images/product1-3.jpg",
    "/images/product1-4.jpg",
    "/images/product1-5.jpg",
  ],
};

const ProductPage: React.FC = () => {
   const params = useParams();
  const productId = params.id;
  const [selectedImage, setSelectedImage] = useState(productData.images[0]);
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? productData.images.length - 1 : prev - 1
    );
    setSelectedImage(productData.images[
      currentIndex === 0 ? productData.images.length - 1 : currentIndex - 1
    ]);
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === productData.images.length - 1 ? 0 : prev + 1
    );
    setSelectedImage(productData.images[
      currentIndex === productData.images.length - 1 ? 0 : currentIndex + 1
    ]);
  };

  const handleQuantity = (type: "inc" | "dec") => {
    if (type === "inc") setQuantity(quantity + 1);
    if (type === "dec" && quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 border border-2 border-gray-200 rounded-lg my-8">
         <div dir="rtl" className=" flex flex-col lg:flex-row gap-12">
      {/* Left Part: Images */}
      <div className="flex-1">
        <div className="relative rounded-lg overflow-hidden mb-4">
          <img
            src={selectedImage}
            alt={productData.name}
            className="w-full h-175 object-cover"
          />

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
          >
            <FaChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="flex gap-2">
          {productData.images.map((img, idx) => (
            <div
              key={idx}
              className={`w-22 h-22 border rounded-lg overflow-hidden cursor-pointer ${
                selectedImage === img ? "border-[#D63384]" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`صورة ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Right Part: Product Info */}
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{productData.name}</h1>
        <p className="text-gray-600">{productData.title}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-[#d1512a]">{productData.price} د.ج</span>
            <span className="text-gray-400 line-through decoration-red-500">
  {productData.oldPrice} د.ج
</span>

          </div>
          {productData.sale && (
            <div className="bg-red-600 text-white text-xs font-bold w-12 h-12 flex items-center justify-center rounded-full">
              -{productData.sale}%
            </div>
          )}
        </div>

        {/* Colors */}
        <div className="flex items-center gap-45">
          {productData.colors.map((color, idx) => (
            <label key={idx} className="flex items-center gap-2 cursor-pointer">
              {/* Check Circle */}
              <input
                type="radio"
                name="color"
                checked={selectedColor.hex === color.hex}
                onChange={() => setSelectedColor(color)}
                className="w-4 h-4 accent-[#D63384]"
              />
              {/* Color Circle */}
              <span
                className="w-6 h-6 rounded-full border border-gray-300"
                style={{ backgroundColor: color.hex }}
              ></span>
              {/* Color Name */}
              <span className="text-gray-700">{color.name}</span>
            </label>
          ))}
        </div>

        {/* Sizes */}
        <div className="space-y-2">
          <p className="text-gray-700 font-medium">المقاسات:</p>
          <div className="flex gap-3">
            {["M", "L", "XL"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-6 py-1 rounded border-2 transition-all ${
                  selectedSize === size
                    ? "bg-gray-300 border-white shadow-[0_0_0_2px_#D1D5DB]"
                    : "bg-gray-200 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div dir="rtl" className="max-w-2xl p-6 bg-white rounded-lg shadow-md space-y-6">
          {/* Title */}
          <div className="text-center text-2xl font-bold">املا الاستمارة للطلب</div>

          {/* First Row: Name & Phone */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="الاسم واللقب"
              className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D63384]"
            />
            <input
              type="text"
              placeholder="رقم الهاتف"
              className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D63384]"
            />
          </div>

          {/* Second Row: State & Municipality */}
          <div className="flex flex-col sm:flex-row gap-4">
            <select className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D63384]">
              <option>اختر الولاية</option>
            </select>
            <select className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D63384]">
              <option>اختر البلدية</option>
            </select>
          </div>

          {/* Delivery Method Title */}
          <div className="text-lg font-semibold">اختر مكان التوصيل</div>

          {/* Checkboxes */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="home"
                className="w-4 h-4 appearance-none rounded-full border-2 border-gray-300 checked:bg-[#D63384] checked:border-[#D63384] cursor-pointer"
              />
              <label htmlFor="home" className="cursor-pointer">للمنزل</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="office"
                className="w-4 h-4 appearance-none rounded-full border-2 border-gray-300 checked:bg-[#D63384] checked:border-[#D63384] cursor-pointer"
              />
              <label htmlFor="office" className="cursor-pointer">لمكتب التوصيل</label>
            </div>
          </div>

          <div className="flex items-center gap-4 text-white bg-[#D63384] w-max px-3 py-1 rounded cursor-pointer">
            <p>استخدم رمز ترويجي</p>
            <GoTag className="inline text-[15px]" />
          </div>

          {/* Summary Section */}
          <div className="space-y-2 pt-4">
            <div className="flex justify-between">
              <span>سعر التوصيل</span>
              <span>0 د.ج</span>
            </div>
            <div className="flex justify-between">
              <span>المنتجات</span>
              <span>0 د.ج</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>التكلفة الاجمالية</span>
              <span className="text-green-500">0 د.ج</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            {/* Quantity */}
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 border rounded hover:bg-gray-200"
                onClick={() => handleQuantity("dec")}
              >
                -
              </button>
              <span className="px-3 py-1 border rounded">{quantity}</span>
              <button
                className="px-3 py-1 border rounded hover:bg-gray-200"
                onClick={() => handleQuantity("inc")}
              >
                +
              </button>
            </div>

            {/* Order Button */}
            <button
              className="w-full bg-[#D63384] text-white px-4 py-3 rounded hover:bg-green-700 transition"
              onClick={() => setIsModalOpen(true)}
            >
              اطلب الآن
            </button>
          </div>


          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-[450px] ">
                <h2 className="text-xl font-bold mb-4">اختر المتغيرات لكل قطعة من المنتج</h2>

                <select className="w-full bg-gray-100 mb-4 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D63384]">
                  <option value="" disabled selected hidden>
                    اختر المنتج
                  </option>
                  <option>حجاب - قطعة 3</option>
                  <option>حجاب - قطعة 2</option>
                  <option>حجاب - قطعة 1</option>
                </select>

                {/* Colors - Same style as product page */}
                <div className="mb-4">
                  <p className="font-medium mb-2">الألوان:</p>
                  <div className="flex items-center gap-6">
                    {productData.colors.map((color, idx) => (
                      <label key={idx} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="modal-color"
                          checked={selectedColor.hex === color.hex}
                          onChange={() => setSelectedColor(color)}
                          className="w-4 h-4 accent-[#D63384]"
                        />
                        <span
                          className="w-6 h-6 rounded-full border border-gray-300"
                          style={{ backgroundColor: color.hex }}
                        ></span>
                        <span className="text-gray-700">{color.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sizes - Same style as product page */}
                <div className="mb-4">
                  <p className="font-medium mb-2">المقاسات:</p>
                  <div className="flex gap-3">
                    {["M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-1 rounded border-2 transition-all ${
                          selectedSize === size
                            ? "bg-gray-300 border-white shadow-[0_0_0_2px_#D1D5DB]"
                            : "bg-gray-200 border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <select className="w-full bg-gray-100 mb-4 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D63384]">
                  <option value="" disabled selected hidden>
                    اختر المنتج
                  </option>
                  <option>حجاب - قطعة 3</option>
                  <option>حجاب - قطعة 2</option>
                  <option>حجاب - قطعة 1</option>
                </select>

                <select className="w-full bg-gray-100 mb-4 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D63384]">
                  <option value="" disabled selected hidden>
                    اختر المنتج
                  </option>
                  <option>حجاب - قطعة 3</option>
                  <option>حجاب - قطعة 2</option>
                  <option>حجاب - قطعة 1</option>
                </select>

                <div className="flex items-end gap-4 mt-6 justify-start" dir="ltr">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-gray-300 rounded"
                  >
                    إغلاق
                  </button>
                  <button className="px-4 py-2 bg-[#D63384] text-white rounded">
                    تأكيد
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
     
    </div>
     <div className="w-full h-[1px] bg-gray-100 mt-8"></div>
          <div className="flex items-center justify-between " dir="rtl">
      {/* Text with star */}
      <div className="flex items-center gap-2 text-lg my-12 font-semibold">
        <span>اراء الزبائن</span>
      </div>

      {/* Button */}
      <button className="px-4 py-2 bg-[#D63384] text-white flex items-center gap-2 rounded hover:bg-green-600 transition">

        اضافة راي
        <IoMdStarOutline className="text-md" />

      </button>
    </div>
<div className="w-full h-[1px] bg-gray-100 mb-8"></div>
 <div className="flex flex-wrap justify-between p-6  gap-6" dir="rtl">
      {/* First Div: Logo */}
      <div className="flex-shrink-0">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-24 h-auto"
        />
      </div>

      {/* Second Div: Two paragraphs */}
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-gray-400">Boutique</p>
        <p className="text-gray-600 cursor-pointer hover:text-gray-800">تواصل معنا</p>
      </div>

      {/* Third Div: Paragraphs about delivery */}
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-gray-400">التوصيل</p>
        <p className="text-gray-600 cursor-pointer hover:text-gray-800">اسعار التوصيل</p>
      </div>
    </div>
    </div>
  
  );
};

export default ProductPage;