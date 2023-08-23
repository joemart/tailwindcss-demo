import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import ListboxWrapper from "./components/potatoWrapper";

export default function App() {
    const [selectedKeys, setSelectedKeys]: [Set<string>, any] = React.useState(new Set(["text"]));


    const handleChange = (e: any) => {
        setSelectedKeys(e)
    }


    return (
        <div className="flex flex-col gap-2">
            <ListboxWrapper>
                <Listbox
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={e => handleChange(e)}
                >
                    <ListboxItem className={`${selectedKeys.has("text") ? " bg-red-50" : ""}`} key="text">Text</ListboxItem>
                    <ListboxItem className={``} key="number">Number</ListboxItem>
                    <ListboxItem className={``} key="date">Date</ListboxItem>
                    <ListboxItem className={``} key="single_date">Single Date</ListboxItem>
                    <ListboxItem className={``} key="iteration">Iteration</ListboxItem>
                </Listbox>
            </ListboxWrapper>


        </div>
    );
}