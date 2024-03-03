import { useState } from "react";
import { Carousel } from "react-bootstrap";
import ImageLazy from "./UI/lazy-image";

const Carousels = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="carsouel__item">
        <ImageLazy
          className="lazy-carousel"
          style={{ width: "1600px" }}
          imageUrl="https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1573592371950-348a8f1d9f38%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Dbookstore%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8Ym9va3N0b3JlfGVufDB8fHx8MTcwOTQyMTE3MHww%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60"
        />
      </Carousel.Item>
      <Carousel.Item className="carsouel__item">
        <ImageLazy
          className="lazy-carousel"
          style={{ width: "1600px" }}
          imageUrl="https://i.pinimg.com/originals/67/18/22/671822c2f63dd5f65d8fd15c9710420b.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="carsouel__item">
        <ImageLazy
          style={{ width: "1600px" }}
          className="lazy-carousel"
          imageUrl="https://www.sammobile.com/wp-content/uploads/2020/01/galaxy-s20-wallpaper-note-10.jpg"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
