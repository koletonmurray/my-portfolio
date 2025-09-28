import {
  Card,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
  
  export default function CustomCard({ title, text, buttonText, buttonLink, Icon }) {
    return (
      <Link to={buttonLink} className="block group">
        <Card className="my-5 w-auto sm:w-96 text-left shadow-lg transition-transform duration-300 cursor-pointer group-hover:scale-105">
          <CardBody>
            {Icon && (
              <div className="text-center">
                <Icon
                  sx={{ fontSize: 45 }}
                  className={`mb-4 text-midBlue mx-auto ${
                    title === "My Story" ? "wiggle" : "screen-flash"
                  }`}
                />
              </div>
            )}
            <h3 className="mb-2">{title}</h3>
            <p>{text}</p>
          </CardBody>

          <CardFooter className="pt-0 mx-auto sm:mx-0">
            <Button
              size="sm"
              variant="text"
              className="
                flex items-center gap-2 px-3 border
                border-darkBlue text-white bg-darkBlue
                transition-colors duration-300 ease-in-out
                group-hover:bg-midBlue group-hover:text-white group-hover:border-midBlue
              "
            >
              {buttonText} →
            </Button>
          </CardFooter>
        </Card>
      </Link>
    );
  }