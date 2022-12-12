import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-blod inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nobis autem earum sunt qui vitae non ipsa a corporis ut, quasi repellat commodi harum,
                alias, quam dignissimos? Exercitationem voluptatem molestias quo in.
                Impedit magni beatae nulla tempora sit, iure assumenda harum magnam omnis dolore ea.
                Autem nobis ratione praesentium placeat sequi?
            </p>

            <br/>

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, modi iusto. 
                Ducimus earum debitis maxime labore asperiores architecto a numquam officiis. 
                Non animi mollitia perferendis possimus debitis veniam tenetur maxime, 
                a modi porro distinctio minus. Repellendus harum saepe, pariatur accusamus laborum, 
                optio animi non molestiae, architecto delectus nihil iste at.
            </p>
        </div>
    </div>
  );
}

export default About;