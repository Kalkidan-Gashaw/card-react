import CardList from "./CardList";


function App() {
  const cardsArr =[
    {image:'../assets/kitfo.jpeg', title:'Kitfo',description:'Kitfo is a traditional Ethiopian dish made from raw minced beef, seasoned with spices like mitmita (a spicy chili powder) and clarified butter known as kibe. It can be served in various forms, including raw, lightly cooked, or as gored gored, which features cubed raw beef. Typically accompanied by sides such as ayib (fresh cheese) and gomen (collard greens).'
  
  },
    {image:'../assets/dorowet.jpeg',
    title:'Dorowet',
    description:'Doro Wot is a classic Ethiopian stew made with chicken, known for its rich and spicy flavor. The dish typically features tender pieces of chicken simmered in a sauce made from sautéed onions, garlic, ginger, and a blend of spices, including berbere, which is a key Ethiopian spice mix that adds warmth and depth. Doro Wot is often thickened with a base of tomato and is traditionally served with hard-boiled eggs, enhancing its heartiness.'
  
  },
    {image:'../assets/Tihlo.jpg',
    title:'Tihlo',
    description:'Tihlo is a traditional Ethiopian dish, particularly popular in the Tigray region. It consists of barley flour dumplings that are typically served with a spicy meat sauce, often made from minced beef or lamb. The dumplings are steamed and have a chewy texture, making them a unique and hearty option. Tihlo is usually accompanied by a spicy sauce called "siga wat".'
  
  },
    {image:'../assets/shiro.webp',
    title:'Shiro wet',
    description:'Shiro is a popular Ethiopian dish made from ground peas, seasoned with a blend of spices, including berbere, garlic, and onions. This flavorful stew has a smooth, creamy texture and is often enjoyed as a vegetarian or vegan option. Shiro can be served in various forms, from a thick paste to a more soupy consistency, and is typically accompanied by injera'
  
  },
    {image: '../assets/Tbs.jpeg',
    title:'Tibs',
    description:'Tibs is a traditional Ethiopian dish consisting of meat, usually lamb, beef, or goat, that is seasoned with a variety of spices and vegetables. The meat is typically cut into small pieces and cooked with onions, garlic, and green peppers, often incorporating herbs like rosemary for added flavor.'
  
  },
    {image:'../assets/Beyaynetu.JPG',
    title:'Beyaynetu',
    description:'Beyaynetu is a traditional Ethiopian platter that features a variety of dishes, allowing diners to sample multiple flavors and textures in one meal. The term "beyaynetu" translates to "mixed" or "variety," and the platter usually includes an assortment of vegetarian and non-vegetarian items. '
  
  },
    {image:'../assets/kurt.jpg',
    title:'Kurt',
    description:'Kurt is a traditional Ethiopian dish made from raw meat, typically beef, that is seasoned and served in various forms. The meat is often minced or chopped into small pieces and mixed with spices, including salt and sometimes chili powder. Kurt is known for its fresh flavor and is usually enjoyed as a delicacy, often accompanied by Kocho and injera'
  
  },
    {image:'../assets/chorarsa.jpeg',
    title:'Chorarsa',
    description:'Chororsa is a traditional Ethiopian dish made from roasted barley flour. This versatile ingredient is often cooked with water to create a porridge-like consistency, resulting in a hearty and nutritious meal. Chororsa can be enjoyed plain or flavored with spices, butter, or even honey.'
  
  }]
  return (
    <>
     <div className="container">
        <h1 className="title">Ethiopian Traditional Food</h1>
        <CardList data= {cardsArr}/>
     </div>
    </>
  )
}

export default App