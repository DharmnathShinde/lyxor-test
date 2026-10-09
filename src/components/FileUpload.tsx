import { useState } from 'react';

export function FileUpload() {
  const [preview, setPreview] = useState('');

  const onPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setPreview(URL.createObjectURL(file));

    const form = new FormData();
    form.append('file', file, file.name);
    fetch('/api/upload', { method: 'POST', body: form });
  };

  return (
    <div>
      <input type="file" onChange={onPick} />
      <img src={preview} />
    </div>
  );
}
