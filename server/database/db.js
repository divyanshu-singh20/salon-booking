// const mongoose = require('mongoose');

// const Connection = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log("DB Connected");
//   } catch (error) {
//     console.log("DB Connection Error", error);
//   }
// };

// module.exports = Connection;


const mongoose = require('mongoose');

const Connection = async () => {
  // Yahan MONGODB_URI use karein (wahi naam jo Render dashboard par bacha hai)
  const uri = process.env.MONGODB_URI; 

  try {
    if (!uri) {
        throw new Error("MONGODB_URI is not found in Environment Variables");
    }
    await mongoose.connect(uri);
    console.log("DB Connected Successfully to Atlas!");
  } catch (error) {
    console.log("DB Connection Error:", error.message);
  }
};

module.exports = Connection;