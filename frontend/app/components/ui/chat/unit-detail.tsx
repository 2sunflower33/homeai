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
import Table from './table/Table';

export default function UnitDetail({propertyDetail, majorConcerns}: {propertyDetail: PropertyDetail, majorConcerns: any[]}) {

    const [displayModal, setDisplayModal] = useState(false);
    const [position, setPosition] = useState('center');

    console.log("UnitDetail.tsx:22:propertyDetail", propertyDetail)

    return (
        <>
            <Table propertyDetail={propertyDetail} majorConcerns={majorConcerns} />
        </>);
}


