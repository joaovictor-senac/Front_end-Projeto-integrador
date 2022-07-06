import React, { useEffect } from "react";
import { Container } from './styles'
import { FiAlertCircle, FiXCircle, FiCheckCircle, FiInfo } from "react-icons/fi";
import { ToastMenssage, useToast } from "../../hooks/toast";

interface ToastProps {

    message: ToastMenssage;
    style: object;

}

const icons = {

    info: <FiInfo size={24} />,
    error: <FiAlertCircle size={24} />,
    success: <FiCheckCircle size={24} />


}


export default ToastContainer;