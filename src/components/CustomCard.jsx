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
        <Card className="my-5 w-auto sm:w-96 text-left shadow-lg hover:scale-105 transition cursor-pointer">
          <CardBody>
            {Icon && (
              <div className="text-center">
                <Icon
                  sx={{ fontSize: 45 }}
                  className={`mb-4 text-midBlue mx-auto ${title === "My Story" ? "wiggle" : "screen-flash"}`}
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
              className="flex items-center gap-2 border border-darkBlue sm:border-midBlue text-white bg-darkBlue sm:text-darkBlue sm:bg-white px-3
                        group-hover:border-darkBlue group-hover:bg-darkBlue group-hover:text-white transition-colors duration-300 ease-in-out"
            >
              {buttonText} →
            </Button>
          </CardFooter>
        </Card>
      </Link>
    );
  }