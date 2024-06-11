'use client';

import { useEffect, useState } from 'react';
import PromptCard from './PromptCard';
import PromptCardList from './PromptCardList';

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/prompt');
      const data = await res.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  }

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or username'
          value={searchText}
          onChange={handleSearch}
          required
          className='search_input peer'
        />
      </form>

      <PromptCardList
        data={posts}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed;