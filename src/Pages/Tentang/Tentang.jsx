import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout.jsx";

export default function TentangKami() {

    useEffect(() => {
        document.title = "Segamma | Tentang"
    }, []);

    return (
        <AppLayout>

        </AppLayout>
    )
}