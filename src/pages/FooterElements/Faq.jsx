import React, { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "How do I add items to my cart?",
      answer:
        "Browse the products and click on the 'Add to Cart' button. You can view your cart anytime by clicking on the cart icon.",
    },
    {
      question: "Can I remove or update the quantity of items in my cart?",
      answer:
        "Yes, go to the cart page. You'll find options to increase, decrease, or remove each item from the cart.",
    },
    {
      question: "Do I need to create an account to order groceries?",
      answer:
        "You can browse items without an account, but placing an order requires a quick sign-up or login to ensure delivery and order tracking.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept UPI, Credit/Debit Cards, Net Banking, and Cash on Delivery (COD) based on availability in your area.",
    },
    {
      question: "How do I track my order?",
      answer:
        "After placing your order, go to your profile > 'My Orders' to see live updates and order history.",
    },
    {
      question: "Is there a minimum order value for free delivery?",
      answer:
        "Yes, orders above ₹499 qualify for free delivery. A small delivery charge applies for smaller orders.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="row">
        <div className="col-md-12 mb-6">
          <div className="section-head text-center mt-8">
            <h1 className="h3style" style={{ color: "green" }} data-title="Frequently Asked Questions">
              Frequently Asked Questions
            </h1>
            <div className="wt-separator bg-primarys"></div>
            <div className="wt-separator2 bg-primarys"></div>
            {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
          </div>
        </div>
      </div>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <button className="faq-question" onClick={() => toggle(index)}>
              <span>{item.question}</span>
              <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>
                +
              </span>
            </button>
            <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
