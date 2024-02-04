"use client";

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
// import 'primeflex/primeflex.css';
import { useEffect, useRef, useState } from "react";
import ChatItem from "./chat-item";
import MessageItemCard from "./message-item-card";
import MessageItemTable from "./message-item-table";
import NavCard from "./nav-card";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { PropertyDetail } from '../../chat-section';

export default function UnitDetail() {

    const [displayModal, setDisplayModal] = useState(false);
    const [position, setPosition] = useState('center');

    const onHide = () => {
        setDisplayModal(false);
    }

    const renderFooter = () => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide()} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide()} autoFocus />
            </div>
        );
    }

    return (
        <>
            {/* <Button label="Show" icon="pi pi-external-link" onClick={() => onClick()} /> */}

            <Dialog header="Header" visible={displayModal} modal={false} style={{ width: '50vw' }} footer={renderFooter('displayModal')} onHide={() => onHide('displayModal')}>
                <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Dialog>
        </>);
}


