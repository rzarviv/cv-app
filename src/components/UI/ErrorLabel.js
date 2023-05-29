import { motion } from "framer-motion";

const ErrorLabel = ({ text }) => {

  return (
    <motion.p
    className="text-pink-500"
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      role="alert">
      {text}
    </motion.p>
  );
};

export default ErrorLabel;
