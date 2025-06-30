import React from "react";

const HelpCenter = () => {
  const topics = [
    {
      title: "Placing Orders",
      faqs: [
        {
          q: "How do I place an order?",
          a: "Browse products, add them to your cart, and proceed to checkout.",
        },
        {
          q: "Can I cancel my order?",
          a: "Yes, you can cancel orders from the 'My Orders' section before they are dispatched.",
        },
      ],
    },
    {
      title: "Payments & Refunds",
      faqs: [
        {
          q: "What payment methods do you accept?",
          a: "We accept UPI, credit/debit cards, wallets, and cash on delivery.",
        },
        {
          q: "When will I receive my refund?",
          a: "Refunds are processed within 5–7 working days depending on your bank.",
        },
      ],
    },
    {
      title: "Delivery Issues",
      faqs: [
        {
          q: "What if my delivery is late?",
          a: "Check your order status in 'My Orders'. If it's too delayed, contact support.",
        },
        {
          q: "Items are missing from my order.",
          a: "Please raise a complaint through the 'Contact Support' section with your order ID.",
        },
      ],
    },
  ];

  return (
    <div className="help-container"> 
      <div className="row">
        <div className="col-md-12 mb-6">
          <div className="section-head text-center mt-8">
            <h1 className="h3style" style={{ color: "green" }} data-title="Help Center">
              Help Center
            </h1>
            <div className="wt-separator bg-primarys"></div>
            <div className="wt-separator2 bg-primarys"></div>
            {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
          </div>
        </div>
      </div>
      <p className="help-subtitle">
        Need assistance? Browse the topics below or contact our support team.
      </p>

      <div className="help-grid">
        {topics.map((topic, index) => (
          <div key={index} className="help-card">
            <h2 className="help-topic">{topic.title}</h2>
            <ul className="help-faq-list">
              {topic.faqs.map((faq, i) => (
                <li key={i} className="help-faq-item">
                  <strong>{faq.q}</strong>
                  <p>
                    <i className="fa fa-circle" style={{ color: "green" }} />{" "}
                    {faq.a}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="contact-support">
        <h3>Still need help?</h3>
        <p>
          If you didn’t find what you’re looking for, you can reach out to our
          support team.
        </p>
        <a href="/contact" className="support-btn">
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default HelpCenter;
