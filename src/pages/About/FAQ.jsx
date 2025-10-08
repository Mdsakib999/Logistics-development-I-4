import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import Btn from "../../utils/Btn";
import Subtitle from "../../utils/Subtitle";

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
    <div className="min-h-screen bg-gradient-to-br  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center pb-2 md:pb-4">
            <Subtitle>Frequently Asked Questions</Subtitle>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto opacity-85">
            Everything you need to know about Uvodo. Can't find the answer
            you're looking for? Feel free to reach out to our support team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faq.map((fa, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${
                activeIndex === index ? "ring-2 ring-yellow-500" : ""
              }`}
            >
              <div
                className="p-5 sm:p-6 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-start gap-4">
                  <h2
                    className={`text-base sm:text-md font-semibold uppercase opacity-70  transition-colors ${
                      activeIndex === index
                        ? "text-yellow-600"
                        : "text-gray-800"
                    }`}
                  >
                    {fa.ques}
                  </h2>
                  <div className="flex-shrink-0 mt-1">
                    {activeIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-yellow-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    activeIndex === index
                      ? "max-h-96 opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {fa.ans}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 text-center bg-white rounded-xl shadow-sm p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you get started with Uvodo.
          </p>
          <Link to="/contact">
            <button className=" ">
              <Btn>Contact Support</Btn>
            </button>
          </Link>
        </div>
      </div>
    </div>
    
  );
}
