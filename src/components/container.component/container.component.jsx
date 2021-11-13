import React from "react";
import './container.styles.css';

const ContainerMain=({children})=>{
    return (
        <section class="content">
            {children}
        </section>
    );
}

export default ContainerMain;