import React from 'react'
import Image from "next/image";

function Head() {
  return (
    <div className="col lg:w-2/5 lg:mx-20">
        <Image
          src="/Main-Image.png"
          width={400}
          height={400}
          alt="Image of Ashish Solanki"
          style={{
            objectFit: "contain",
            borderRadius: "100%",
            border: "5px solid white",
            margin: "auto"
          }}
          priority={true}
        />
      </div>
  )
}

export default Head
