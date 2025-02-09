import "@fortawesome/fontawesome-free/css/all.min.css";
import me from "../../assets/me_2.jpg";
import MotionWrapper from "@/components/MotionWrapper";

export default function InspirationalMe() {
  return (
    <MotionWrapper>
      <div className="mt-20 h-[500px]">
        <div className="flex flex-col sm:flex-row items-center bg-[#1A1A1A] sm:w-[100%] md:w-[70%] h-[100%] m-auto">
          <div
            style={{
              backgroundImage: `url(${me})`,
            }}
            className="flex-1 justify-center items-center bg-cover bg-center h-[500px] hidden md:block"
          ></div>

          <div className="flex-1  flex justify-center items-center  h-[500px]">
            <div className="text-white text-center flex flex-col justify-center items-center h-full space-y-6 px-4">
              <p className="text-lg italic font-light w-[80%] md:text-md">
                &ldquo;Je veux rendre le trading accessible et ludique pour
                tous. Arrêtons de dépenser des sommes astronomiques dans des
                formations nébuleuses et complexes. Ici, pas de chichis :
                apprentissage, mise en pratique, et mindset hors de la
                zone.&rdquo;
              </p>
              <div className="text-lg font-semibold">
                <p>Alex P.</p>
                <p className="text-sm font-normal italic">
                  Fondateur de Honma Trading Club
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
}
