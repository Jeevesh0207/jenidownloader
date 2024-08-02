import { toast } from 'react-toastify';

const notify = (message, type = 'info') => {
    const Option = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        style:{
            fontSize:13
        }
    }
    switch (type) {
        case 'success':
            toast.success(message, {...Option},);
            break;
        case 'error':
            toast.error(message, {...Option});
            break;
        case 'info':
            toast.info(message, {...Option});
            break;
        case 'warning':
            toast.warning(message, {...Option});
            break;
        default:
            toast(message, {...Option});
    }
};

export default notify;