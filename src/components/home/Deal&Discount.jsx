import React from 'react';
import dealimg1 from '../../assets/dealanddiscount/dealimage1.jpg';
import dealimg2 from '../../assets/dealanddiscount/dealimage2.jpg';
import dealimg3 from '../../assets/dealanddiscount/dealimage3.jpg';
import dealimg4 from '../../assets/dealanddiscount/dealimage4.jpg';
import dealimg5 from '../../assets/dealanddiscount/dealimage5.jpg';

const dealData = [
  {
    title: 'Colorfull India',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt consequuntur tempore, quas numquam voluptas error.',
    price: 1600,
    image: dealimg1,
  },
  {
    title: 'Colorfull India',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt consequuntur tempore, quas numquam voluptas error.',
    price: 1600,
    image: dealimg1,
  },
  {
    title: 'Colorfull India',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt consequuntur tempore, quas numquam voluptas error.',
    price: 1600,
    image: dealimg1,
  },
  {
    title: 'Colorfull India',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt consequuntur tempore, quas numquam voluptas error.',
    price: 1600,
    image: dealimg1,
  },
  {
    title: 'Colorfull India',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt consequuntur tempore, quas numquam voluptas error.',
    price: 1600,
    image: dealimg1,
  },
  {
    title: 'Colorfull India',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt consequuntur tempore, quas numquam voluptas error.',
    price: 1600,
    image: dealimg1,
  },
];

const DealDiscount = () => {
  return (
    <div className="lg:pr-[150px] lg:pl-[150px] p-12">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div className="flex justify-center items-center flex-col gap-6">
          <div>
            <div className="w-full h-full relative group">
              <img src={dealimg1} className="h-full w-full object-cover" alt="Colorful India" />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white flex flex-col justify-start p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <h3 className="text-3xl font-bold">Colorful India</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero inventore eaque
                  minus non dolorum fugit!
                </p>
                <p className="font-bold">$1600</p>
              </div>
            </div>
          </div>
          <div className="lg:flex hidden justify-center items-center gap-6">
            <div>
              <div className="w-full h-full relative group">
                <img src={dealimg3} className="h-full w-full object-cover" alt="Colorful India" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white flex flex-col justify-start p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <h3 className="text-2xl font-bold">Colorful India</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero inventore eaque
                    minus non dolorum fugit!
                  </p>
                  <p className="font-bold">$1600</p>
                </div>
              </div>
            </div>

            <div>
              <div className="w-full h-full relative group">
                <img src={dealimg3} className="h-full w-full object-cover" alt="Colorful India" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white flex flex-col justify-start p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <h3 className="text-2xl font-bold">Colorful India</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero inventore eaque
                    minus non dolorum fugit!
                  </p>
                  <p className="font-bold">$1600</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start flex-col items-center gap-6">
          <div>
            <div className="p-10">
              <h2 className="text-3xl font-bold">Deals & Discounts</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias iste cum sed
                voluptatum error nostrum enim. In ad vero omnis facilis, porro sint magnam unde quod
                inventore laudantium eligendi esse?
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="w-full h-full relative group">
                <img src={dealimg2} className="h-full w-full object-cover" alt="Colorful India" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white flex flex-col justify-start p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <h3 className="text-2xl font-bold">Colorful India</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero inventore eaque
                    minus non dolorum fugit!
                  </p>
                  <p className="font-bold">$1600</p>
                </div>
              </div>
            </div>{' '}
            <div className="grid grid-rows-2 gap-6">
              <div>
                <div className="w-full h-full relative group">
                  <img src={dealimg3} className="h-full w-full object-cover" alt="Colorful India" />
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white flex flex-col justify-start p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <h3 className="text-2xl font-bold">Colorful India</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero inventore eaque
                      minus non dolorum fugit!
                    </p>
                    <p className="font-bold">$1600</p>
                  </div>
                </div>
              </div>{' '}
              <div>
                <div className="w-full h-full relative group">
                  <img src={dealimg3} className="h-full w-full object-cover" alt="Colorful India" />
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white flex flex-col justify-start p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <h3 className="text-2xl font-bold">Colorful India</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero inventore eaque
                      minus non dolorum fugit!
                    </p>
                    <p className="font-bold">$1600</p>
                  </div>
                </div>
              </div>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealDiscount;
