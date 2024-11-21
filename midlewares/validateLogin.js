import { verifyToken } from "../utils/token.js";

export const validateLogin = async (req, res, next) => {
  try {

    const { token } = req.cookies || {}; 
    if (!token) {
      throw new Error("Token not found");
    }
    const verify = verifyToken(token); 
  
    req.user = verify.data; 
    console.log("Autenticación exitosa");
    next(); 
  } catch (error) {
    console.error("Error en validateLogin:", error.message);
    res.status(400).send({
      success: false,
      message: error.message || "Authentication failed",
    });
  }
};