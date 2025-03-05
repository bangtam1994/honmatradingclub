import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe } from "@stripe/react-stripe-js";
import { toast } from "sonner";
import axios from "axios";

interface StripeCheckoutProps {
  price: number;
  priceId: string;
  product: string;
}

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const StripeCheckout = ({ price, priceId, product }: StripeCheckoutProps) => {
  return (
    <>
      {stripePromise && (
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} priceId={priceId} product={product} />
        </Elements>
      )}
    </>
  );
};

const CheckoutForm = ({ price, priceId, product }: StripeCheckoutProps) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();

  const handleCheckout = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/payment/create-checkout-session`,
        {
          email,
          priceId,
          firstName,
          lastName,
          amount: price,
          product,
        }
      );

      const sessionId = response.data.sessionId;

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({
          sessionId,
        });

        if (error) {
          console.error(error);
          alert("Payment failed. Please try again.");
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Échec du paiement : ${error.message}`, {
          style: { backgroundColor: "#a80000" },
        });
      } else {
        toast.error(
          "Une erreur est survenue, veuillez contacter HonmaTradingClub par email pour confirmer votre paiement",
          { style: { backgroundColor: "#a80000" } }
        );
      }
      setLoading(false);
    }
  };

  return (
    <Card className="p-8 md:p-10 w-full max-w-screen-md mx-auto mt-10 ">
      <h2 className="text-2xl font-semibold mb-4 text-center text-black">
        Informations personnelles
      </h2>
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="Nom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="mb-4 p-3 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          placeholder="Prénom"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="mb-4 p-3 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-3 border border-gray-300 rounded"
          required
        />
        <Button
          onClick={handleCheckout}
          disabled={loading}
          variant={"reserve"}
          className={`w-full md:w-fit h-fit px-4 py-4 md:px-6 md:py-4 bg-primary text-wrap text-white md:text-lg font-semibold shadow-lg hover:bg-primary-dark transition-all m-auto  ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          style={{ marginTop: "20px" }}
        >
          {loading ? "Chargement..." : "Accéder à la page de paiement"}
        </Button>
      </form>
    </Card>
  );
};

export default StripeCheckout;
