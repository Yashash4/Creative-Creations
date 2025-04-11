const express = require('express');
const router = express.Router();

// Company info route
router.get('/info', (req, res) => {
  res.json({
    companyInfo: `Creative Creations Clothing Company was established with a vision to provide the best service. We have considerable experience in sourcing and manufacturing of apparel. Our key differentiator is our ability to offer innovative business models, implement creative processes, and deliver innovative services. With 25 years of industry experience, our founder nurtured a dream of taking the ready-made garment business global in a systematic and professional manner. This humble beginning has been built upon years of hard work, dedication, and a constant focus on dynamic market trends and customer requirements.`
  });
});

// Contact form submission route
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // In a real-world scenario, you’d save this data to a database or send an email.
  console.log("Contact form submission:", { name, email, message });
  res.status(200).json({ success: true, message: "Thank you for contacting us!" });
});

module.exports = router;
