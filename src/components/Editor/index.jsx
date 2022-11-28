import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { Wrapper } from './style';

const Editor = () => {
  const [addData, setVal] = useState('');
  // const [addedData, showData] = useState(0);

  const handleChange = (e, editor) => {
    const data = editor.getData();
    setVal(data);
  };

  const onSubmit = async () => {
    await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      JSON.stringify(addData)
    );
  };

  return (
    <div>
      <h2>본문 </h2>
      <Wrapper>
        <CKEditor
          editor={ClassicEditor}
          data={addData}
          onChange={handleChange}
        />
        <button onClick={onSubmit}></button>
      </Wrapper>
    </div>
  );
};

export default Editor;
