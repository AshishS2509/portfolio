import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/shared/card";
import Image from "next/image";
import { Button } from "@/components/shared/button";
import Icons from "@/components/Icons";
import ProfileCard from "@/components/profile-card";

export default function Home() {
  return (
    <div className="lg:flex lg:flex-row">
      <div className="lg:basis-1/3 lg:p-8">
        <ProfileCard />
      </div>
      <div className="lg:basis-2/3">02</div>
    </div>
  );
}
