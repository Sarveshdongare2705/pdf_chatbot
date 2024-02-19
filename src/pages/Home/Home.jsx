import React, { useEffect, useState } from "react";
import "./home.scss";
import pdf from "./../../assets/pdf.png";
import Card from "../../Card";

const FileUpload = ({ handleFileChange, handleRemoveFile, files }) => {
  return (
    <div>
      <div className="top">Your documents</div>
      <div className="line">Upload your pdf and click on process</div>

      <div className="input-section">
        <div style={{ fontWeight: "bold" }}>Drag and drop files here.</div>
        <input
          type="file"
          accept="application/pdf"
          multiple
          onChange={handleFileChange}
        />
      </div>

      <div className="top">Files</div>
      <div className="files">
        {files.map((file) => (
          <div className="file" key={file.id}>
            <img src={pdf} alt="" />
            <div className="title">{file.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const texts = [
      'Explore PDF Insights!',
      'Handle Multiple PDFs Easily.',
      'Instant Replies to Your Queries.',
      'Your PDF, Your Answers.'
    ];
    let textsindex = 0;
    let charindex = 0;
    let typeTimer, backspaceTimer;

    const type = () => {
      if (charindex <= texts[textsindex].length) {
        setText(texts[textsindex].slice(0, charindex));
        charindex++;
        typeTimer = setTimeout(type, 100);
      } else {
        backspaceTimer = setTimeout(backspace, 1000);
      }
    };

    const backspace = () => {
      if (charindex > 0) {
        setText(texts[textsindex].slice(0, charindex));
        charindex--;
        backspaceTimer = setTimeout(backspace, 50);
      } else {
        textsindex = (textsindex + 1) % texts.length;
        typeTimer = setTimeout(type, 100);
      }
    };

    type();

    return () => {
      clearTimeout(typeTimer);
      clearTimeout(backspaceTimer);
    };
  }, []);

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    const newFiles = Array.from(selectedFiles).map((file) => ({
      name: file.name,
      id: Math.random().toString(36).substring(7),
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  return (
    <div className="Home">
      <div className="heading">{text}</div>

      <div className="container">
        <div className="section1">
          <FileUpload
            handleFileChange={handleFileChange}
            files={files}
          />
          <button className="process">Process</button>
        </div>
        <div className="part">
          <div className="section2">
            <div className="top">Ask A Query ? </div>
            <div className="flexer">
              <div className="user">
                <img src="https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww" alt=""/>
              </div>
              <div className="query">
                <div className="name">Sarvesh Dongare</div>
                <input
                  type="text"
                  className="q"
                  placeholder="Enter query regarding your pdf."
                />
              </div>
              
              
            </div>
            
          </div>
          <div className="chats">
          <Card text={'What is the first rule of the amendment'}  bot={false}/>
          <Card text={'It states that each human should have equal rights'}  bot={true}/>
          <Card text={'What is the first rule of the amendment'}  bot={false}/>
          <Card text={'It states that each human should have equal rights'}  bot={true}/>
          <Card text={'What is the first rule of the amendment'}  bot={false}/>
          <Card text={'It states that each human should have equal rights'}  bot={true}/> 
          <Card text={'What is the first rule of the amendment'}  bot={false}/>
          <Card text={'It states that each human should have equal rights'}  bot={true}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
