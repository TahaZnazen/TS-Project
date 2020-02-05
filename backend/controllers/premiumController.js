const Company = require("./../models/CompanyModel");
const stripe = require("stripe")("sk_live_5pZYSIqsVes45RIqOnvOlVVK00jAjbUjX5");
// sk_live_5pZYSIqsVes45RIqOnvOlVVK00jAjbUjX5
exports.getPremium = async (req, res) => {
  // 1) Get the company
  try {
    const company = await Company.findById(req.params.id);

    // const customer = await stripe.customers.create({
    //   email: company.email
    // });

    // console.log(customer.id);
    const session = await stripe.checkout.sessions.create({
      // information about session
      payment_method_types: ["card"],
      success_url: "http://localhost:8080/success",
      cancel_url: "http://localhost:8080/failed",
      customer_email: company.email,
      // client_reference_id: company._id,
      // information about the product
      line_items: [
        {
          name: "premium",
          description: "get premium",
          amount: 50000,
          currency: "usd",
          quantity: 1
        }
      ]
    });

    // // 3) send to client
    res.status(200).json({
      status: "success",
      session
    });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};
