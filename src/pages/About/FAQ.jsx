import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export default function FAQ() {
  const faq = [
    {
      ques: "How is Uvodo different from other eCommerce platforms?",
      ans: "Uvodo is a lightweight, headless, and no-code eCommerce solution designed for modern businesses. Unlike traditional platforms, it lets you sell across multiple channels (social media, payment links, websites) without needing a complex setup or high technical knowledge.",
    },
    {
      ques: "Can I use my own domain with Uvodo?",
      ans: "Yes, you can connect your existing domain. Uvodo also provides a forever free uvo.do domain suffix to all sellers upon creating an account.",
    },
    {
      ques: "Can I sell my products with Uvodo without creating an online store?",
      ans: "Yes! With Uvodo, you can generate payment links and share them directly on social media, messaging apps, or email. Customers can complete their purchases without visiting a traditional online store.",
    },
    {
      ques: "Is there a setup fee for using Uvodo?",
      ans: "No, there are no setup fees. You can start using Uvodo for free right after creating your account.",
    },
    {
      ques: "Are there any transaction fees or commissions?",
      ans: "No, Uvodo does not charge commissions or hidden fees on your sales. You only pay standard payment gateway fees (like Stripe or PayPal) depending on the provider you connect.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="text-center p-10">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase text-center mb-6">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4 max-w-3xl mx-auto text-left">
        {faq.map((fa, index) => (
          <div
            key={index}
            className={`p-4 border rounded-lg shadow-sm cursor-pointer transition-colors`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h2
                className={`font-semibold text-lg ${
                  activeIndex === index ? "text-yellow-600" : "text-black"
                }`}
              >
                {fa.ques}
              </h2>
              {activeIndex === index ? (
                <AiOutlineUp className="text-yellow-600" />
              ) : (
                <AiOutlineDown className="text-gray-500" />
              )}
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700">{fa.ans}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
