// import styles from "./page.module.scss";
import { Button, Layout } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout';


export default function Home() {
    return (
        // <div>

        //   <h1>Landing Page</h1>

        //   <div className="container-button">
        //     <Button className='primary-button' type='primary'>
        //       Click me
        //     </Button>
        //   </div>
        // </div>

        <Layout>
            <Header>Header</Header>
            <Content className='main-frame flex'>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}
