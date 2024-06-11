'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Profile from '@components/Profile';

const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${session?.user.id}`);
      const data = await res.json();
      setPosts(data);
    }

    if (session?.user.id) fetchPosts();
  }, []);

  const handleEdit = () => {}
  const handleDelete = async () => {}

  return (
    <Profile
      name={'My'}
      desc={'Welcome to profile page'}
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile;