import React, { useState } from 'react';
import './App.css'
import Modal from './component/modal';

function App(props) {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <div id="wrap">
          <div className='dock'>
              <button className='start-btn' onClick={openModal}>시작</button>
          </div>
          <ul>
              <li><a className='icon' href="#!" onClick={openModal}>아이콘1</a></li>
              <li><a className='icon' href="#!">아이콘2</a></li>
              <li><a className='icon' href="#!">아이콘3</a></li>
              <li><a className='icon' href="#!">아이콘4</a></li>
              <li><a className='icon' href="#!">아이콘5</a></li>
              <li><a className='icon' href="#!">아이콘6</a></li>
          </ul>
      <Modal open={modalOpen} close={closeModal} header="Modal heading">
        <main>{props.children}
          {/* 에 내용이 입력된다. 리액트 함수형 모달
        팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui repellendus, animi repudiandae corrupti quod! Vero porro accusantium itaque ullam, culpa, quod sequi quae amet assumenda corrupti cupiditate odio veniam.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui repellendus, animi repudiandae corrupti quod! Vero porro accusantium itaque ullam, culpa, quod sequi quae amet assumenda corrupti cupiditate odio veniam.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui repellendus, animi repudiandae corrupti quod! Vero porro accusantium itaque ullam, culpa, quod sequi quae amet assumenda corrupti cupiditate odio veniam. */}
        </main>
      </Modal>
      </div>
      
      
    </React.Fragment>
  );
}

export default App;