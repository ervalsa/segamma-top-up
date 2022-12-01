import React, { useEffect } from "react";
import AppLayout from "../../layouts/AppLayout.jsx";

export default function Games() {

    useEffect(() => {
        document.title = "Segamma | Games"
    }, []);

    return (
        <AppLayout>

        </AppLayout>
    )
}