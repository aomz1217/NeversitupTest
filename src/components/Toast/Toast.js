import Swal from 'sweetalert2';

function Toast(props) {

if (props.open){
if (props.locate){
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1200,
  timerProgressBar: true,
  didOpen: (toast) => {
     setTimeout(() => {
  
  window.location = props.locate
}, 1200);
  }
  })

  Toast.fire({
  icon: props.type,
  title: props.title
})
}else{
 const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1200,
  timerProgressBar: true,
  })

  Toast.fire({
  icon: props.type,
  title: props.title
})   
}
}
}

export default Toast;
