import Image from '../asetts/images/image.png'
import Img1 from '../asetts/images/Img1.jpeg'
import Img2 from '../asetts/images/img2.jpg'
import Img3 from '../asetts/images/img3.jpg'
import Img4 from '../asetts/images/img4.jpeg'
import Img5 from '../asetts/images/img5.jpg'
import React, { useState } from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { galleryTab } from './';


const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState("");
  
    const galleryTab = [
      {
        imageUrl: Image,
        type: "Nature",
        title: "Beautiful Work",
      },
      {
        imageUrl: Img1,
        type: "Nature",
        title: "Beautiful Work",
      },
      {
        imageUrl: Img2,
        type: "Nature",
        title: "Beautiful Work",
      },
    ]

}


function ReviewPage() {
  return (

    <>
     <div className="gallery">
      {galleryTab.map((item, index) => (
        <div key={index} className="gallery-item">
          <img src={item.imageUrl} alt={item.title} />
          <div className="image-info">
            <p>{item.type}</p>
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
   



<div>
<div
  class="flex flex-col mt-6 ml-12 rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row">
  <img
    class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
    src={Img3}
    alt="Img3" />
  <div class="flex flex-col justify-start p-6">
    <h5 class="mb-2 text-xl font-medium">1 .Boichik Bagels</h5>
    <p class="mb-4 text-base">
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </p>
    <p class="text-xs text-surface/75 dark:text-neutral-300">
      Last updated 3 mins ago
    </p>
  </div>
</div>
<div
  class="flex flex-col mt-6 ml-12 rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row">
  <img
    class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
    src={Img4}
    alt="Img4" />
  <div class="flex flex-col justify-start p-6">
    <h5 class="mb-2 text-xl font-medium">2 .The Sung</h5>
    <p class="mb-4 text-base">
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </p>
    <p class="text-xs text-surface/75 dark:text-neutral-300">
      Last updated 3 mins ago
    </p>
  </div>
</div>
<div
  class="flex flex-col mt-6 ml-12 rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row">
  <img
    class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
    src={Img5}
    alt="Img5" />
  <div class="flex flex-col justify-start p-6">
    <h5 class="mb-2 text-xl font-medium">1 .Boichik Bagels</h5>
    <p class="mb-4 text-base">
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </p>
    <p class="text-xs text-surface/75 dark:text-neutral-300">
      Last updated 3 mins ago
    </p>
  </div>
</div>
<div
  class="flex flex-col mt-6 ml-12 rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row">
  <img
    class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
    src={Img3}
    alt="Img3" />
  <div class="flex flex-col justify-start p-6">
    <h5 class="mb-2 text-xl font-medium">1 .Boichik Bagels</h5>
    <p class="mb-4 text-base">
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </p>
    <p class="text-xs text-surface/75 dark:text-neutral-300">
      Last updated 3 mins ago
    </p>
  </div>
</div>
</div>
    
    </>
  )
}

export default ReviewPage