import { Fragment, useState } from 'react';
import { Modal, Button } from 'flowbite-react';

export default function ButtonModal({ 
  isOpen, 
  toggle,
  style,
  size,
  header,
  body,
  footer, 
  ...rest
}) {
  
  const [ selfOpen, setSelfOpen ] = useState(false);

  return (
      <Fragment>
        <Modal
          {...rest}
          position=""
          size={size}
          backdrop={true}
          id='customScrollbar-none'
          style={{...style, height: "100vh", justifyContent: "center" }}
          show={isOpen!=undefined?isOpen:selfOpen} 
          onClose={()=>toggle!=undefined?toggle(!isOpen):setSelfOpen(!selfOpen)}
          >
          {header&&<Modal.Header className={`items-center ${header.className||""}`} >{header.content}</Modal.Header>}
          {body&&<Modal.Body id='customScrollbar-2' className={`p-[0_!important] ${body.className||""}`} style={body.style||{}}>
            {body.content}
          </Modal.Body>}
          {footer&&footer.content?<Modal.Footer className={`${footer.className}`}>{footer.content}</Modal.Footer>:footer===null?<Modal.Footer><Button color="gray" onClick={()=>toggle!=undefined?toggle(false):setSelfOpen(false)}>Cerrar</Button></Modal.Footer>:<></>}
        </Modal>
      </Fragment>
);
}