import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe } from "@stripe/react-stripe-js";
import { toast } from "sonner";
import axios from "axios";
import { BorderBeam } from "./magicui/border-beam";
import { Input } from "./ui/input";
import { ShimmerButton } from "./magicui/shimmer-button";
import { cn } from "@/lib/utils";

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
    <Card className="md:p-8 w-full max-w-screen-md mx-auto mt-10 relative overflow-hidden bg-transparent">
      <CardHeader>
        <CardTitle className="text-center text-xl md:text-2xl font-semibold mb-2">
          Informations personnelles
        </CardTitle>
        <CardDescription className="text-center text-gray-400 text-md md:text-xl">
          Entrez vos informations personnelles pour accéder à la page de
          paiement.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4 ">
            <div className="flex flex-col space-y-1.5">
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Input
                id="nom"
                type="text"
                placeholder="Prénom"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Input
                id="prenom"
                type="text"
                placeholder="Nom"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                required
              />
            </div>
          </div>

          <ShimmerButton
            className={cn(
              "w-full md:w-fit h-fit font-bold bg-primary text-wrap text-white text-sm md:text-lg  shadow-lg hover:bg-primary-dark transition-all m-auto mt-10",
              loading ? "opacity-50 cursor-not-allowed" : ""
            )}
            shimmerColor={"white"}
            background={"#7c3aed"}
            shimmerSize={"0.1em"}
            onClick={handleCheckout}
            disabled={loading}
          >
            {loading ? "Chargement..." : "Accéder à la page de paiement"}
          </ShimmerButton>
        </form>
      </CardContent>
      <BorderBeam
        duration={6}
        size={400}
        className="from-transparent via-red-500 to-transparent"
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={400}
        className="from-transparent via-blue-500 to-transparent"
      />
    </Card>
  );
};

export default StripeCheckout;
