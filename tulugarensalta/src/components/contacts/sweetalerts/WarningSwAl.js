import SweetAlert from 'react-bootstrap-sweetalert';

export default function WarningAlert(){
  return(
    <SweetAlert
  warning
  showCancel
  confirmBtnText="Yes, delete it!"
  confirmBtnBsStyle="danger"
  title="Are you sure?"
  onConfirm={this.deleteFile}
  onCancel={this.onCancel}
  focusCancelBtn
>
  You will not be able to recover this imaginary file!
</SweetAlert>
  );
}
