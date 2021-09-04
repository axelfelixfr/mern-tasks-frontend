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
    confirmButtonColor: '#00A3DC',
    showCloseButton: true,
    confirmButtonText: confirmButton,
    denyButtonText: cancelButton,
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
        confirmButtonColor: '#00A3DC',
        showCloseButton: true,
        confirmButtonText: 'Ok',
        icon: iconSuccess
      });
    } else if (result.isDenied) {
      Swal.fire({
        title: titleCancel,
        confirmButtonColor: '#00A3DC',
        showCloseButton: true,
        confirmButtonText: 'Ok',
        icon: iconCancel
      });
    }
  });
};

export default AlertSwal;
