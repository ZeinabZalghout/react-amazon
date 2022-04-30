import computers from './images/computers.jpg'
import deals from './images/deals.jpg'
import Electronics from './images/electronics.jpg'
import health from './images/health.jpg'
import home from './images/home.jpg'
import retuns from './images/retuns.jpg'
import Beauty from './images/Beauty.jpg'

const feedItems = [
  "Shop by categories",
  "Health & Personal Care",
  "Electronics",
  "Computers & Accessories",
  "Beauty picks",
  "Get fit at home",
  "Deals  & Promotions",
  "Easy Returns",

];
const products1 = [
  {
    id: "1",
    title: "Shop by categories",
    link: "Shop now",
    image:<img src=""/>
  },
  {
    id: "2",
    title: "Health & Personal Care",
    link: "Shop now",
   image:<img src={health} className='images'/>  },
  {
    id: "3",
    title: "Electronics",
    link: "See more",
    image:<img src={Electronics} className='images'/>},
  {
    id: "4",
    title:
 "Computers & Accessories",
     price: 11,
    rating: 4,
    link: "Shop now",
  
     image:<img src={computers} className='images'/>
   },
  {
    id: "5",
    title: "Beauty picks",
 link: "Shop now",
 image:<img src={Beauty} className='images'/>,
  },
  {
    id: "6",
    title:"Get fit at home",
  link: "Explore now",
   image:<img src={home} className='images'/>  },
    {
    id: "7",
    title: "Deals  & Promotions",
 
   link: "Shop now",
    image:<img src={deals} className='images'/>  },
        {
    id: "8",
    title: "Easy Returns",
   link: "Learn more",
   image:<img src={retuns} className='images'/>  },
];


  const photo=[health,Electronics,computers,Beauty,home,deals,retuns];


export { products1, feedItems ,photo};