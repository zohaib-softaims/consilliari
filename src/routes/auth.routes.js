import express from "express";
import {
  signup,
  login,
  logout,
  resetPassword,
  confirmPasswordReset,
  getGoogleAuthUrl,
  handleGoogleCallback,
  confirmEmail,
  getLinkedInAuthUrl,
  handleLinkedInCallback,
  getMe,
} from "../controllers/auth.controller.js";
import { validate } from "../middleware/validator.js";
import { signupSchema, loginSchema, resetPasswordSchema, confirmResetPasswordSchema } from "../validators/auth.validators.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", validate(signupSchema), signup);
router.post("/login", validate(loginSchema), login);
router.post("/logout", logout);
router.post("/reset-password", validate(resetPasswordSchema), resetPassword);
router.post("/reset-password-confirm", validate(confirmResetPasswordSchema), confirmPasswordReset);
router.post("/confirm-email", confirmEmail);

router.get("/google", getGoogleAuthUrl);
router.post("/google/callback", handleGoogleCallback);

router.get("/linkedin", getLinkedInAuthUrl);
router.post("/linkedin/callback", handleLinkedInCallback);

router.get("/me", protect, getMe);

export default router;
