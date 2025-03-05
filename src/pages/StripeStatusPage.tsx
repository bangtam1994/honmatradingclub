import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

import MotionWrapper from "../components/MotionWrapper";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeaderSecondary from "@/components/HeaderSecondary";
type SessionData = {
  status: string;
  session: {
    id: string;
    amount_total: number;
    customer_email: string;
    customer_details: { name: string };
    metadata: { firstName: string; lastName: string };
  };
  message: string;
};

const StripeStatusPage: React.FC = () => {
  const [data, setData] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const statusPage = searchParams.get("status");
  const productPage = searchParams.get("product");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSessionDetails = async () => {
      if (statusPage === "success" && sessionId) {
        try {
          const response = await axios.post(
            `${
              import.meta.env.VITE_BACKEND_URL
            }/payment/checkout-session-details`,
            { sessionId }
          );
          if (response.data) {
            setData(response.data);
          }
        } catch (error) {
          console.error("Error fetching session details:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchSessionDetails();
  }, [statusPage, sessionId]);

  return (
    <>
      <HeaderSecondary />
      <div className="w-full py-6">
        <MotionWrapper>
          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            </div>
          ) : (
            <div className="w-full py-6 flex flex-col gap-12 items-center text-center">
              <h1 className="text-4xl font-bold mb-4">
                Paiement{" "}
                {statusPage === "success" ? (
                  <span className="flex items-center">
                    effectué
                    <CheckCircle className="ml-2 text-green-500" />
                  </span>
                ) : (
                  <span className="flex items-center">
                    annulé
                    <XCircle className="ml-2 text-red-500" />
                  </span>
                )}
              </h1>
              {statusPage !== "success" ? (
                <div className="text-2xl">
                  Ton paiement a été annulé. Tu ne seras pas débité.
                </div>
              ) : (
                <div className="text-2xl">
                  Merci pour ton paiement, {data?.session.metadata.firstName} !
                  <br />
                  <br />
                  Consulte tes emails pour recevoir le détail de ton offre
                  <br />
                  <b className="uppercase">{productPage}</b>
                  <br />
                  <br />
                  (N'oublie pas de vérifier tes indésirables !)
                </div>
              )}
              <Button
                variant="reserve"
                className="mt-12 p-8 text-xl bg-primary text-white"
                onClick={() => navigate(`/${productPage ?? ""}`)}
              >
                Retour à la page de l'offre
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          )}
        </MotionWrapper>
      </div>
    </>
  );
};

export default StripeStatusPage;
