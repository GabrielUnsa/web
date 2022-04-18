import SweetAlert from 'react-bootstrap-sweetalert';

export default function SuccessAlert(){  
return(
  <SweetAlert success title="Consulta Enviada!" onConfirm={this.onConfirm} onCancel={this.onCancel}>
    Su consulta fue enviada con exito
  </SweetAlert>
);
}
