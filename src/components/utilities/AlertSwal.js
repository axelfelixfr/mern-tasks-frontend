import Swal from 'sweetalert2';

const AlertSwal = ({
  title,
  iconInitial,
  confirmButton,
  cancelButton,
  functionSuccess,
  titleSuccess,
  iconSuccess,
  titleCancel,
  iconCancel
}) => {
  Swal.fire({
    title: title,
    showDenyButton: true,
    confirmButtonColor: '#01B6F5',
    showCloseButton: true,
    confirmButtonText: confirmButton,
    denyButtonText: cancelButton,
    denyButtonColor: '#FE4849',
    icon: iconInitial,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  }).then(result => {
    if (result.isConfirmed) {
      functionSuccess();
      Swal.fire({
        title: titleSuccess,
        confirmButtonColor: '#0091EA',
        showCloseButton: true,
        confirmButtonText: 'Ok',
        icon: iconSuccess
      });
    } else if (result.isDenied) {
      Swal.fire({
        title: titleCancel,
        confirmButtonColor: '#0091EA',
        showCloseButton: true,
        confirmButtonText: 'Ok',
        icon: iconCancel
      });
    }
  });
};

export default AlertSwal;
