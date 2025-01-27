import {
  Card,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
  
  export default function CustomCard({ title, text, buttonText, buttonLink, Icon }) {
    return (
      <Card className="my-5 w-auto sm:w-96 text-left shadow-lg hover:scale-105 transition">
        <CardBody>
          {Icon && (
            <div className="text-center">
                <Icon sx={{ fontSize: 40 }} className="mb-4 text-midBlue mx-auto" />
            </div>
          )}
          <h3 className="mb-2">
            {title}
          </h3>
          <p>{text}</p>
        </CardBody>
        <CardFooter className="pt-0 mx-auto sm:mx-0">
          <Link to={buttonLink} className="inline-block">
            <Button size="sm" variant="text" className="flex items-center gap-2 border border-darkBlue sm:border-midBlue hover:border-darkBlue text-white bg-darkBlue sm:text-darkBlue sm:bg-white hover:bg-darkBlue hover:text-white px-3">
              {buttonText} →
            </Button>
          </Link>
        </CardFooter>
      </Card>
    );
  }