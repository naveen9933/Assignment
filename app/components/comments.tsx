import React, { useState } from 'react';

function Comments() {
  const comments = [
    {
      id: 1,
      name: 'susan smith',
      image: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      image: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      image: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      image: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];
  
  const [readMore, setReadMore] = useState<{ [key: number]: boolean }>({});

  const toggleReadMore = (id: number) => {
    setReadMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className='  pl-[17px] pr-[17px] mt-[200px] mb-[100px] h-[800px] flex flex-col justify-center items-center'>
      <div className=' bg-[#FAE9DD] shadow-custom flex flex-col items-center gap-y-3 w-[400px] '>

        <div className='text-[50px] bg-[#FAE9DD]'>Comments</div>
        <div className=' flex flex-col items-center gap-y-9 mt-[20px] ml-[15px] mr-[15px]'>
          {comments.map((user) => {
            const { id, name, image, text } = user;
            return (
              <div key={id} className="mb-4 bg-white shadow-custom hover:shadow-xl ">
                <div className='ml-[10px]'>
                <div className='flex items-center mt-[10px]'>
                  <img src={image} alt={name} className='w-[60px] h-[60px] rounded-[50px]' />
                  <div className='text-[20px] font-bold ml-[30px]'>{name}</div>
                </div>
                <div className='pt-[20px]'>
                  <p>
                    {readMore[id] ? text : `${text.substring(0, 90)}...`}
                    <button className='text-green-500 ml-2' onClick={() => toggleReadMore(id)}>
                      {readMore[id] ? 'Show Less' : 'Read More'}
                    </button>
                  </p>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Comments;
