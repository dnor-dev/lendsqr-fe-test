import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';

const AppRoutes = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default AppRoutes;
