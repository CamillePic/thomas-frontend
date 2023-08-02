import * as React from "react";
import Image from "next/image";


function BranchLamp() {

  return (
    <div>
          <Image
            src="/GL_WIDESCREEN_OFF.jpg"
            alt="photo"
            sizes="(max-height: 1261px) 100vw, 1261px"
          />
          Branch Lamp
        </div>
  );
}

export default BranchLamp;
