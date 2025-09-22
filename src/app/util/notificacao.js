import Swal from 'sweetalert2';

export const showAlert = ({
    title = '',
    text = '',
    icon = '',
    html = ''
}) => {
    Swal.fire({
        title,
        text,
        icon,
        html,
        confirmButtonText: 'OK'
    });
};
