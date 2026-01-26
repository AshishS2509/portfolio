import React from "react";
import { Card, CardAction, CardContent, CardDescription } from "./shared/card";
import { Button } from "./shared/button";
import Icons from "./Icons";
import Image from "next/image";

function ProfileCard() {
  return (
    <Card className="md:pl-8 md:flex md:flex-row lg:flex-col justify-center items-center lg:pl-0 sticky top-40">
      <div className="w-99 h-64 flex justify-center -mt-18 md:mt-0 lg:-mt-18 drop-shadow-2xl">
        <Image
          className="rounded-xl"
          height={256}
          width={256}
          src={"/profile.webp"}
          alt="Profile Image"
        />
      </div>
      <div className="flex flex-col justify-around lg:block w-full text-center">
        <h1 className="text-center text-2xl font-bold leading-8">
          Ashish Solanki
        </h1>
        <Button variant="secondary" className="border border-gray-300 p-5 m-3 w-75 mx-auto">
          <h4 className="text-center text-lg leading-loose font-mono">
            Software Developer
          </h4>
        </Button>
        <CardDescription className="text-center space-x-5 my-3">
          <Button variant="outline" size="icon">
            <Icons name="linkedIn" />
          </Button>
          <Button variant="outline" size="icon">
            <Icons name="github" />
          </Button>
          <Button variant="outline" size="icon">
            <Icons name="x" />
          </Button>
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
            Resume
          </Button>
        </CardAction>
      </div>
    </Card>
  );
}

export default ProfileCard;
