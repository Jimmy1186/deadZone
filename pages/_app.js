import '../styles/globals.css'
import { motion, AnimatePresence } from "framer-motion"


function MyApp({ Component, pageProps, router }) {

 
  return(

        <AnimatePresence exitBeforeEnter>
      <motion.div key={router.asPath}>
          <Component {...pageProps}/> 
      </motion.div>
    </AnimatePresence>

  
  )
}

export default MyApp
