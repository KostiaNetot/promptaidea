import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Find and share  
        <br className='max-md:hidden'/>
        <span className='orange_gradient text-center'>
          {' '} prompts powered by AI
        </span>
      </h1>
      <p className='desc text-center'>
        Promptaidea stands as an open-source AI prompting 
        tool tailored for the modern era, enabling users 
        to explore, craft, and distribute innovative prompts
      </p>
      <Feed/>
    </section>
  )
}

export default Home;