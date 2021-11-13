import Slider from "../components/slider.component/slider.component";
import ContainerMain from "../components/container.component/container.component";
import Category from "../components/category.component/category.component";
import Consumer from "../components/consumer.component/consumer.component";

import DATA from "../trials/data";
import './main-layout.styles.css';

const MainLayout = ({ children }) => {
    const items=DATA;

    return (
        <div>
            <ContainerMain>
                    <Slider/>
                <Category/>
                <Consumer items={items} totalArtical='12455' title="Mua bán bất động sản" type="purchase"/>
                <Consumer items={items} totalArtical='124777' title="Cho thuê bất động sản" type="lease"/>
            </ContainerMain>
        </div>
    )
}
export default MainLayout;


