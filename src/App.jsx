import { useState} from 'react';
import './App.css';
import Header from './components/header/Header';
import Animation from './components/animation/Animation';
import Content from './components/content/Content';
import ProductsList from './components/productsList/ProductsList';
import Backtotop from './components/backtotop/Backtotop';
import CloseButton from './components/closeButton/CloseButton';
import MovingBlock from './components/movingBlock/MovingBlock';



function App() {
  const [srcImage, setSrcImage] = useState("");
  const [altImage, setAltImage] = useState("");
  const [cardId, setCardId] = useState(0);
  const [blockInner, setBlockInner] = useState("");

  const [transformX, setTransformX] = useState(100);
  const [isShown, setIsShown] = useState(false);


  const products = [
    { 
        id: 1,
        name: 'Revolution SVR Rosso Indoor Table', 
        price: 3.599,
        shortDescription: "Built on the legacy of the Revolution Classic Tables to incorporate the latest innovations.",
        description: "A revolutionary blend of part gaming, part furniture, part art. Built on the legacy of the Revolution Classic Tables to incorporate the latest innovations. Using the best materials available, Killerspin has spent years of precision engineering, dedicated craftsmanship, and comprehensive prototyping to develop this table. Designed to deliver impeccable performance, the Revolution Series Table is the pinnacle of our build quality and attention to detail.",
        srcPreview: "./assets/preview-red-table.jpg",
        src: "./assets/red-table.png",
        alt: "red table",
    },
    { 
        id: 2,
        name: 'SVR daVinci', 
        price: 4.449,
        shortDescription: 'SVR daVinci is the newest stationary table, where form meets function and both science and art are one.',
        description: "Designed in minimalist style, principally colored black and contrasted by aluminum accents, with Killerspin badges that tastefully adorn the frame, net, and post set. A unique serial number, laser-etched onto an aluminum plate is proudly positioned on the tabletop frame and will make a great play-break conversational piece. ",
        srcPreview: "./assets/preview-black-table.jpg",
        src: "./assets/black-table.png",
        alt: "black table"
    },
    { 
        id: 3,
        name: 'SVR Amano', 
        price: 349,
        shortDescription: 'The SVR Amano table tennis paddle is constructed with a 7-ply sheet, consisting of 5 plywood and 2 inner carbon layers for optimal speed, stiffness, and control.',
        description: "The SVR Amano table tennis paddle is a pure work of art. It is made with high-quality materials and superior craftsmanship, and it performs extremely well. It is an excellent choice for any player, from beginner to expert. This professional-quality blade is made entirely by hand and is one-of-a-kind. It is constructed with a 7-ply sheet, consisting of 5 plywood and 2 inner carbon layers for optimal speed, stiffness, and control. The outer plywood is American walnut, hand-selected for its uniform dark color and high quality. The handle is crafted from solid American walnut, chosen for its exceptional properties. Despite its offensive playing style, the Amano blade is incredibly well-balanced and provides excellent control.",
        srcPreview: "./assets/preview-amano.jpg",
        src: "./assets/amano.png",
        alt: "amano-racket",
    },
    { 
        id: 4,
        name: 'Stilo7 SVR Ping Pong Paddle', 
        price: 349.99,
        shortDescription: 'Killerspin’s carbon fiber blade construction and high-performance rubbers are designed for ping pong enthusiasts crafted with Nitrx-4Z Rubbers.',
        description: "The Stilo7 SVR is possibly the fastest ping-pong paddle on the planet! Killerspin’s carbon fiber blade construction and high-performance rubbers are designed for ping pong enthusiasts crafted with Nitrx-4Z Rubbers. Dominate your opponents in style, Game On!",
        srcPreview: "./assets/preview-stilo.jpg",
        src: "./assets/stilo.png",
        alt: "stilo-racket",
    },
    { 
        id: 5,
        name: 'IMPACT D9 PowerGrip', 
        price: 99.99,
        shortDescription: 'IMPACT D9 blade construction with 7-ply composite wood and 2 carbon fiber layers means enhanced accuracy and extra pop for an aggressive play style.',
        description: "IMPACT D9 paddle is perfect for an all-around style of play; for those serious players that are looking for that extra pop from the paddle while having solid control and spin. It is the next generation of the JET800 Speed N2.IMPACT D9 has two carbon layers, which is an advanced material used to help increase the power of the blade. IMPACT D9 blade construction with 7-ply composite wood and 2 carbon fiber layers means enhanced accuracy and extra pop for an aggressive play style. IMPACT D9 comes with PowerGrip - a unique handle that enhances the gripping for shake-hand table tennis grip users. It allows the index finger to securely grip on the curve of the handle on the backhand side while the thumb is resting on the forehand side curve of the handle.",
        srcPreview: "./assets/preview-impact.jpg",
        src: "./assets/impact.png",
        alt: "impact-racket",
    },
    { 
        id: 6,
        name: 'SVR Wing Net Set', 
        price: 149.99,
        shortDescription: 'The SVR Wing Ping Pong Net Set is a newer addition to Killerspin net sets.',
        description: "The SVR Wing Ping Pong Net Set is a newer addition to Killerspin net sets. It is designed to look as good as it performs. Durable black steel posts beautifully complement the black cotton net. Built with a precision tension adjustment system and solid construction to create an incredible playing experience.",
        srcPreview: "./assets/preview-net.webp",
        src: "./assets/net.png",
        alt: "net",
    },
    { 
        id: 7,
        name: '25 Pack - Training Balls 40+ (White)', 
        price: 36.59,
        shortDescription: 'These 40+ ping pong balls are perfect for practice play, training, and fun!',
        description: "This is the classic white Killerspin training ball, updated to match the latest size and materials regulations. These 40+ ping pong balls are perfect for practice play, training, and fun!",
        srcPreview: "./assets/preview-balls.webp",
        src: "./assets/balls.png",
        alt: "balls",
    },
    { 
        id: 8,
        name: 'Ping Pong Paddle Rubber Cleaning Spray Kit', 
        price: 19.99,
        shortDescription: 'Our Rubber Cleaning Spray Kit protects your equipment and helps you perform your best.',
        description: "Our Rubber Cleaning Spray Kit protects your equipment and helps you perform your best. The Killerspin Cleaning Spray Kit rubber cleaner will remove the grease and oil that rob your paddle of its tackiness and weaken your stroke. It’s like getting a new bat with every cleaning!",
        srcPreview: "./assets/preview-kit.jpeg",
        src: "./assets/cleaning-kit.png",
        alt: "cleaning kit",
    },
    { 
        id: 9,
        name: 'Black Sleeve Case', 
        price: 24.99,
        shortDescription: 'It accommodates two rackets secured with an elastic fastener, and there\'s still room for four ping pong balls!',
        description: "This cool-looking paddle case is one of the newest Killerspin products. It keeps up with modern player's standards. It accommodates two rackets secured with an elastic fastener, and there's still room for four ping pong balls!",
        srcPreview: "./assets/preview-case.webp",
        src: "./assets/case.png",
        alt: "case",
    },
    { 
        id: 10,
        name: 'Krew Bag', 
        price: 43.99,
        shortDescription: 'Killerspin Krew Bag will be the perfect addition to your outfit.',
        description: "Killerspin Krew Bag will be the perfect addition to your outfit, whether you're going to the gym or for a drink with friends. This stylish fashionable shoulder-bag is class apart in the World of Table Tennis.",
        srcPreview: "./assets/preview-red-bag.webp",
        src: "./assets/red-bag.png",
        alt: "red bag",
    },
    { 
        id: 11,
        name: 'SVR Backpack', 
        price: 189.99,
        shortDescription: 'If you\'re heading out for a weekend getaway or having a friendly ping pong tournament after work, it\'s all you need to get from point A to point B.',
        description: "You don't have to give up the comfort of a backpack when you're out of school. If you're heading out for a weekend getaway or having a friendly ping pong tournament after work, it's all you need to get from point A to point B.",
        srcPreview: "./assets/preview-silver-bag.webp",
        src: "./assets/silver-bag.png",
        alt: "silver bag",
    },
]

  return (
    <div className='main'>
      <Header
        setTransformX={setTransformX}
        setBlockInner={setBlockInner}
      />

      <div className='main-info-section' id="main-info">
         <Animation
          srcImage={srcImage}
          isShown={isShown}
          products={products}
         /> 
         <Content/>
      </div>

  
    <ProductsList 
        products={products}
        isShown={isShown}
        setIsShown={setIsShown}
        setSrcImage={setSrcImage}
        altImage={altImage}
        setAltImage={setAltImage}
        transformX={transformX}
        setTransformX={setTransformX}
        setBlockInner={setBlockInner}
        cardId={cardId}
        setCardId={setCardId}
        />

    <CloseButton
        transformX={transformX}
        setTransformX={setTransformX}
    />


    <MovingBlock 
            products={products}
            transformX={transformX}
            setTransformX={setTransformX}
            blockInner={blockInner}
            setBlockInner={setBlockInner}
            cardId={cardId}
        />
 
      <Backtotop/>
    </div>
  )
}

export default App;
