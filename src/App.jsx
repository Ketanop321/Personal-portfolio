import './App.css'
import profilebg from './assets/small.png'
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import profile from './assets/ProfilePic.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function App() {

  return (
    <>
    <header>
      <div className='container m-auto px-4 py-6'>
        <div className='flex justify-between items-center'>
         <div>
          <h1 className='font-bold text-xl'>Ketan portfolio</h1>
         </div>
         <div>
          <ul className='flex gap-4'>
            <li>
              <a className='text-gray-400 hover:text-white cursor-pointer'>Projects</a>
            </li>
            <li>
              <a className='text-gray-400 hover:text-white cursor-pointer'>Projects</a>
            </li>
            <li>
              <a className='text-gray-400 hover:text-white cursor-pointer'>About me</a>
            </li>
          </ul>
         </div>
        </div>
      </div>
    </header>

     <main>
      {/* Intro/Banner section */}
      <section>
           <div className='container m-auto px-4 py-30 flex flex-col sm:flex-row gap-6'>
            <div>
                <h2 className='font-bold text-4xl'>Hello, I'am ketan kumar </h2>
                <h2  className='font-bold text-3xl mt-1 gradiant-text running-text'> NOOB Frontend developer</h2>
                <p className='mt-4 text-gray-400'> This is just a prototpe. Enthusiastic about learning new Technologies,I am good at playing football.I have an intermediate knowledge of html,css,tailwind css,javascript and react⭐</p>
            </div>
            <div className='relative'>
                  <img src={profile} className=' relative z-10 w-[220px] m-auto sm:w-[520px]' />
                  <img src={profilebg} className=' relative top[112px] left-[50px]  w-[180px] m-auto sm:w[220px]'/>

            </div>
           </div>
      </section>
      {/* Project section */}
      <section>
      <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
             <div className='border border-gray-500 rounded-md p-5'>
              <img src={project1} className='w-full h-auto' />
              <h3 className='text-2xl font-semibold mt-8'>Furniture landing page</h3>
              <p className='text-gray-400 text-sm mt-2'>Responsive html/css layout fo online store.</p>
              <div className='flex justify-evnely mt-12'>
                <button className='px-6 py-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700'>Live preview</button>
                <button className='px-6  py-3 border rounded-full hover:border-blue-500 hover:text-blur-500'>Checkout github</button>
              </div>
             </div>
             <div>
             <div className='border border-gray-500 rounded-md p-5'>
              <img src={project2} className='w-full h-auto' />
              <h3 className='text-2xl font-semibold mt-8'> Designer Furniture landing page</h3>
              <p className='text-gray-400 text-sm mt-2'>Responsive html/css layout fo online store.</p>
              <div className='flex justify-evnely mt-12'>
                <button className='px-6 py-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700'>Live preview</button>
                <button className='px-6  py-3 border rounded-full hover:border-blue-500 hover:text-blur-500'>Checkout github</button>
              </div>
             </div>
             </div>
        </div>
        <div className='flex gap-10 mt-11'>
             <div className='border border-gray-500 rounded-md p-5'>
              <img src={project1} className='w-full h-auto' />
              <h3 className='text-2xl font-semibold mt-8'>Furniture landing page</h3>
              <p className='text-gray-400 text-sm mt-2'>Responsive html/css layout fo online store.</p>
              <div className='flex justify-evnely mt-12'>
                <button className='px-6 py-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700'>Live preview</button>
                <button className='px-6  py-3 border rounded-full hover:border-blue-500 hover:text-blur-500'>Checkout github</button>
              </div>
             </div>
             <div>
             <div className='border border-gray-500 rounded-md p-5'>
              <img src={project2} className='w-full h-auto'/>
              <h3 className='text-2xl font-semibold mt-8'> Designer Furniture landing page</h3>
              <p className='text-gray-400 text-sm mt-2'>Responsive html/css layout fo online store.</p>
              <div className='flex justify-evnely mt-12'>
                <button className='px-6 py-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700'>Live preview</button>
                <button className='px-6  py-3 border rounded-full hover:border-blue-500 hover:text-blur-500'>Checkout github</button>
              </div>
             </div>
             </div>
        </div>
       </div>
       {/* Technologies  section */}
       <section className='py-10'>      
       <div className='container m-auto px-4'> 
        <h2 className='text-2xl font-semibold'>Technologies</h2>
     
           <div className='mt-14'>

           <div>
           <div className='flex justify-between'>
                  <h2 className='text-lg font-semibold'>HTML</h2>
                  <p className='text-gray-500'>Intermediate</p>
            </div>
            <span className='w-full h-2 bg-gradient-to-t mt-2  from-blue-500 to-cyan-500 block rounded-md'></span>

           </div >
           <div className='mt-8'>
           <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>HTML</h2>
                  <p className='text-gray-500'>Intermediate</p>
            </div>
            <span className='w-full h-2 bg-gradient-to-t mt-2 from-blue-500 to-cyan-500 block rounded-md'></span>

           </div>
           <div className='mt-8'>
           <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>CSS</h2>
                  <p className='text-gray-500'>Intermediate</p>
            </div>
            <span className='w-[55%]  h-2 bg-gradient-to-t mt-2  from-blue-500 to-cyan-500 block rounded-md'></span>

           </div>
           <div  className='mt-8'>
           <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>javascript</h2>
                  <p className='text-gray-500'>Intermediate</p>
            </div>
            <span className='w-[25%]  h-2 bg-gradient-to-t mt-2 from-blue-500 to-cyan-500 block rounded-md'></span>

           </div>
           <div className='mt-8'>
           <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>CSS</h2>
                  <p className='text-gray-500'>Intermediate</p>
            </div>
            <span className='w-[85%]  h-2 bg-gradient-to-t mt-2  from-blue-500 to-cyan-500 block rounded-md'></span>

           </div>
           <div className='mt-8'>
           <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>CSS</h2>
                  <p className='text-gray-500'>Intermediate</p>
            </div>
            <span className='w-[5%] h-2 bg-gradient-to-t mt-2  from-blue-500 to-cyan-500 block rounded-md'></span>

           </div>
           <div className='mt-8'>
           <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>CSS</h2>
                  <p className='text-gray-500'>Intermediate</p>
            </div>
            <span className='w-[12%]  h-2 bg-gradient-to-t mt-2  from-blue-500 to-cyan-500 block rounded-md'></span>

           </div>
           </div>
           </div> 
       </section>
       {/* Additionnal skills section */}
       <div className='container m-auto px-4 py-13'>
        <h2 className='text-2xl font-semibold'>Additional Technoloiges and skill</h2>
         <div className='flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]'>
        <div>
        <p className='font-bold before:w-3 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:tocyab-500 before:rounded-full before:mt-1 before:-left-4 before:absolute relative left-5'>GIt</p>
        </div>
        <div className='flex justify-around mt-6'>
        <p className='font-bold before:w-3 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:tocyab-500 before:rounded-full before:mt-1 before:-left-4 before:absolute relative left-5'>GIt</p>        </div>
        <div>
        <p className='font-bold before:w-3 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:tocyab-500 before:rounded-full before:mt-1 before:-left-4 before:absolute relative left-5'>GIt</p>        </div>
        <div className='flex justify-between mt-8w-[88%]'>
        <p className='font-bold before:w-3 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:tocyab-500 before:rounded-full before:mt-1 before:-left-4 before:absolute relative left-5'>GIt</p>        </div>
         </div>
       </div>
      </section>
      <section className='py-8' id='abutme'>
        <div className='container m-auto px-4'>
          <h2 className='text-2xl font-semibold'>About me</h2>
          <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
             <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
               <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
               <p> Passed 10 and 12th grade from KENDRIYA VIDAYALAYA (kishanganj)and now 
                pursuing BCA from shit piece of college. Lorem, ipsum dolor sit amet
                 consectetur adipisicing elit. Hic, quibusdam veniam quaerat iusto
                  impedit molestiae temporibus laudantium nesciunt? Consequatur eius
                   voluptates facere in dicta accusantium asperiores, nobis ut quis esse?</p>
               </div>
               <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
               <h3 className="absolute left-0 text-lg font-semibold">2015</h3>

              <p> Passed 10 and 12th grade from KENDRIYA VIDAYALAYA (kishanganj)and now 
                pursuing BCA from shit piece of collegeconsectetur adipisicing elit. Hic, quibusdam veniam quaerat iusto
                  impedit molestiae temporibus laudantium nesciunt? Consequatur eius
                   voluptates facere in dicta accusantium asperiores, nobis ut quis esse?</p> 
               </div>
               <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
               <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
               <p> Passed 10 and 12th grade from KENDRIYA VIDAYALAYA (kishanganj)and now 
                pursuing BCA from shit piece of collegeconsectetur adipisicing elit. Hic, quibusdam veniam quaerat iusto
                  impedit es, nobis ut quis esse?</p>
               </div>
               <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
               <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
               <p> Passed 10 and 12th grade from KENDRIYA VIDAYALAYA (kishanganj)and now 
                pursuing BCA from shit piece of collegeconsectetur adipisicing elit. Hic, quibusdam veniam quaerat iusto
                  impedit molestiae temporibus laudantium nesciunt? Consequatur eius
                   voluptates facere inut quis esse?</p>
               </div>
               <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
               <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
               <p> Passed 10 and 12th grade from KENDRIYA VIDAYALAYA (kishanganj)and now 
                pursuing BCA from shit piece of collegeconsectetur adipisicing elit. Hic, quibusdam veniam quaerat iusto
                  impedit molestiae temporibus laudantium nere in dicta accusantium asperiores, nobis ut quis esse?</p>
               </div>
             </div>
        </div>
      </section>
     </main>
     <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2023</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a>
                <FaLinkedin />
                </a>
              </li>
              <li>
                <a>
                <FaInstagramSquare />                </a>
              </li>
              <li>
                <a>
                <FaXTwitter />                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
