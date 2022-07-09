import React from "react";
import './container.styles.css';

const ContainerMain=({children})=>{
    return (
        <section className="content">
            {children}
        </section>
    );
}

export default ContainerMain;