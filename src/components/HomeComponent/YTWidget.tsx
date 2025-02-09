import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

const YTWidget = () => {
  return (
    <div className="float-right absolute bottom-10 right-10 z-10">
      <HoverCard openDelay={0} closeDelay={0}>
        <HoverCardTrigger asChild>
          <Avatar>
            <AvatarImage src={logo} />
            <AvatarFallback>NP</AvatarFallback>
          </Avatar>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src={logo} />
              <AvatarFallback>NP</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Chaîne Youtube</h4>
              <p className="text-sm">Honma Trading Club</p>
              <div className="flex items-center pt-2">
                <Link
                  to="https://www.youtube.com/@HonmaTradingClub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-xs text-muted-foreground">
                    Pour apporter aux traders une nouvelle approche simple et
                    efficace.
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default YTWidget;
