import React from 'react';

const countingData = [
  {
    title: 'Fast Booking 56',
    value: '56%',
  },
  {
    title: 'Fast Booking 56',
    value: '45%',
  },
  {
    title: 'Fast Booking 56',
    value: '60%',
  },
  {
    title: 'Fast Booking 56',
    value: '90%',
  },
];

const DiverseDestination = () => {
  return (
    <div className="s-container p-[80px] grid grid-cols-2 gap-10">
      <div>
        <h2 className="secondary-heading">Diverse Destinations</h2>
        <div>
          <p className="secondary-content">
            This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
            Aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum, nec sagittis.
          </p>
          <p className="secondary-content">
            This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
            Aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum, nec sagittis.
          </p>
        </div>
      </div>

      <div className="flex justify-center  items-center">
        <div className="flex  gap-6 flex-col w-full">
          {countingData.map((data, index) => (
            <div key={index} className="gap grid-cols-1 gap-3">
              <div className="flex justify-between items-center">
                <h4>Fast Booking</h4>
                <h5>{data.value}</h5>
              </div>

              <div>
                <div className="relative w-full h-[10px] bg-black">
                  <div
                    className="bg-bgColor z-30 h-full w-[50%]"
                    style={{
                      width: data.value,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiverseDestination;
