import { motion } from "framer-motion";
import Certification from "../assets/certification.jpeg";

const MyCertification = () => {
  return (
    <div className="flex items-center justify-center  p-12  shadow-lg ">
      {/* Texte à gauche */}
      <div className="container flex flex-col md:flex-row items-center justify-around gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }} // Se réactive au scroll
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-md text-center md:text-left"
        >
          <h2 className="text-h2 text-gray-100 font-[500]">
            Trader FTMO depuis{" "}
            <span className="text-primary font-bold">2022</span>.
          </h2>
          <p className="text-gray-400 mt-4 text-xl">
            Après de nombreuses années <b>à perdre de l'argent</b>, j'ai
            découvert une stratégie qui m'a permis de <b>valider </b>l'une de
            mes premières prop firm en <b>2022</b>.
            <br />
            <br />
            Mon parcours dans le trading m'a mené à{" "}
            <b>obtenir cette certification </b>
            FTMO, témoignant de ma <b>rigueur</b> et de ma <b>discipline</b>.
          </p>
          <p className="text-gray-200 mt-6 text-xl">
            Je te donne tous <b>mes secrets et astuces</b> pour <b>valider</b>{" "}
            toi aussi les Prop firms et enfin <b>vivre du trading</b>.
          </p>
        </motion.div>

        {/* Image à droite */}
        <motion.div
          className="bg-[#1e173c] rounded-[20px] p-[25px] mt-6 md:mt-0 "
          style={{
            boxShadow: "-2px -6px 16px #933aff30, inset 0 0 12px #898ca53d",
          }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.img
            src={Certification}
            className="w-[450px] h-auto rounded-xl shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MyCertification;
