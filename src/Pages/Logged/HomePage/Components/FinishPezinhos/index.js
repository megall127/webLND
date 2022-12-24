import React, { useEffect, useState } from "react";
import api from "../../../../../service/api";
import { Body, ButtonFinish, ContainerDouble, ContainerList, ContainerListText, FormCoitainer, MonitorList } from "./styled";
import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column";
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';



const FinishPez = () => {
    const [monitores, setMonitores] = useState([{name: 'Leo Bandido',pesinhos_years: 3, pesinhos_month: 3, avulso: 3, subs: 3}])

    // const getMonitor = () => {
    //     api.get('/takemonitor')
    //     .then((res) => {
    //         setMonitores(res.data)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }

const clickButton = () => {
    api.get('/closemonth')
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
    const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;

    // useEffect(() => {
    //     getMonitor()
    // },[monitores])

    return(
        <Body>
            <FormCoitainer>
                <ContainerDouble>
                <DataTable value={monitores} paginator responsiveLayout="scroll"
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[10,20,50]}
                    paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                    <Column field="name" header="Name"></Column>
                    <Column field="pesinhos_years" header="Pezinho"></Column>
                    <Column field="pesinhos_month" header="Pezinho Gerado"></Column>
                    <Column field="avulso" header="Pontos por Aulas Avulsas"></Column>
                    <Column field="subs" header="Pontos por Substituição"></Column>
                </DataTable>
                </ContainerDouble>

            </FormCoitainer>
            <ButtonFinish onClick={()=> clickButton()}>Encerrar o Mês</ButtonFinish>
        </Body>
    )
}

export default FinishPez;