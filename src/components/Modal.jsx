import useOnlineStatus from '../hooks/useOnlineStatus'

const Modal = () => {
    const isOnline = useOnlineStatus()

    return <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
}

export default Modal
