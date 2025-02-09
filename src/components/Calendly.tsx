import React from "react";
import { InlineWidget } from "react-calendly";

interface CalendlyEmbedProps {
  url: string;
}

const Calendly: React.FC<CalendlyEmbedProps> = ({ url }) => {
  return (
    <div className="w-full h-[600px]">
      <InlineWidget url={url} styles={{ height: "100%" }} />
    </div>
  );
};

export default Calendly;
