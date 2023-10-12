import styled from "styled-components";
import { Header } from "../../components/header";
import { AddTableName } from "../../components/addTable/addTableName";
import { AddTableData } from "../../components/addTable/addTableData";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";

interface formType {
    tableName: string;
    columRequests: { name: string; type: string }[];
}

export const AddTablePage = () => {
    const [next, setNext] = useState(1);
    const { form, setForm, handleChange } = useForm<formType>({
        tableName: "",
        columRequests: [],
    });
    return (
        <Container>
            <Header />
            {next === 1 ? (
                <AddTableName
                    setNext={setNext}
                    form={form}
                    handleChange={handleChange}
                />
            ) : (
                <AddTableData form={form} setForm={setForm} />
            )}
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
