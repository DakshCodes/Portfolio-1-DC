import React, { useEffect, useState } from "react";
import body from "..\\public/img1.png";
import Design from "..\\public/design.png";
import code from "..\\public/code.png";
import cunsult from "..\\public/consulting.png";
import web1 from "..\\public/web1.png";
import web2 from "..\\public/web2.png";
import web3 from "..\\public/web3.png";
import web4 from "..\\public/web4.png";
import web5 from "..\\public/web5.png";
import web6 from "..\\public/web6.png";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"
import { BsFillMoonStarsFill } from "react-icons/bs";

function App() {
 const [darkMode,setDarkMode] = useState(false);


  return (<div className={darkMode ? "bg-gray-900 text-white" : "bg-white"}>
  <main className=" px-10 md:px-20 lg:px-40  ">
    <section className=" min-h-screen">
      <nav className="py-6 mb-12 flex justify-between font-['Mclaren']">
        <h1 className="text-xl">Aman Kumar</h1>
        <ul className="flex items-center">
          <li className="flex gap-4">
            <BsFillMoonStarsFill
             onClick={()=> setDarkMode(!darkMode)}
             className="cursor-pointer text-2xl " />
          </li>
          <li>
            <a className="bg-gradient-to-r  from-cyan-500 to-teal-500 ml-8 text-white px-4 py-2 rounded-md" href="#" >Resume</a>
          </li>
        </ul>
      </nav>
      <div className={darkMode ?  "text-white" : "bg-white"}>
      <div className="text-center ">
        <h2 className="text-5xl   text-teal-600 font-medium md:text-6xl">Aman</h2>
        <h3 className="text-xl py-4 md:text-3xl  ">Developer and Designer.</h3>
        <p className="text-md  leading-8  md:text-xl max-w-xl mx-auto">Join Me down below and let's get craking!</p>
      </div>
      </div>
      <div className={darkMode?"text-5xl flex justify-center gap-16 py-3 text-white cursor-pointer":"text-5xl flex justify-center gap-16 py-3 text-black cursor-pointer"}>
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillYoutube />
      </div>
      <div className="bg-gradient-to-b from-teal-500  my-2 w-96  rounded-full  mx-auto overflow-hidden md:h-96 md-w-96">
        <img src={body} alt="Imge" ></img>
      </div>
    </section>

    <section>
      <div>
        <h3 className="text-3xl py-1">Services I offer</h3>
        <p
          className="text-md py-2 leading-8 text-gray-800 ">Since The Begining Of My Journy As a Freelance developer i've done remote work for
          <span className="text-teal-500">agencies</span>
          consulted for
          <span className="text-teal-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem labore tempore expedita temporibus ipsum excepturi laboriosam id fugiat doloremque consequatur odit harum qui eius blanditiis autem nulla atque, explicabo eveniet minima? Necessitatibus ex quidem atque obcaecati illo vitae odio explicabo beatae delectus nemo eaque itaque asperiores laborum ratione qui rem, veritatis voluptatem reprehenderit similique saepe sapiente quod? Dolor necessitatibus atque praesentium eaque consequatur, tempore porro sit alias a est rem minima saepe quis hic. Cum officia numquam tenetur labore? Repellat dolorum aliquid eaque explicabo in aut ratione non veniam pariatur! Voluptatibus deleniti maxime nostrum nihil delectus qui! Esse, et animi minima maiores repudiandae rem. Mollitia maxime dolorem eius odio nemo at harum quae. Fugit ullam vero consequatur officiis vel pariatur impedit amet dolorem sequi. Delectus officia quis quas incidunt, quod et ad perferendis ut quos, voluptatibus nobis quia dolores repudiandae, obcaecati quae impedit fugit deleniti qui provident nam aliquid odio dolorum? Voluptates dolorum ex fugiat assumenda eveniet corrupti porro harum hic molestiae ipsa dignissimos nobis quo esse ad reprehenderit error ab, quidem eaque officiis fugit iste pariatur perferendis. Consequatur eveniet unde perspiciatis facere id iusto suscipit fuga repellendus accusantium cupiditate, laborum excepturi eaque minima modi ex quod neque. Quibusdam.</span>
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <div className="flex justify-center"><img src={Design} alt="image" width={100} height={100}></img></div> 
          <h3 className="text-lg font-medium pt-8 pb-2 ">Beautiful Designs</h3>
          <p>Creating Elegant Design Suited for Your Design Theory</p>
          <h4 className="py-4 text-teal-600">Design Tool i Use</h4>
          <p className="text-gray-800 py-1 ">Photoshop</p>
          <p className="text-gray-800 py-1 ">Illustrator</p>
          <p className="text-gray-800 py-1 ">Figma</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
        <div className="flex justify-center"><img src={cunsult} alt="image" width={100} height={100}></img></div> 
         <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
         <p>Creating Elegant Design Suited for Your Design Theory</p>
         <h4 className="py-4 text-teal-600">Design Tool i Use</h4>
         <p className="text-gray-800 py-1 ">Photoshop</p>
         <p className="text-gray-800 py-1 ">Illustrator</p>
         <p className="text-gray-800 py-1 ">Figma</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
        <div className="flex justify-center"><img src={code} alt="image" width={100} height={100}></img></div> 
         <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
         <p>Creating Elegant Design Suited for Your Design Theory</p>
         <h4 className="py-4 text-teal-600">Design Tool i Use</h4>
         <p className="text-gray-800 py-1 ">Photoshop</p>
         <p className="text-gray-800 py-1 ">Illustrator</p>
         <p className="text-gray-800 py-1 ">Figma</p>
        </div>
      </div>  
    </section>
    <section>
      <div>
        <h3 className="text-3xl py-1">Portofolio</h3>
        <p
          className="text-md py-2 leading-8 text-gray-800 ">Since The Begining Of My Journy As a Freelance developer i've done remote work for
          <span className="text-teal-500">agencies</span>
          consulted for
          <span className="text-teal-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quidem labore tempore expedita temporibus ipsum excepturi laboriosam id fugiat doloremque consequatur odit harum qui eius blanditiis autem nulla atque, explicabo eveniet minima? Necessitatibus ex quidem atque obcaecati illo vitae odio explicabo beatae delectus nemo eaque itaque asperiores laborum ratione qui rem, veritatis voluptatem reprehenderit similique saepe sapiente quod? Dolor necessitatibus atque praesentium eaque consequatur, tempore porro sit alias a est rem minima saepe quis hic. Cum officia numquam tenetur labore? Repellat dolorum aliquid eaque explicabo in aut ratione non veniam pariatur! Voluptatibus deleniti maxime nostrum nihil delectus qui! Esse, et animi minima maiores repudiandae rem. Mollitia maxime dolorem eius odio nemo at harum quae. Fugit ullam vero consequatur officiis vel pariatur impedit amet dolorem sequi. Delectus officia quis quas incidunt, quod et ad perferendis ut quos, voluptatibus nobis quia dolores repudiandae, obcaecati quae impedit fugit deleniti qui provident nam aliquid odio dolorum? Voluptates dolorum ex fugiat assumenda eveniet corrupti porro harum hic molestiae ipsa dignissimos nobis quo esse ad reprehenderit error ab, quidem eaque officiis fugit iste pariatur perferendis. Consequatur eveniet unde perspiciatis facere id iusto suscipit fuga repellendus accusantium cupiditate, laborum excepturi eaque minima modi ex quod neque. Quibusdam.</span>
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row  lg:flex-wrap">
        <div className="basis-1/3 flex-1  ">
         <img src={web1} className="rounderd-lg object-cover " width={'100%'} height={'100%'} layout="responsive"></img>
        </div>
        <div className="basis-1/3 flex-1  ">
         <img src={web2} className="rounderd-lg object-cover " width={'100%'} height={'100%'} layout="responsive"></img>
        </div>
        <div className="basis-1/3 flex-1  ">
         <img src={web3} className="rounderd-lg object-cover " width={'100%'} height={'100%'} layout="responsive"></img>
        </div>
        <div className="basis-1/3 flex-1  ">
         <img src={web4} className="rounderd-lg object-cover " width={'100%'} height={'100%'} layout="responsive"></img>
        </div>
        <div className="basis-1/3 flex-1  ">
         <img src={web5} className="rounderd-lg object-cover " width={'100%'} height={'100%'} layout="responsive"></img>
        </div>
        <div className="basis-1/3 flex-1  ">
         <img src={web6} className="rounderd-lg object-cover " width={'100%'} height={'100%'} layout="responsive"></img>
        </div>
      </div>

    </section>
  </main>
  </div>
  );
}

export default App;