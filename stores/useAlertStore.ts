import { create } from "zustand";

type AlertDetails = {
    title: string;
    description: string;
    titleCss?: string;
    descriptionCss?: string;
    cancelBtnCss?: string;
};

type AlertState = {
    AlertOpen: boolean;
    alertDetails: AlertDetails;
    setAlertOpen: (details: AlertDetails) => void;
    setAlertClose: () => void;
};

export const INIT_ALERT_DETAILS = {
    title: "",
    description: "",
    titleCss: "",
    descriptionCss: "",
    cancelBtnCss: ""
};

const useAlertStore = create<AlertState>(set => ({
    AlertOpen: false,
    alertDetails: INIT_ALERT_DETAILS,
    setAlertOpen: (details: AlertDetails) => set({ AlertOpen: true, alertDetails: details }),
    setAlertClose: () => set({ AlertOpen: false, alertDetails: INIT_ALERT_DETAILS })
}));

export default useAlertStore;
