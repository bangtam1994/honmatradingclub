import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FAQProps {
  data: { question: string; response: string }[];
  isHomepage?: boolean;
}

const FAQPage = ({ data, isHomepage = false }: FAQProps) => {
  return (
    <div
      className={cn(
        "w-full  flex flex-col items-center gap-5 py-10 px-6",
        {
          "bg-black": isHomepage,
        },
        isHomepage ? "mt-40" : "mt-20"
      )}
    >
      <motion.h1 className="text-center text-6xl font-semibold bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
        FAQ
      </motion.h1>

      <div className="w-full md:max-w-screen-md xl:max-w-screen-xl mt-10 ">
        <Accordion type="single" collapsible>
          {data.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-none  overflow-hidden "
            >
              <AccordionTrigger className="flex items-center justify-between p-5 cursor-pointer bg-primary rounded-xl mb-4 md:mb-8  text-white hover:bg-primary-hover hover:no-underline  md:text-[20px]">
                <div>{faq.question} </div>
              </AccordionTrigger>

              <AccordionContent className="py-0 md:py-4 text-gray-300 mb-8  leading-7 md:text-[20px] text-center md:text-left">
                {faq.response}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQPage;
