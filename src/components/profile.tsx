import { Card, CardAction, CardContent, CardDescription } from "./shared/card";
import { Button } from "./shared/button";
import Icons, { TIconNames } from "./shared/Icons";
import Image from "next/image";
import { Download } from "lucide-react";

function Profile() {
  return (
    <Card className="md:pl-8 md:flex md:flex-row lg:flex-col justify-center items-center lg:pl-0 sticky top-40">
      <div className="min-w-80 h-64 flex justify-center -mt-18 md:mt-0 lg:-mt-18 drop-shadow-2xl">
        <Image
          className="rounded-xl"
          height={256}
          width={256}
          src={"/profile.webp"}
          alt="Profile Image"
        />
      </div>
      <div className="flex flex-col justify-around lg:block w-full text-center">
        <h1 className="text-center leading-loose">Ashish Solanki</h1>
        <h4 className="text-center">Software Developer</h4>
        <CardDescription className="text-center space-x-5 my-3">
          {[
            {
              name: "linkedIn",
              href: "https://www.linkedin.com/in/ashish-solanki-831685168/",
            },
            { name: "github", href: "https://github.com/AshishS2509" },
            { name: "x", href: "https://x.com/Ashish_2509_" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Icons name={social.name as TIconNames} />
              </Button>
            </a>
          ))}
        </CardDescription>
        <CardContent className="text-center">
          <p> You can contact me on email </p>
          <a
            className="text-blue-500"
            href="mailto:ashish.solanki.2509@gmail.com"
          >
            ashish.solanki.2509@gmail.com
          </a>
        </CardContent>
        <CardAction className=" w-full text-center">
          <Button className=" w-48 mt-3" title="Download Resume">
            <Download /> CV
          </Button>
        </CardAction>
      </div>
    </Card>
  );
}

export default Profile;
