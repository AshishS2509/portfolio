import { Card, CardAction, CardContent, CardDescription } from "./shared/card";
import { Button } from "./shared/button";
import Icons, { TIconNames } from "./shared/Icons";
import Image from "next/image";
import { Download } from "lucide-react";
import { useId } from "react";

const profileData = {
  name: "Ashish Solanki",
  title: "Software Developer",
  image: {
    src: "/profile.webp",
    alt: "Ashish Solanki — Full Stack Developer",
    width: 256,
    height: 256,
  },
  socials: [
    {
      name: "linkedIn",
      href: "https://www.linkedin.com/in/ashish-solanki-831685168/",
    },
    { name: "github", href: "https://github.com/AshishS2509" },
    { name: "x", href: "https://x.com/Ashish_2509_" },
  ],
  email: "ashish.solanki.2509@gmail.com",
  cv: {
    href: "https://drive.google.com/file/d/1JzJV3CeyQJLl92njdUsi14ZVWwMF-z6E/view?usp=sharing",
    buttonText: "Download CV",
  },
};

function Profile() {
  return (
    <Card className="sticky top-40 md:pl-8 lg:pl-0 md:flex md:flex-row lg:flex-col items-center justify-center">
      <figure className="min-w-80 h-64 flex justify-center -mt-18 md:mt-0 lg:-mt-18 drop-shadow-2xl">
        <Image
          className="rounded-xl"
          height={profileData.image.height}
          width={profileData.image.width}
          src={profileData.image.src}
          alt={profileData.image.alt}
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </figure>

      <section className="w-full text-center flex flex-col justify-around lg:block">
        <header>
          <h1 className="leading-loose">{profileData.name}</h1>
          <h4>{profileData.title}</h4>
        </header>

        <nav aria-label="Social links" className="my-3 space-x-5">
          {profileData.socials.map((social) => (
            <a
              key={useId()}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
            >
              <Button variant="outline" size="icon-lg">
                <Icons name={social.name as TIconNames} />
              </Button>
            </a>
          ))}
        </nav>

        <address className="not-italic">
          <p>You can contact me on email</p>
          <a className="text-blue-500" href={`mailto:${profileData.email}`}>
            {profileData.email}
          </a>
        </address>

        <div className="w-full">
          <a
            href={profileData.cv.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-48 mt-3" title={profileData.cv.buttonText}>
              <Download />
              {profileData.cv.buttonText}
            </Button>
          </a>
        </div>
      </section>
    </Card>
  );
}

export default Profile;
