import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Decorative geometric shapes in background */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary border-4 border-foreground rotate-12 opacity-20" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent border-4 border-foreground -rotate-6 opacity-20" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary border-4 border-foreground rotate-45 opacity-20" />
      
      {/* Main hero content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        {/* Name container with Neo Brutalism styling */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block"
        >
          <div className="relative">
            {/* Shadow layer */}
            <div className="absolute top-3 left-3 w-full h-full bg-foreground" />
            
            {/* Main name box */}
            <div className="relative bg-primary border-[6px] border-foreground p-12 md:p-16 lg:p-20">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground tracking-tight">
                HARSH
              </h1>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground tracking-tight mt-2">
                PATEL
              </h1>
            </div>
          </div>
        </motion.div>

        {/* Decorative accent elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center gap-4"
        >
          <div className="w-16 h-2 bg-accent border-2 border-foreground" />
          <div className="w-16 h-2 bg-secondary border-2 border-foreground" />
          <div className="w-16 h-2 bg-primary border-2 border-foreground" />
        </motion.div>
      </motion.div>

      {/* Bottom corner accent */}
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent border-t-4 border-r-4 border-foreground" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-secondary border-b-4 border-l-4 border-foreground" />
    </div>
  );
}