import {useState} from 'react';
import axios from 'axios';

const useMovieModal = () => {

    const [modal, setModal] = useState({
        visible: false,
        data: {}
    });

    const openModal = mov => {
        let query = `${process.env.REACT_APP_API_BASE_URL}movie/${mov.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
        
        axios.get(query).then(res => {
            if (res.request.status === 200){ 
                setModal({
                    visible: true,
                    data: {...res.data}
                });
            } else {
                setModal({
                    visible: true,
                    data: {...mov}
                });
            }
        });
    }
    
    const closeModal = () => {
      setModal(prevStatus => ({...prevStatus, visible: false}));
    }
    
    return [
        modal,
        openModal,
        closeModal
    ];
}

export default useMovieModal;
