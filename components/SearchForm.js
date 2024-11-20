import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SearchForm({ initialValue = '' }) {
  const [value, setValue] = useState(initialValue);
  const router = useRouter();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      router.push('/');
      return;
    }
    router.push(`/search/?q=${value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='q' value={value} onChange={handleChange} />
      <button>검색</button>
    </form>
  );
}
