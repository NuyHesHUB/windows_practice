import React from 'react';
import './modal.css';

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div id="sub_modal" className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>

          에 내용이 입력된다. 리액트 함수형 모달
        팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui repellendus, animi repudiandae corrupti quod! Vero porro accusantium itaque ullam, culpa, quod sequi quae amet assumenda corrupti cupiditate odio veniam.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui repellendus, animi repudiandae corrupti quod! Vero porro accusantium itaque ullam, culpa, quod sequi quae amet assumenda corrupti cupiditate odio veniam.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui repellendus, animi repudiandae corrupti quod! Vero porro accusantium itaque ullam, culpa, quod sequi quae amet assumenda corrupti cupiditate odio veniam.
          </main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;